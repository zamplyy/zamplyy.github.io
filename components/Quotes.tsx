import React, { CSSProperties } from "react";
import { Carousel } from "react-responsive-carousel";
import { Quote } from "../pages";
import useWindowSize from "../utils/useWindowSize";
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
  margin: "32px 8px",
};
type Props = {
  quotes: Quote[];
};
export function Quotes(props: Props) {
  const { quotes } = props;

  const { width } = useWindowSize();

  const breakpoint = width && width < 540;

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
              style={
                breakpoint
                  ? {
                      ...indicatorStyles,
                      backgroundColor: "#E0EBEB",
                      margin: "16px 8px",
                    }
                  : { ...indicatorStyles, backgroundColor: "#E0EBEB" }
              }
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            style={
              breakpoint
                ? { ...indicatorStyles, margin: "16px 8px" }
                : indicatorStyles
            }
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
            className="flex flex-col md:flex-row items-center space-y-12 pt-12 pb-20 md:justify-center md:space-x-10 bg-accent-1 md:pt-24 md:pb-36"
          >
            <div className="relative">
              <div className="hidden md:block md:mr-52">
                <Card
                  width={breakpoint ? 200 : 350}
                  height={breakpoint ? 200 : 350}
                >
                  <div className=" ">
                    <img
                      className="object-contain"
                      style={{
                        height: breakpoint ? 200 : 350,
                        width: breakpoint ? 200 : 350,
                      }}
                      src={`/assets/${quote.image}`}
                      alt={"Image from quote " + index}
                    />
                  </div>
                </Card>
              </div>
              <div className="relative md:absolute z-20 md:left-64 md:top-12">
                <Card
                  width={breakpoint ? 210 : 420}
                  height={breakpoint ? 240 : 230}
                >
                  <div className="flex flex-col flex-grow relative">
                    <p className="italic font-semibold text-9xl text-left pl-5">
                      “
                    </p>
                    <p
                      className={`italic font-semibold text-2xl absolute text-center p-3  ${
                        breakpoint ? "top-10" : "top-16"
                      }`}
                    >
                      {quote.quote}
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
