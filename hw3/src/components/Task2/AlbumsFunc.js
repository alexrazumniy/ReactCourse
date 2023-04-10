import React, { useContext } from "react";
import { DataContextFunc } from "./ContextFunc";
import { AlbumsMap } from "../Task2/AlbumsFxMap";

const AlbumsFunc = () => {
  const { newAlbumsAmount } = useContext(DataContextFunc);

  return (
    <div>
      <h3>Task 2 Use Hooks</h3>
      <AlbumsMap newAlbumsAmount={newAlbumsAmount} />
    </div>
  );
};

export default AlbumsFunc;
