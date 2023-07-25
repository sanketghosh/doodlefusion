import { LuSettings } from "../icons";

type RoomHeaderProps = {
  username: string;
  openPanel: boolean;
  handlePanelToggle: () => void;
};

export default function RoomHeader({
  username,
  openPanel,
  handlePanelToggle,
}: RoomHeaderProps) {
  return (
    <header className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <span className="h-3 w-3 bg-green-400 rounded-full"></span>
        <span className="text-lg font-semibold">{username}</span>
      </div>
      <button className="text-xl md:text-2xl" onClick={handlePanelToggle}>
        <LuSettings />
      </button>
    </header>
  );
}
