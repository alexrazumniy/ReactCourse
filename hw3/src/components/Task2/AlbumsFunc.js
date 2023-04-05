import React from "react";
import { DataContextFunc } from "./ContextFunc";
import { AlbumsMap } from "../Task2/AlbumsMap";
import { InputForm } from "../InputForm";

function AlbumsFunc () {
  const context = React.useContext(DataContextFunc);

  const { newAlbumsAmount, albums, n, handleChange } = context;

  return (
    <div>
      <h3>Task 2</h3>
      <DataContextFunc.Consumer>
        {(value) => (
          <>
            <AlbumsMap newAlbumsAmount={newAlbumsAmount} />
            <InputForm onChange={handleChange} albums={albums} n={n} />
          </>
        )}
      </DataContextFunc.Consumer>
    </div>
  );
}

export default AlbumsFunc;