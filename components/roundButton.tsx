import { motion } from "framer-motion";

type Props = {
  icon?: any;
  text: string;
  onClick: any;
  disabled?: boolean;
  color?: string;
};

export function RoundButton(props: Props) {
  const { icon, text, onClick, disabled, color } = props;
  return (
    <motion.button
      className={`py-4 rounded-full px-10 my-1 ${
        color || "bg-accent-2 dark:bg-accent-3"
      } `}
      onClick={onClick || null}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      disabled={disabled}
    >
      <div
        className={` flex flex-row items-center ${
          icon ? "" : "justify-center"
        } ${disabled ? "opacity-70" : ""}`}
      >
        {icon ? <div className="pr-3">{icon}</div> : null}
        <p className="text-white text-xl dark:text-text-color">{text}</p>
      </div>
    </motion.button>
  );
}
