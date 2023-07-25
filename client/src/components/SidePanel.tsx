import { AppLogo } from ".";
import { LuChevronRightSquare, LuLogOut, LuMoon } from "../icons";

type SidePanelProps = {
  roomName: string;
  username: string;
  openPanel: boolean;
  handlePanelToggle: () => void;
};

export default function SidePanel({
  openPanel,
  handlePanelToggle,
  username,
  roomName,
}: SidePanelProps) {
  return (
    <div className="bg-zinc-50 border-l-2 min-h-screen w-[22rem] absolute right-0 top-0 px-4 py-5 flex flex-col">
      <div className="w-full pt-3 flex items-center justify-between">
        <AppLogo className="text-lg" />
        <button onClick={handlePanelToggle} className="text-xl md:text-2xl">
          <LuChevronRightSquare />
        </button>
      </div>
      <span className="text-sm text-zinc-400 flex items-center gap-1 pt-3">
        <span>room</span>
        <p className="text-gray-700 underline underline-offset-2 font-medium">
          {roomName}
        </p>
      </span>
    </div>
  );
}

/* 
 <div className="w-full text-lg flex items-end">
        <button>
          <LuMoon />
        </button>
        <button>
          <LuLogOut />
        </button>
      </div> 

*/
