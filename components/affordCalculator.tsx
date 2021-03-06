import Card from "./card";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useWindowSize from "../utils/useWindowSize";
// import starUrl, { ReactComponent as Star } from './star.svg'
// import ThumbsUpUrl from "../public/assets/icons/thumbs-up.svg";

type Props = {};
interface FormInput {
  bankAccount: number;
  cost: number;
}

enum Page {
  input = 0,
  calculated = 1,
}

enum CalculatedPages {
  canAfford = 0,
  canNotAfford = 1,
}

interface CalculatedPage {
  title: string;
  icon: any;
  text: string;
  canAfford: boolean;
}

const calculatedPageInformation: Map<CalculatedPages, CalculatedPage> = new Map(
  [
    [
      CalculatedPages.canAfford,
      {
        icon: "/assets/icons/thumbs-up.svg",
        text: "Om du köper varan har du såhär mycket kvar på kontot:",
        title: "Du har råd!",
        canAfford: true,
      },
    ],
    [
      CalculatedPages.canNotAfford,
      {
        icon: "/assets/icons/thumbs-down.svg",
        text: "Du kan tyvärr inte köpa denna varan",
        title: "Du har tyvärr inte råd!",
        canAfford: false,
      },
    ],
  ]
);

const AffordCalculator = (props: Props) => {
  const { register, handleSubmit, errors } = useForm<FormInput>({
    mode: "onBlur",
  });
  const [page, setPage] = useState<Page>(Page.input);
  const [moneyLeft, setMoneyLeft] = useState<number>();
  const [calculatedPage, setCalculatedPage] = useState<CalculatedPage>();

  const { width } = useWindowSize();

  const breakpoint = width && width < 640;

  const onSubmit = (data: FormInput) => {
    const moneyLeft = data.bankAccount - data.cost;
    setMoneyLeft(moneyLeft);
    const canAfford =
      moneyLeft >= 0 ? CalculatedPages.canAfford : CalculatedPages.canNotAfford;
    setCalculatedPage(calculatedPageInformation.get(canAfford));
    setPage(Page.calculated);
  };

  const onBack = () => {
    setPage(Page.input);
    setMoneyLeft(0);
  };

  const renderInputPage = () => {
    return (
      <div className="flex flex-col flex-grow px-4 py-3 sm:px-16 sm:py-12 ">
        <h3 className="font-bold text-2xl my-5">Kolla om du har råd</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex flex-col space-y-5">
            <label
              htmlFor="bankAccount"
              className={`text-xl ${
                errors.bankAccount ? "text-red-500" : null
              }`}
            >
              Hur mycket pengar har du på ditt bankkonto?
            </label>

            <input
              name="bankAccount"
              type="number"
              placeholder="Summa"
              min={0}
              className="p-3 pl-5 rounded-full border-border border-2"
              ref={register({
                valueAsNumber: true,
                required: "*",
              })}
            />
          </div>
          <div className="flex flex-col space-y-5">
            <label
              className={`text-xl ${errors.cost ? "text-red-500" : null}`}
              htmlFor="cost"
            >
              Hur mycket kostar det du vill köpa?
            </label>
            <input
              min={0}
              name="cost"
              type="number"
              placeholder="Summa"
              className="p-3 pl-5 rounded-full border-border border-2"
              ref={register({ valueAsNumber: true, required: "*" })}
            />
          </div>
          <div className="justify-center flex">
            <button
              className="bg-accent-2 dark:bg-accent-3 text-white dark:text-text-color font-semibold text-l px-14 py-3 rounded-full hover:underline "
              type="submit"
            >
              Räkna ut
            </button>
          </div>
        </form>
      </div>
    );
  };

  const renderCalculatedPage = () => {
    return (
      <div
        className={`flex flex-col flex-grow px-4 py-3 sm:px-16 sm:py-12 justify-center sm:justify-start ${
          calculatedPage?.canAfford ? "bg-good" : "bg-bad"
        }`}
      >
        <div className="justify-center flex flex-col">
          <div className="m-auto w-32">
            <img src={calculatedPage?.icon}></img>
          </div>
          <div className="text-center space-y-3 py-5">
            <h3 className="font-bold text-2xl text-text-color">
              <span className="text-text-color">{calculatedPage?.title}</span>
            </h3>
            <p>
              <span className="text-text-color">{calculatedPage?.text}</span>
            </p>
            <h1 className="py-4">
              <span className="text-text-color">{moneyLeft + " KR"}</span>
            </h1>
          </div>
          <div className="m-auto">
            <button
              className="bg-accent-2 dark:bg-accent-3 text-white dark:text-text-color font-semibold text-l  px-14 py-3 rounded-full hover:underline "
              onClick={onBack}
            >
              Stäng
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center mb-14">
      <Card
        height={breakpoint ? 500 : page === Page.input ? 500 : 530}
        width={breakpoint ? 300 : 500}
      >
        {page === Page.input ? renderInputPage() : renderCalculatedPage()}
      </Card>
    </div>
  );
};

export default AffordCalculator;
