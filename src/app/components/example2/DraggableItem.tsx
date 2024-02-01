"use client";

import { FC } from "react";
import { useDrag } from "react-dnd";
import { useRecoilState } from "recoil";

import { DropResult } from "./DropColumn";
import { DnDItems } from "@/app/hooks/example2/DndItems";
import { droppedColumnState } from "@/app/recoil/dropColumn";

type Props = {
  name: string;
};

export const DraggableItem: FC<Props> = ({ name }) => {
  const [, setDroppedColumnNumber] = useRecoilState(droppedColumnState);

  const [collected, drag] = useDrag({
    item: {
      type: DnDItems.Todo,
    },
    end: (_, monitor) => {
      const dropResult = monitor.getDropResult() as DropResult;
      if (dropResult) {
        setDroppedColumnNumber(dropResult.colNumber);
      }
    },
    collect: (monitor) => {
      return { dragging: monitor.isDragging() };
    },
  });

  const { dragging } = collected;

  // ドラッグ中の場合はopacityを変えている
  const opacity = dragging ? "opacity-50" : "opacity-100";

  return (
    // refにdragを渡してドラッグ対象にする
    <div
      ref={drag}
      className={`flex justify-center items-center rounded-2xl h-28 w-40 bg-white ${opacity}`}
    >
      <div>{name}</div>
    </div>
  );
};
