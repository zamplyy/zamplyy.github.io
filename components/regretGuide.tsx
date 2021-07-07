import Card from "./card";
import { useState } from "react";
import { RoundButton } from "./roundButton";
import Back from "../public/assets/icons/back.svg";
import Close from "../public/assets/icons/close.svg";
import Drinks from "../public/assets/icons/dryck.svg";
import Clothes from "../public/assets/icons/klader.svg";
import Other from "../public/assets/icons/annat.svg";
import Redo from "../public/assets/icons/redo.svg";
import Download from "../public/assets/icons/download.svg";
import Checkmark from "../public/assets/icons/cloud_checkmark.svg";
import useWindowSize from "../utils/useWindowSize";

type Props = {};

enum Page {
  start = "start",
  quiz = "quiz",
  results = "results",
}

type Answer = {
  icon?: any;
  text: string;
};

type Question = {
  question: string;
  answers: Answer[];
  id: number;
};

const Quiz: Question[] = [
  {
    id: 1,
    question: "Vilken typ av produkt är det du vill lämna tillbaka?",
    answers: [
      { text: "Mat & dryck", icon: <Drinks /> },
      { text: "Kläder & skor", icon: <Clothes /> },
      { text: "Annat", icon: <Other /> },
    ],
  },
  {
    id: 2,
    question: "Var varan förpackad när du köpte den?",
    answers: [{ text: "Ja" }, { text: "Nej" }],
  },
  {
    id: 3,
    question: "Är varan fortfarande i förpackningen?",
    answers: [{ text: "Ja" }, { text: "Nej" }],
  },
  {
    id: 4,
    question: "Har du kvar kvittot?",
    answers: [{ text: "Ja" }, { text: "Nej" }],
  },
];

type QuestionAnswer = {
  question: Question;
  answer: Answer;
};

const RegretGuide = (props: Props) => {
  const [page, setPage] = useState<Page>(Page.start);
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const [answers, setAnswers] = useState<QuestionAnswer[]>([]);

  const { width } = useWindowSize();

  const breakpoint = width && width < 840;

  const startQuiz = () => {
    setAnswers([]);
    const [firstQuestion] = Quiz;
    if (firstQuestion) {
      setCurrentQuestion(firstQuestion);
      setPage(Page.quiz);
    }
  };

  const nextQuestion = (question: Question, answer: Answer) => {
    const arr = [...answers];
    const questionAlreadyAnsweredIndex = arr.findIndex(
      (questionAnswer) => questionAnswer.question.id === question.id
    );
    if (questionAlreadyAnsweredIndex === -1) {
      arr.push({ question, answer });
    } else {
      arr[questionAlreadyAnsweredIndex] = { question, answer };
    }
    setAnswers(arr);

    const index = Quiz.findIndex(
      (question) => currentQuestion?.question === question.question
    );
    let nextItem = null;
    if (index + 1 === Quiz.length) {
      setPage(Page.results);
    }
    if (index >= 0 && index < Quiz.length - 1) {
      nextItem = Quiz[index + 1];
    }
    if (nextItem) {
      setCurrentQuestion(nextItem);
    }
  };

  const previousQuestion = () => {
    const index = Quiz.findIndex(
      (question) => currentQuestion?.question === question.question
    );
    let prevItem = null;
    if (index === 0) {
      setPage(Page.start);
    }
    if (index >= 0 && index < Quiz.length - 1) {
      prevItem = Quiz[index - 1];
    }
    if (prevItem) {
      setCurrentQuestion(prevItem);
    }
  };

  const renderStartPage = () => {
    return (
      <div className="flex flex-col flex-grow px-10 py-2 justify-between">
        <div>
          <h3 className="font-bold text-3xl py-7">Har du ångrat dig?</h3>
          {breakpoint ? (
            <p>Öppna hemsidan på datorn så sätter vi igång!</p>
          ) : (
            <p>Klicka på knappen så sätter vi igång!</p>
          )}
        </div>
        <div className="self-center pb-7">
          <RoundButton
            text="Starta guiden"
            onClick={() => (breakpoint ? null : startQuiz())}
          />
        </div>
      </div>
    );
  };

  const renderQuiz = () => {
    return (
      <div className="flex flex-row flex-grow py-12">
        <div className="mx-10 pt-2 flex-shrink-0">
          <button onClick={previousQuestion}>
            <Back stroke="#343434" />
          </button>
        </div>

        <div className="flex flex-col flex-grow text-center justify-between">
          <h2>{currentQuestion?.question}</h2>
          <div className="flex flex-col self-center">
            {currentQuestion?.answers.map((answer) => (
              <RoundButton
                key={answer.text}
                onClick={() => nextQuestion(currentQuestion, answer)}
                text={answer.text}
                icon={answer.icon}
              />
            ))}
          </div>
        </div>
        <div className="mx-10 pt-2 flex-shrink-0">
          <button onClick={() => setPage(Page.start)}>
            <Close />
          </button>
        </div>
      </div>
    );
  };

  const isPositiveResult = () => {
    const hasReceipt =
      answers.find(({ question }) => question.id === 4)?.answer.text === "Ja";

    return hasReceipt;
  };

  const renderResults = () => {
    const isPositive = isPositiveResult();

    const bgColor = isPositive ? "" : "bg-bad";
    const text = isPositive
      ? `Den här varan går nog att lämna tillbaka. Ta med dig varan & kvittot till butiken & be om att få lämna tillbaka det du köpt. 

      Du kan spara ditt resultat och ta med dig till butiken som stöd.`
      : `Den här varan går inte att lämna tillbaka.

      Du kan spara ditt resultat för att komma ihåg varför du inte fick lämna tillbaka varan.`;

    const imageSrc = isPositive
      ? "/assets/bourse_content.svg"
      : "/assets/bourse_not_content.svg";

    return (
      <div
        className={`flex flex-col flex-grow px-10 py-12 text-center justify-between ${bgColor}`}
      >
        <div>
          <h2>Resultat</h2>
          <p className="whitespace-pre-line">{text}</p>
        </div>
        <div className="flex-col flex self-center relative ">
          <RoundButton
            onClick={() => setPage(Page.start)}
            text="Spara ditt resultat"
            icon={<Download />}
          />
          <RoundButton
            onClick={() => setPage(Page.start)}
            text="Tack, då vet jag!"
            icon={<Checkmark />}
          />
          <RoundButton
            onClick={startQuiz}
            text="Jag vill göra om från början"
            icon={<Redo />}
          />
          <div
            className="absolute -right-60 -top-20"
            style={{
              right: -227,
            }}
          >
            <img src={imageSrc}></img>
          </div>
        </div>
      </div>
    );
  };

  const getPage = () => {
    switch (page) {
      case Page.start:
        return renderStartPage();
      case Page.quiz:
        return renderQuiz();
      case Page.results:
        return renderResults();
    }
  };

  const getPageHeight = () => {
    switch (page) {
      case Page.start:
        return 425;
      case Page.quiz:
        return 425;
      case Page.results:
        return 540;
    }
  };

  return (
    <div className="flex justify-center my-14">
      <Card
        height={page === Page.start ? 275 : getPageHeight()}
        width={breakpoint ? 350 : 820}
      >
        {getPage()}
      </Card>
    </div>
  );
};

export default RegretGuide;
