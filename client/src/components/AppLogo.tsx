import { FaPaintBrush } from "../icons";

type AppLogoProps = {
  className: string;
};

export default function AppLogo({ className }: AppLogoProps) {
  return (
    <div className={`flex items-center ${className} gap-1 select-none`}>
      <FaPaintBrush />
      <span className="font-bold flex items-center">
        <p>doodle</p>
        <p className="text-zinc-500">fusion</p>
      </span>
    </div>
  );
}
