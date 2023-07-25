type FooterLinkProp = {
  className: string;
};

export default function FooterLink({ className }: FooterLinkProp) {
  return (
    <h1 className={`${className} text-center text-sm`}>
      Developed By{" "}
      <a
        href="https://github.com/sanketghosh"
        target="_blank"
        className="font-medium"
      >
        Sanket
      </a>
    </h1>
  );
}
