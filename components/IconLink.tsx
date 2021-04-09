import Link from "next/link";

type Props = {
  link: string;
  icon: any;
  title: string;
  text: string;
};

export function IconLink(props: Props) {
  const { link, icon, text, title } = props;
  return (
    <Link href={link}>
      <a href={link}>
        <div className="hover:underline text-accent-2 flex flex-col items-center ">
          <div className="py-4">{icon ? icon : null}</div>
          <h3 className="font-bold uppercase py-1 tracking-wide text-lg text-accent-2">
            {title}
          </h3>
          <p className="font-semibold py-1 text-base text-accent-2">{text}</p>
        </div>
      </a>
    </Link>
  );
}
