import React from "react";

export class AlbumsMap extends React.Component {
  render() {
    const {newAlbumsAmount} = this.props;
    
    return (
      <div>
          {newAlbumsAmount.map(( album, index ) => (
              <div key={album.id}>
                {album.id} - {index} - {album.title}
              </div>
            ))
          }
      </div>
    );
  }
}

