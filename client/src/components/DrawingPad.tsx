type DrawingPadPropsType = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  onMouseDown: () => void;
};

export default function DrawingPad({
  canvasRef,
  onMouseDown,
}: DrawingPadPropsType) {
  return (
    <div className="border-2 border-zinc-300 h-[32rem] md:h-[36rem] rounded-lg overflow-hidden">
      <canvas
        onMouseDown={onMouseDown}
        ref={canvasRef}
        className="bg-zinc-50"
        width={1270}
        height={573}
      />
    </div>
  );
}
