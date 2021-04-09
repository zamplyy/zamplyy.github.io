import { useMemo, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../utils/constants";
import BourseHappy from "../public/assets/bourse_happy.svg";
import { RoundButton } from "./roundButton";
// import { motion } from "framer-motion";

enum Comparison {
  equal = "equal",
  lessThan = "lessThan",
  lessThanEquals = "lessThanEquals",
  greaterThan = "greaterThan",
  greaterThanEquals = "greaterThan",
  notEqual = "notEqual",
}

type Question = {
  item: Item;
  number: number;
  comparison: Comparison;
  id: number;
  question: string;
  itemOptions: [Item?, Item?, Item?, Item?, Item?, Item?];
};

type Item = {
  name?: string;
  icon: string;
  price: number;
  id: number;
};

const Items: Item[] = [
  { icon: "🍏", name: "Äpple", price: 12, id: 1 },
  { icon: "🍐", name: "Päron", price: 6, id: 2 },
  { icon: "🍫", name: "Choklad", price: 20, id: 3 },
  { icon: "🧀", name: "Ost", price: 40, id: 4 },
  { icon: "🍔", name: "Hamburgare", price: 8, id: 5 },
  { icon: "🍟", name: "Pommes", price: 16, id: 6 },
  { icon: "🍾", name: "Champagne", price: 100, id: 7 },
  { icon: "🍕", name: "Pizza", price: 75, id: 8 },
  { icon: "🍦", name: "Glass", price: 25, id: 9 },
];

const getRandomFromArray = (arr: Item[], n: number) => {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

const Questions: Question[] = [
  {
    comparison: Comparison.equal,
    question: "Hjälp mig köpa 2 varor som kostar lika mycket som chokladen!",
    id: 1,
    item: { icon: "🍦", name: "Glass", price: 25, id: 9 },
    number: 1,
    itemOptions: [
      { icon: "🍫", name: "Choklad", price: 20, id: 3 },
      { icon: "🧀", name: "Ost", price: 5, id: 4 },
      { icon: "🍔", name: "Hamburgare", price: 10, id: 5 },
      { icon: "🍟", name: "Pommes", price: 8, id: 6 },
      { icon: "🍾", name: "Champagne", price: 100, id: 7 },
      { icon: "🍕", name: "Pizza", price: 17, id: 8 },
    ],
  },
  {
    comparison: Comparison.lessThan,
    question: "Hjälp mig köpa 2 varor som kostar mindre än som champagnen!",
    id: 1,
    item: { icon: "🍾", name: "Champagne", price: 100, id: 7 },
    number: 1,
    itemOptions: [
      { icon: "🍫", name: "Choklad", price: 20, id: 3 },
      { icon: "🧀", name: "Ost", price: 5, id: 4 },
      { icon: "🍔", name: "Hamburgare", price: 10, id: 5 },
      { icon: "🍟", name: "Pommes", price: 8, id: 6 },
      { icon: "🍐", name: "Päron", price: 6, id: 2 },
      { icon: "🍕", name: "Pizza", price: 17, id: 8 },
    ],
  },
];

// const GameState = {
//   seletedItem1
//   seletedItem2
//   items = []
//   question
//   resultState
// }

export function Game() {
  const [question, setQuestion] = useState<Question>(Questions[0]);
  const [firstSelectedItem, setFirstSelectedItem] = useState<Item>();
  const [secondSelectedItem, setSecondSelectedItem] = useState<Item>();

  const [itemOptions, setItemOptions] = useState(question.itemOptions);
  // const itemsFiltered: Item[] = useMemo(
  //   () =>
  //     getRandomFromArray(
  //       Items.filter((item) => item.id !== question.item.id),
  //       Items.length - 1
  //     ).slice(0, 6),
  //   [question]
  // );

  return (
    <div className="py-10 max-w-screen-lg lg:mx-auto">
      <div className="grid grid-cols-6 gap-4 gap-y-16 text-center mt-12">
        <ItemContainerView item={question.item} showPrice noDrag noDrop />
        <div className="col-span-2 flex justify-center relative">
          <div className="p-4 bg-white absolute rounded-xl -top-24 left-4 -right-20">
            <p className="text-base">{question.question}</p>
          </div>
          <div className="flex">
            <BourseHappy />
          </div>
        </div>
        <ItemContainerView item={firstSelectedItem} showPrice dragHere />
        <ItemContainerView item={secondSelectedItem} showPrice dragHere />
        <div className="h-10">
          <RoundButton
            text="KÖP"
            onClick={() => {
              console.log("question", question);
            }}
          ></RoundButton>
        </div>
        {itemOptions.map((item, i) => (
          <div
            key={"item_" + item?.id + "_" + i}
            onClick={() => setFirstSelectedItem(item)}
          >
            <ItemContainerView item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

type ItemContainerProps = {
  item?: Item;
  showPrice?: boolean;
  noDrag?: boolean;
  noDrop?: boolean;
  dragHere?: boolean;
  setItemOptions?: any;
};
export function ItemContainerView(props: ItemContainerProps) {
  const { item, showPrice, noDrag, noDrop, dragHere } = props;

  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.ITEM,
      canDrop: (dropped: any) => {
        const droppedItem: Item = dropped.item;
        if (droppedItem.id === item?.id) return false;
        return !!noDrop ? false : true;
      },
      drop: (dropped: any) => {
        const droppedItem: Item = dropped.item;
        console.log("Dropped item", droppedItem, item);
        if (dragHere) {
        } else {
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    []
  );

  return (
    <div>
      <div
        ref={drop}
        className={`h-28 justify-center items-center flex border-4 rounded-xl ${
          isOver && canDrop
            ? "bg-accent-2  border-accent-3"
            : "bg-accent-3  border-accent-2"
        }`}
      >
        {item ? (
          <ItemView item={item} noDrag={noDrag} />
        ) : dragHere ? (
          <p
            className={`opacity-60 text-center ${
              isOver && canDrop ? "text-white" : "text-black"
            }`}
          >
            Drag en vara hit!
          </p>
        ) : null}
      </div>
      {showPrice && item ? (
        <div className="border-4 rounded-xl bg-accent-3 mt-2 border-accent-2">
          <p>{`${item?.price} kr`}</p>
        </div>
      ) : null}
    </div>
  );
}

type ItemProps = {
  item: Item;
  noDrag?: boolean;
};

export function ItemView(props: ItemProps) {
  const { item, noDrag } = props;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ITEM,
    item: { item },
    canDrag: () => (!!noDrag ? false : true),
    collect: (monitor: { isDragging: () => any; canDrag: () => any }) => ({
      isDragging: !!monitor.isDragging(),
      canDrag: !!monitor.canDrag(),
    }),
  }));

  return (
    <div
      className={`flex-col justify-center ${isDragging ? "hidden" : "flex"}`}
      ref={drag}
    >
      <p className="text-5xl">{item.icon}</p>
    </div>
  );
}
