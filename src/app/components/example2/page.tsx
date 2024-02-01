"use client";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Column } from "./DropColumn";

const Example2 = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-3 justify-center items-center place-items-center">
        <div>todo</div>
        <div>wip</div>
        <div>done</div>
        <div>
          <Column colNumber={1} backgroundColor="bg-yellow-300" />
        </div>
        <div>
          <Column colNumber={2} backgroundColor="bg-red-300" />
        </div>
        <div>
          <Column colNumber={3} backgroundColor="bg-blue-300" />
        </div>
      </div>
    </DndProvider>
  );
};

export default Example2;
