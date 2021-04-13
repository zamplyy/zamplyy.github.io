import { motion } from "framer-motion";

type Props = {
  icon?: any;
  text: string;
  onClick: any;
  disabled?: boolean;
};

export function RoundButton(props: Props) {
  const { icon, text, onClick, disabled } = props;
  return (
    <motion.button
      className="py-4 bg-accent-2 rounded-full px-10 my-1"
      onClick={onClick || null}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      disabled={disabled}
    >
      <div
        className={` flex flex-row justify-center ${
          disabled ? "opacity-70" : null
        }`}
      >
        {icon ? <div className="pr-3">{icon}</div> : null}
        <p className="text-white text-xl">{text}</p>
      </div>
    </motion.button>
  );
}
