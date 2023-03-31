import React from "react";
import { DataContext } from "./Context";

export class Albums extends React.Component {
  render() {
    return (
      <div>
        <h3>Task 1.2</h3>
        <DataContext.Consumer>          
          {({albums}) =>
            albums.map(({ userId, id, title }) => (
              <div key={id}>
                {userId} - {id} - {title}
              </div>
            ))
          }
        </DataContext.Consumer>
      </div>
    );
  }
}

