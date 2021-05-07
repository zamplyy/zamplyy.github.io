import React from "react";
import Card from "./card";

type Props = {
  imageUrl: string;
  title: string;
  text: string;
  imageIsLeft?: boolean;
};

const PictureRow = ({ imageUrl, text, title, imageIsLeft }: Props) => {
  return (
    <div
      className={`max-w-screen-lg mx-auto flex flex-col my-40 items-center sm:items-start justify-between ${
        imageIsLeft ? "sm:flex-row-reverse" : "sm:flex-row"
      } `}
    >
      <div className="flex-1 max-w-xl mr-4 mb-4 sm:mb-0">
        <h2 className="font-bold text-3xl">{title}</h2>
        <p className="text-2xl font-light">{text}</p>
      </div>
      <div className="mb-5">
        <Card width={300} height={300}>
          <img
            src={imageUrl}
            alt={"Image"}
            className="w-full h-full object-cover"
          />
        </Card>
      </div>
    </div>
  );
};

export default PictureRow;
