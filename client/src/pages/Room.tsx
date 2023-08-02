import { useLocation } from "react-router-dom";
import {
  DrawingPad,
  RoomHeader,
  SidePanel,
  EditorToolbar,
  FooterLink,
} from "../components";
import { useState } from "react";
import { useDraw } from "../hooks";

export default function Room() {
  const [openPanel, setOpenPanel] = useState(false);
  const [color, setColor] = useState<string>("#333");
  const location = useLocation();
  const { username, roomName } = location.state;

  const { canvasRef, onMouseDown, clearCanvas, undoCanvas, redoCanvas } =
    useDraw(drawLine);

  function drawLine({ prevPoint, currentPoint, ctx }: Draw) {
    const { x: currentX, y: currentY } = currentPoint;
    const lineColor: string = color;
    const lineWidth: number = 5;

    let startPoint = prevPoint ?? currentPoint;
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    ctx.fillStyle = lineColor;
    ctx.beginPath();
    ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  const handlePanelToggle = () => {
    setOpenPanel(!openPanel);
  };

  return (
    <div className="mx-auto max-w-7xl px-3 relative">
      <RoomHeader
        username={username}
        openPanel={openPanel}
        handlePanelToggle={handlePanelToggle}
      />
      <EditorToolbar
        clearCanvas={clearCanvas}
        undoCanvas={undoCanvas}
        redoCanvas={redoCanvas}
      />
      <DrawingPad canvasRef={canvasRef} onMouseDown={onMouseDown} />
      <div className="flex items-center justify-center">
        <FooterLink className="py-3.5" />
      </div>
      {openPanel ? (
        <SidePanel
          setColor={setColor}
          color={color}
          openPanel={openPanel}
          handlePanelToggle={handlePanelToggle}
          username={username}
          roomName={roomName}
        />
      ) : null}
    </div>
  );
}
