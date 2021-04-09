import { motion } from "framer-motion";

type Props = {
  icon?: any;
  text: string;
  onClick: any;
};

export function RoundButton(props: Props) {
  const { icon, text, onClick } = props;
  return (
    <motion.button
      className="py-4 bg-accent-2 rounded-full px-10 my-1"
      onClick={onClick || null}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex flex-row justify-center">
        {icon ? <div className="pr-3">{icon}</div> : null}
        <p className="text-white text-xl">{text}</p>
      </div>
    </motion.button>
  );
}
