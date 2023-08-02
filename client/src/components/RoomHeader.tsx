import { LuSettings } from "../icons";

type RoomHeaderProps = {
  username: string;
  openPanel: boolean;
  handlePanelToggle: () => void;
};

// const color = "red";

export default function RoomHeader({
  username,
  openPanel,
  handlePanelToggle,
}: RoomHeaderProps) {
  return (
    <header className="pt-4 pb-2 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <span className={`h-3 w-3 rounded-full bg-green-400`}></span>
        <span className="text-lg font-semibold">{username}</span>
      </div>
      <button className="text-xl md:text-2xl" onClick={handlePanelToggle}>
        <LuSettings />
      </button>
    </header>
  );
}
