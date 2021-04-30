import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Answer } from "../pages/fragor_och_svar";

type AccordionProps = {
  options: Answer[];
};

type AccordionItemProps = {
  option: Answer;
  isActive: boolean;
  handleClick: (index: number) => void;
  index: number;
};

const AccordionItem = ({
  option,
  isActive,
  handleClick,
  index,
}: AccordionItemProps) => {
  return (
    <motion.li className="rounded-full bg-white py-2 px-4 my-3 cursor-pointer">
      <button onClick={() => handleClick(index)}>
        <p>{option.title}</p>
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.p
            className="text-lg"
            key={option.title}
            initial={{ height: 0, opacity: 0, marginBottom: 0 }}
            animate={{ height: "auto", opacity: 1, marginBottom: 12 }}
            exit={{ height: 0, opacity: 0, marginBottom: 0 }}
            transition={{ type: "tween" }}
          >
            {option.answer}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export function Accordion(props: AccordionProps) {
  const { options } = props;

  const [activeIndex, setActiveIndex] = useState<number | null>();

  const handleClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <ul>
      {options.map((option, i) => (
        <AccordionItem
          key={option.category + i}
          option={option}
          index={i}
          isActive={activeIndex === i}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
}
