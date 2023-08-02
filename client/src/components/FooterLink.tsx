import { HiOutlineCode } from "../icons";

type FooterLinkProp = {
  className: string;
};

export default function FooterLink({ className }: FooterLinkProp) {
  return (
    <span
      className={`${className} text-center text-[13px] flex items-center gap-1`}
    >
      <p>Developed By </p>
      <HiOutlineCode className="text-base" />
      <a
        href="https://github.com/sanketghosh"
        target="_blank"
        className="font-medium transition-all hover:underline hover:underline-offset-2"
      >
        Sanket
      </a>
    </span>
  );
}
