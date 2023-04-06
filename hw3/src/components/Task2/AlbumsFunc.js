import React from "react";
import { DataContextFunc } from "./ContextFunc";
import { AlbumsMap } from "../Task2/AlbumsMap";
import { InputForm } from "../InputForm";

function AlbumsFunc() {
  const context = React.useContext(DataContextFunc);

  const { newAlbumsAmount, albums, n, handleChange } = context;

  return (
    <div>
      <h3>Task 2 Use Hooks</h3>
      <DataContextFunc.Consumer>
        {(value) => {
          return (
          <>
            <AlbumsMap newAlbumsAmount={newAlbumsAmount} />
            <InputForm newAlbumsAmount={newAlbumsAmount} albums={albums} n={n} onChange={handleChange} />
          </>
          )
        }}
      </DataContextFunc.Consumer>
    </div>
  );
}

export default AlbumsFunc;
