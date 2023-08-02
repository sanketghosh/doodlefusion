/* import { useEffect, useRef, useState } from "react";

export const useDraw = (
  onDraw: ({ ctx, currentPoint, prevPoint }: Draw) => void
) => {
  const [mouseDown, setMouseDown] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prevPoint = useRef<null | Point>(null);

  const onMouseDown = () => setMouseDown(true);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const undoCanvas = () => {};
  const redoCanvas = () => {};

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!mouseDown) return;

      const currentPoint = computePointInCanvas(e);

      const ctx = canvasRef.current?.getContext("2d");
      if (!ctx || !currentPoint) return;

      onDraw({
        ctx,
        currentPoint,
        prevPoint: prevPoint.current,
      });
      prevPoint.current = currentPoint;
    };

    const computePointInCanvas = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      return { x, y };
    };

    const mouseUpHandler = () => {
      setMouseDown(false);
      prevPoint.current = null;
    };

    //ADD event listeners
    canvasRef.current?.addEventListener("mousemove", handler);
    window.addEventListener("mouseup", mouseUpHandler);

    // REMOVE event listeners
    return () => {
      canvasRef.current?.removeEventListener("mousemove", handler);
      window.removeEventListener("mouseup", mouseUpHandler);
    };
  }, [onDraw]);

  return { canvasRef, onMouseDown, clearCanvas, undoCanvas, redoCanvas };
};
 */

import { useEffect, useRef, useState } from "react";

type Point = {
  x: number;
  y: number;
};

type Draw = {
  ctx: CanvasRenderingContext2D;
  currentPoint: Point;
  prevPoint: Point | null;
};

export const useDraw = (
  onDraw: ({ ctx, currentPoint, prevPoint }: Draw) => void
) => {
  const [mouseDown, setMouseDown] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prevPoint = useRef<Point | null>(null);
  const drawingCommands = useRef<Draw[]>([]);
  const commandIndex = useRef<number>(-1);

  const onMouseDown = () => setMouseDown(true);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawingCommands.current = [];
    commandIndex.current = -1;
  };

  const undoCanvas = () => {
    if (commandIndex.current > 0) {
      commandIndex.current--;
      redrawCanvas();
    }
  };

  const redoCanvas = () => {
    if (commandIndex.current < drawingCommands.current.length - 1) {
      commandIndex.current++;
      redrawCanvas();
    }
  };

  const redrawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i <= commandIndex.current; i++) {
      const command = drawingCommands.current[i];
      onDraw(command);
    }
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!mouseDown) return;

      const currentPoint = computePointInCanvas(e);

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx || !currentPoint) return;

      const drawData = {
        ctx,
        currentPoint,
        prevPoint: prevPoint.current,
      };

      onDraw(drawData);
      prevPoint.current = currentPoint;

      // Save the drawing command and update the command index
      commandIndex.current++;
      drawingCommands.current.splice(commandIndex.current);
      drawingCommands.current.push(drawData);
    };

    const computePointInCanvas = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      return { x, y };
    };

    const mouseUpHandler = () => {
      setMouseDown(false);
      prevPoint.current = null;
    };

    // ADD event listeners
    canvasRef.current?.addEventListener("mousemove", handler);
    window.addEventListener("mouseup", mouseUpHandler);

    // REMOVE event listeners
    return () => {
      canvasRef.current?.removeEventListener("mousemove", handler);
      window.removeEventListener("mouseup", mouseUpHandler);
    };
  }, [onDraw, mouseDown]);

  return { canvasRef, onMouseDown, clearCanvas, undoCanvas, redoCanvas };
};
