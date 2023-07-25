import { LuRedo, LuUndo, HiOutlineTrash } from "../icons";

export default function EditorToolbar() {
  const btnData = [
    {
      icon: <LuUndo />,
      func: () => {},
    },
    {
      icon: <LuRedo />,
      func: () => {},
    },
    {
      icon: <HiOutlineTrash />,
      func: () => {},
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center gap-5 py-4">
        {btnData.map((data, idx) => (
          <button key={idx} onClick={data.func} className="text-xl md:text-2xl">
            {data.icon}
          </button>
        ))}
      </div>
    </div>
  );
}
