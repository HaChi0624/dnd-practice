"use client";
import React from "react";
import { DndProvider } from "react-dnd";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DroppableArea } from "./DroppableArea";

const Example1 = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DroppableArea />
    </DndProvider>
  );
};

export default Example1;
