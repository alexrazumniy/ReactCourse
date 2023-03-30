import React from "react";

export const DataContext = React.createContext();

export const DataProvider = (props) => {
  const user = {
    name: "Alex",
    age: 24,
  };
  return (
    <DataContext.Provider value={{ user }}>
      {props.children}
    </DataContext.Provider>
  );
};

const UserCard = () => {
  return (
    <div>
      <DataContext.Consumer>
        {({user}) => {
        console.log(user.name, user.age);
          return (
            <div>
              {user.name} - {user.age}
            </div>
          )
        }}
      </DataContext.Consumer>
    </div>
  );
};

const UserCardWrapper = () => {
  return (
    <div>
      <UserCard />
    </div>
  );
};

export const Example = () => {
  return (
    <div>
      <UserCardWrapper />
    </div>
  );
};
