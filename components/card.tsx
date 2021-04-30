import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  width: string | number;
  height: string | number;
};

const Card = ({ children, height, width }: Props) => {
  return (
    <div className="relative flex mx-4">
      <div
        style={{ height: height, width: width }}
        className="absolute -left-4 top-4 bg-accent-2 z-0"
      ></div>
      <div
        className="bg-accent-3 z-10 flex "
        style={{ height: height, width: width }}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
