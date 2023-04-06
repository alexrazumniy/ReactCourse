import React, { useContext } from "react";
import { DataContextFunc } from "./ContextFunc";
import { AlbumsMap } from "../Task2/AlbumsMap";

const AlbumsFunc = () => {
  const { newAlbumsAmount } = useContext(DataContextFunc);

  return (
    <div>
      <h3>Task 2 Use Hooks</h3>
      <DataContextFunc.Consumer>
        {(context) => {
          return (
            <>
              <AlbumsMap newAlbumsAmount={newAlbumsAmount} />              
            </>
          );
        }}
      </DataContextFunc.Consumer>
    </div>
  );
};

export default AlbumsFunc;
