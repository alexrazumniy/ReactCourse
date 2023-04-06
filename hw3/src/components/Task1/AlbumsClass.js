import React from "react";
import { DataContext } from "./Context";
import { AlbumsMap } from "./AlbumsMap";


export default class AlbumsClass extends React.Component {
  render() {
    return (
      <div>
        <h3>Task 1 Use Context</h3>
        <DataContext.Consumer>
          {(context) => {
            const { newAlbumsAmount } = context;
            return (
              <>
                <AlbumsMap newAlbumsAmount={newAlbumsAmount} />
              </>
            );
          }}
        </DataContext.Consumer>
      </div>
    );
  }
}
