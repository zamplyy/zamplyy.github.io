import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Answer } from "../pages/fragor_och_svar";
import Chevron from "../public/assets/icons/chevron.svg";

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
    <motion.li className="rounded-3xl bg-white py-2 md:py-4 md:px-8 px-2  my-2 cursor-pointer">
      <div className="flex justify-between" onClick={() => handleClick(index)}>
        <button>
          <p>{option.title}</p>
        </button>
        <motion.button animate={{ rotate: isActive ? 180 : 0 }}>
          <Chevron />
        </motion.button>
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.p
            className="text-lg whitespace-pre-line"
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
      {options.length > 0 ? (
        options.map((option, i) => (
          <AccordionItem
            key={option.category + i}
            option={option}
            index={i}
            isActive={activeIndex === i}
            handleClick={handleClick}
          />
        ))
      ) : (
        <p className="pl-5">Inga sökresultat</p>
      )}
    </ul>
  );
}
