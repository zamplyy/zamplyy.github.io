import { ReactNode, FunctionComponent } from "react";

type Props = {
  children?: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-10 max-w-screen-xl">{children}</div>
  );
};

export default Container;
