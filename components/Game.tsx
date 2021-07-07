import React, { useCallback, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../utils/constants";
import { RoundButton } from "./roundButton";
import { motion } from "framer-motion";
import Coin from "../public/assets/coin.svg";

enum Comparison {
  equal = "equal",
  lessThan = "lessThan",
  lessThanEquals = "lessThanEquals",
  greaterThan = "greaterThan",
  greaterThanEquals = "greaterThan",
  notEqual = "notEqual",
}

enum BourseState {
  happy = "happy",
  sad = "sad",
  clueless = "clueless",
}

type Question = {
  item: Item;
  number: number;
  comparison: Comparison;
  id: number;
  question: string;
  itemOptions: (Item | undefined)[];
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

const getRandomFromArray = (arr: any[], n: number) => {
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
    question: "Hjälp mig köpa 2 varor som kostar lika mycket som glassen!",
    id: 1,
    item: { icon: "🍦", name: "Glass", price: 25, id: 9 },
    number: 1,
    itemOptions: [
      { icon: "🍾", name: "Champagne", price: 100, id: 7 },
      { icon: "🍫", name: "Choklad", price: 20, id: 3 },
      { icon: "🍟", name: "Pommes", price: 8, id: 6 },
      { icon: "🍔", name: "Hamburgare", price: 10, id: 5 },
      { icon: "🍕", name: "Pizza", price: 17, id: 8 },
      { icon: "🧀", name: "Ost", price: 5, id: 4 },
    ],
  },
  {
    comparison: Comparison.lessThan,
    question: "Hjälp mig köpa 2 varor som kostar mindre än champagnen!",
    id: 1,
    item: { icon: "🍾", name: "Champagne", price: 50, id: 7 },
    number: 1,
    itemOptions: [
      { icon: "🍟", name: "Pommes", price: 28, id: 6 },
      { icon: "🍫", name: "Choklad", price: 20, id: 3 },
      { icon: "🍕", name: "Pizza", price: 17, id: 8 },
      { icon: "🍐", name: "Päron", price: 6, id: 2 },
      { icon: "🧀", name: "Ost", price: 35, id: 4 },
      { icon: "🍔", name: "Hamburgare", price: 13, id: 5 },
    ],
  },
  {
    comparison: Comparison.lessThan,
    question: "Hjälp mig köpa 2 varor som kostar mindre än fotbollen!",
    id: 1,
    item: { icon: "⚽️", name: "Fotboll", price: 250, id: 7 },
    number: 1,
    itemOptions: [
      { icon: "🪀", name: "Yoyo", price: 69, id: 3 },
      { icon: "🏓", name: "Pingisrack", price: 199, id: 4 },
      { icon: "🍭", name: "'Klubba'", price: 13, id: 5 },
      { icon: "🏸", name: "BadmintonRack", price: 149, id: 6 },
      { icon: "🏂", name: "Snowboard", price: 1599, id: 2 },
      { icon: "🚴‍♂️", name: "Cykel", price: 2300, id: 8 },
    ],
  },
  {
    comparison: Comparison.greaterThanEquals,
    question: "Hjälp mig köpa 2 varor som kostar mer än som hamburgaremenyn!",
    id: 1,
    item: { icon: "🍔🍟🥤", name: "HamburgareMeny", price: 95, id: 7 },
    number: 1,
    itemOptions: [
      { icon: "🍣", name: "Sushi", price: 80, id: 3 },
      { icon: "🧀", name: "Ost", price: 35, id: 4 },
      { icon: "🍭", name: "'Klubba'", price: 13, id: 5 },
      { icon: "🍿", name: "Popcorn", price: 48, id: 6 },
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
  const [question, setQuestion] = useState<Question>(
    Questions[Math.floor(Math.random() * Questions.length)]
  );
  const [firstSelectedItem, setFirstSelectedItem] = useState<Item>();
  const [secondSelectedItem, setSecondSelectedItem] = useState<Item>();
  const [bourseState, setBourseState] = useState<BourseState>(
    BourseState.clueless
  );

  const [itemOptions, setItemOptions] = useState(question.itemOptions);
  // const itemsFiltered: Item[] = useMemo(
  //   () =>
  //     getRandomFromArray(
  //       Items.filter((item) => item.id !== question.item.id),
  //       Items.length - 1
  //     ).slice(0, 6),
  //   [question]
  // );

  const selectedSum =
    (firstSelectedItem ? firstSelectedItem.price : 0) +
    (secondSelectedItem ? secondSelectedItem.price : 0);

  const validateQuestion = () => {
    if (firstSelectedItem && secondSelectedItem) {
      const selectedSum = firstSelectedItem.price + secondSelectedItem.price;
      const questionSum = question.item.price * question.number;

      switch (question.comparison) {
        case Comparison.equal:
          return selectedSum === questionSum;
        case Comparison.greaterThan:
          return selectedSum > questionSum;
        case Comparison.greaterThanEquals:
          return selectedSum >= questionSum;
        case Comparison.lessThan:
          return selectedSum < questionSum;
        case Comparison.lessThanEquals:
          return selectedSum <= questionSum;
        case Comparison.notEqual:
          return selectedSum !== questionSum;
      }
    }
  };

  const nextQuestion = () => {
    const random: Question[] = getRandomFromArray(Questions, 1);
    setBourseState(BourseState.clueless);
    setFirstSelectedItem(undefined);
    setSecondSelectedItem(undefined);
    setQuestion(random[0]);
    setItemOptions(random[0].itemOptions);
  };

  const handleDroppedItem = (
    from: string,
    to: string,
    fromItem?: Item,
    toItem?: Item
  ) => {
    if (from.includes("item_option") && to.includes("item_option")) {
      const indexOfFromItem = parseInt(from.split("_")[2]);
      const indexOfToItem = parseInt(to.split("_")[2]);
      const results = itemOptions.slice();
      const firstItem = itemOptions[indexOfFromItem];
      results[indexOfFromItem] = itemOptions[indexOfToItem];
      results[indexOfToItem] = firstItem;
      setItemOptions(results);
    } else if (from.includes("item_option") && !to.includes("item_option")) {
      const indexOfFromItem = parseInt(from.split("_")[2]);
      if (to === "first_selected") {
        setFirstSelectedItem(itemOptions[indexOfFromItem]);
      } else {
        setSecondSelectedItem(itemOptions[indexOfFromItem]);
      }
      const results = itemOptions.slice();
      results[indexOfFromItem] = toItem;
      setItemOptions(results);
    } else if (!from.includes("item_option") && to.includes("item_option")) {
      const indexOfToItem = parseInt(to.split("_")[2]);
      const results = itemOptions.slice();
      results[indexOfToItem] = fromItem;
      setItemOptions(results);
      if (from === "first_selected") {
        setFirstSelectedItem(itemOptions[indexOfToItem]);
      } else {
        setSecondSelectedItem(itemOptions[indexOfToItem]);
      }
    } else {
      if (from === "first_selected") {
        setFirstSelectedItem(toItem);
        setSecondSelectedItem(fromItem);
      } else {
        setSecondSelectedItem(toItem);
        setFirstSelectedItem(fromItem);
      }
    }
  };

  const buyDisabled = !firstSelectedItem || !secondSelectedItem;

  const bourseImage = () => {
    switch (bourseState) {
      case BourseState.happy:
        return "bourse_happy.svg";
      case BourseState.sad:
        return "bourse_sad.svg";
      case BourseState.clueless:
        return "bourse_clueless.svg";
    }
  };

  const BourseTalking = () => {
    switch (bourseState) {
      case BourseState.happy:
        return "Tack för hjälpen !!";
      case BourseState.sad:
        return "OJ nu blev det lite knasigt. Försök igen!";
      case BourseState.clueless:
        return question.question;
    }
  };

  return (
    <motion.div className="pt-24 pb-10 max-w-screen-lg lg:mx-auto">
      <div className="grid grid-cols-6 gap-4 gap-y-16 text-center mt-12">
        <ItemContainerView
          item={question.item}
          showPrice
          noDrag
          noDrop
          id="question_item"
        />

        <div className="col-span-2 flex justify-center relative">
          <p
            className="text-base font-bold italic absolute -top-32 left-14 p-5 text-center h-32 w-80 dark:text-text-color"
            style={{
              backgroundImage: `url("assets/talking_background.svg")`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            {BourseTalking()}
          </p>
          <div className="flex object-contain h-36 justify-center">
            <img src={`assets/${bourseImage()}`}></img>
          </div>
        </div>
        <ItemContainerView
          item={firstSelectedItem}
          showPrice
          dragHere
          id="first_selected"
          handleDroppedItem={handleDroppedItem}
        />
        <ItemContainerView
          item={secondSelectedItem}
          showPrice
          dragHere
          id="second_selected"
          handleDroppedItem={handleDroppedItem}
        />
        <div
          className={`flex flex-col items-center ${
            buyDisabled ? "opacity-70" : ""
          }`}
        >
          <div className="border-l-4 border-r-4 border-t-4 rounded-t-xl bg-accent-3 mt-2 border-accent-2 dark:bg-accent-2 dark:border-accent-3">
            <p className="inline-flex items-center px-2">
              <span className="pr-2">
                <Coin />
              </span>
              {`${selectedSum} kr`}
            </p>
          </div>
          <motion.button
            className={`py-4 rounded-xl px-10 bg-accent-2 w-full`}
            onClick={() => {
              if (bourseState === BourseState.happy) {
                nextQuestion();
              } else {
                if (validateQuestion()) {
                  setBourseState(BourseState.happy);
                } else {
                  setBourseState(BourseState.sad);
                }
              }
            }}
            whileHover={buyDisabled ? {} : { scale: 1.02 }}
            whileTap={buyDisabled ? {} : { scale: 0.98 }}
            disabled={buyDisabled}
          >
            <div className={` flex justify-center `}>
              <p className="text-white text-xl dark:text-text-color font-jost justify-center">
                {bourseState !== BourseState.happy ? "KÖP" : "NÄSTA"}
              </p>
            </div>
          </motion.button>
        </div>
        {itemOptions.map((item, i) => (
          <div key={"item_" + item?.id + "_" + i}>
            <ItemContainerView
              item={item}
              id={`item_option_${i}`}
              handleDroppedItem={handleDroppedItem}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

type ItemContainerProps = {
  item?: Item;
  showPrice?: boolean;
  noDrag?: boolean;
  noDrop?: boolean;
  dragHere?: boolean;
  setItemOptions?: any;
  id: string;
  handleDroppedItem?: (
    from: string,
    to: string,
    fromItem?: Item | undefined,
    toItem?: Item | undefined
  ) => void;
};
export function ItemContainerView(props: ItemContainerProps) {
  const { item, showPrice, noDrag, noDrop, dragHere, id, handleDroppedItem } =
    props;

  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.ITEM,
      canDrop: (hovered: any) => {
        const droppedItem: Item = hovered.item;
        if (droppedItem.id === item?.id) return false;
        return !!noDrop ? false : true;
      },
      drop: (dropped) => {
        const droppedItem: Item = dropped.item;
        if (handleDroppedItem) {
          handleDroppedItem(id, dropped.id, item, droppedItem);
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [item?.id, handleDroppedItem]
  );

  return (
    <div
    // className={`${
    //   dragHere ? "border-4 border-dashed border-accent-2 rounded-lg" : ""
    // }`}
    >
      <div
        ref={drop}
        className={`h-28 justify-center flex border-4 rounded-xl ${
          isOver && canDrop
            ? "bg-accent-2  border-accent-3 dark:bg-accent-3 dark:border-accent-2"
            : "bg-accent-3  border-accent-2 dark:bg-accent-2 dark:border-accent-3"
        }`}
      >
        {item ? (
          <ItemView item={item} noDrag={noDrag} id={id} />
        ) : dragHere ? (
          <p
            className={`opacity-60 text-center self-center ${
              isOver && canDrop ? "text-white" : "text-black"
            }`}
          >
            Dra en vara hit!
          </p>
        ) : null}
      </div>
      {showPrice && item ? (
        <div className="border-4 rounded-xl bg-accent-3 mt-2 border-accent-2  dark:bg-accent-2 dark:border-accent-3 ">
          <p className="inline-flex items-center">
            <span className="pr-2">
              <Coin />
            </span>
            {`${item?.price} kr`}
          </p>
        </div>
      ) : null}
    </div>
  );
}

type ItemProps = {
  item: Item;
  noDrag?: boolean;
  id: string;
};

export function ItemView(props: ItemProps) {
  const { item, noDrag, id } = props;

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.ITEM,
      item: { item, id },
      canDrag: () => (!!noDrag ? false : true),
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
        canDrag: !!monitor.canDrag(),
      }),
    }),
    [item?.id]
  );

  return (
    <div
      className={`justify-center items-center flex-grow  ${
        isDragging ? "hidden" : "flex"
      }`}
      ref={drag}
    >
      <p className="text-5xl">{item.icon}</p>
    </div>
  );
}
