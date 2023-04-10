import React from "react";
import { DataContext } from "./Context";
import { AlbumsMap } from "./AlbumsClsMap";


export default class AlbumsClass extends React.Component {
  render() {
    return (
      <div>
        <h3>Task 1 Use Context</h3>
        <DataContext.Consumer>
          {({ newAlbumsAmount }) => {            
            return <AlbumsMap newAlbumsAmount={newAlbumsAmount} />
          }}
        </DataContext.Consumer>
      </div>
    );
  }
}
