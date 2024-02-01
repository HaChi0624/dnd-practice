"use client";
import { FC } from "react";
import { useDrop } from "react-dnd";
import { useRecoilValue } from "recoil";


import { DraggableItem } from "./DraggableItem";
import { droppedColumnState } from "@/app/recoil/dropColumn";
import { DnDItems } from "@/app/hooks/example2/DndItems";

export type DropResult = {
  colNumber: number;
};

type Props = {
  colNumber: number;
  backgroundColor: string;
};

export const Column: FC<Props> = ({ colNumber, backgroundColor }) => {
  const [, drop] = useDrop({
    // 必須: ドラッグするコンポーネントと同じtypeを指定する
    accept: DnDItems.Todo,
    // ドロップされたときにオブジェクトを返す
    drop: () => ({ colNumber }),
  });

  // ドロップされたカラム番号(useRecoilValue(droppedColumnState))とpropsのcolNumberが一致している場合はドラッグされた
  const isDropped = useRecoilValue(droppedColumnState) === colNumber;

  return (
    <div
      // refにdropを渡してドロップ対象のコンポーネントにする。
      ref={drop}
      className={`flex justify-center items-center h-96 w-48 ${backgroundColor}`}
    >
      {/* ドロップされた場合はドラッグしたコンポーネントを表示 */}
      {isDropped && <DraggableItem name="Drag Item" />}
    </div>
  );
};
