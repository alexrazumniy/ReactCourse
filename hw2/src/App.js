import React from "react";
import "./App.css";


//===== TASK 1 =====

// export default class User extends React.Component {
//   state = {
//     name: "Alex",
//     surname: "Ivanov",
//     age: 45,
//   };

//   render() {
//     return (
//       <div>
//         <UserCard name={this.state.name} surname={this.state.surname} age={this.state.age}/>
//       </div>
//     );
//   }
// }


//===== TASK 2 =====
// a)

// const UserCard = (props) => {
//   return (
//     <div>
//       <div>User information:</div>
//       <div>Name: {props.name}</div>
//       <div>Surname: {props.surname}</div>
//       <div>Age: {props.age}</div>
//     </div>
//   );
// };


// b) 
// const UserCard = ({name, surname, age}) => {
//   return (
//     <div>
//       <div>User information:</div>
//       <div>Name: {name}</div>
//       <div>Surname: {surname}</div>
//       <div>Age: {age}</div>
//     </div>
//   );
// };


// c)
export default class User extends React.Component {
  state = {
    name: "Alex",
    surname: "Ivanov",
    age: 45,
  };

  render() {
    return (
      <div>
        <UserCard {...this.state} />
      </div>
    );
  }
}

const UserCard = ({name, surname, age}) => {
  return (
    <div>
      <div>User information:</div>
      <div>Name: {name}</div>
      <div>Surname: {surname}</div>
      <div>Age: {age}</div>
    </div>
  );
};


//===== TASK 3 =====





// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {counter: 0};
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(e) {

//   }

//   render() {
//     return <div>null</div>
//   }
// }

// export default Counter;

// export default class Form extends Component {
//   state = {
//     firstName: "",
//     surName: "",
//   };

//   onSubmit = (event) => {
//     event.preventDefault();

//     console.log(this.state.firstName, this.state.surName);
//   };

// changeFirstNameValue = (event) => {
//   this.setState({ firstName: event.target.value });
// };

// changeSurNameValue = (event) => {
//   this.setState({ surName: event.target.value });
// };

//   changeValue = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.onSubmit}>
//           <input
//             placeholder="name"
//             name="firstName"
//             value={this.state.firstName}
//             onChange={this.changeValue}
//           />
//           <input
//             placeholder="surname"
//             name="surName"
//             value={this.state.surName}
//             onChange={this.changeValue}
//           />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
