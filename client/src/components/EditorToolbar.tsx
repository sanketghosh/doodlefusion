import { LuRedo, LuUndo, HiOutlineTrash } from "../icons";

type EditorToolbarPropsType = {
  clearCanvas: () => void;
  undoCanvas: () => void;
  redoCanvas: () => void;
};

export default function EditorToolbar({
  clearCanvas,
  undoCanvas,
  redoCanvas,
}: EditorToolbarPropsType) {
  const btnData = [
    {
      icon: <LuUndo />,
      func: undoCanvas,
    },
    {
      icon: <LuRedo />,
      func: redoCanvas,
    },
    {
      icon: <HiOutlineTrash />,
      func: clearCanvas,
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center gap-5 py-3">
        {btnData.map((data, idx) => (
          <button
            key={idx}
            onClick={data.func}
            className="text-xl md:text-2xl"
            type="button"
          >
            {data.icon}
          </button>
        ))}
      </div>
    </div>
  );
}
