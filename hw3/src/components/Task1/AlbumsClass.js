import React from "react";
import { DataContext } from "./Context";
import { AlbumsMap } from "./AlbumsMap";
import { InputForm } from "../InputForm";


export default class AlbumsClass extends React.Component {
  render() {
    return (
      <div>
        <h3>Task 1 Use Context</h3>
        <DataContext.Consumer>
          {(context) => {
            const { newAlbumsAmount, handleChange } = context;
            return (
              <>
                <AlbumsMap newAlbumsAmount={newAlbumsAmount} />
                <InputForm onChange={handleChange} />
              </>
            );
          }}
        </DataContext.Consumer>
      </div>
    );
  }
}
