import React, { CSSProperties } from "react";
import { Carousel } from "react-responsive-carousel";
import { Quote } from "../pages";
import Card from "./card";

const arrowStyles: CSSProperties = {
  position: "absolute",
  zIndex: 2,
  top: "calc(50% - 40px)",
  width: 40,
  height: 80,
  cursor: "pointer",
};
const indicatorStyles: CSSProperties = {
  backgroundColor: "#33787B",
  width: 16,
  height: 16,
  borderRadius: "100%",
  display: "inline-block",
  margin: "14px 8px",
};
type Props = {
  quotes: Quote[];
};
export function Quotes(props: Props) {
  const { quotes } = props;
  return (
    <Carousel
      infiniteLoop
      stopOnHover
      showStatus={false}
      showThumbs={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, left: 15 }}
          >
            <img src={"/assets/icons/left-arrow.svg"} />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, right: 15 }}
          >
            <img src={"/assets/icons/right-arrow.svg"} />
          </button>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              style={{ ...indicatorStyles, backgroundColor: "#E0EBEB" }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
    >
      {quotes.map((quote, index) => {
        return (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center space-y-6 pt-12 pb-20 md:justify-center md:space-x-10 bg-accent-1 md:py-24"
          >
            <Card width={300} height={300}>
              <div className="p-5 flex flex-col items-center justify-center flex-grow">
                <img
                  src={`/assets/money${index}.jpg`}
                  alt={"Image from quote " + index}
                />
              </div>
            </Card>
            <Card width={320} height={230}>
              <div className="flex flex-col flex-grow relative">
                <p className="italic font-semibold text-9xl text-left pl-5">
                  “
                </p>
                <p className="italic font-semibold text-2xl absolute top-16 text-center p-3">
                  {quote.quote}
                </p>
              </div>
            </Card>
          </div>
        );
      })}
    </Carousel>
  );
}
