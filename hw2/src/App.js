import React from "react";
import "./App.css";

//===========================================================//
//==== Задача #1 - Работа с функциональными компонентами ====//
//===========================================================//

//===== Task 1.1 =====//

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

//===== Task 1.2 =====//

// ===> a) <===//

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

// ===> b) <===//

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

// ===> c) <===//

// export default class User extends React.Component {
//   state = {
//     name: "Alex",
//     surname: "Ivanov",
//     age: 45,
//   };

//   render() {
//     return (
//       <div>
//         <UserCard {...this.state} />
//       </div>
//     );
//   }
// }

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

//==== Task 1.3 =====//

// ===> a) <===//

// export default class User extends React.Component {
//   state = {
//     name: "Alex",
//     surname: "Ivanov",
//     age: 15,
//   };

//   render() {
//     return (
//       <div>
//         <UserCardText {...this.state} />
//       </div>
//     );
//   }
// }

// ===> b) <===//

// const UserCardText = (props) => {
//   return <div>My info: {Object.values(props).join(" - ")}</div>;
// };

// ===> c) <===//

// const UserCardText = (props) => {
//   let isAgeIn;

//   if (props.age < 18) {
//     isAgeIn = "не"
//   } else isAgeIn = ""

//   return <div>Привет, {props.name}, тебе {props.age} лет,
//   я <span>{isAgeIn}</span> могу налить тебе выпить чего-нибудь</div>
// };

//======================================//
//==== Задача #2 - Работа с формами ====//
//======================================//

// export default class Form extends React.Component {
//   state = {
//     name: "",
//     surname: "",
//     error: "",
//   };

//   onSubmit = (event) => {
//     event.preventDefault();

//     if (this.state.name.length < 3 || this.state.surname.length < 3) {
//       this.setState({ error: "С твоими данными что то не так ;(" });
//       this.setState({
//         name: "",
//         surname: "",
//       });
//     } else
//       alert(
//         `Добро пожаловать - ${this.state.name
//           .slice(0, 1)
//           .toUpperCase()}${this.state.name
//           .slice(1)
//           .toLowerCase()} ${this.state.surname
//           .slice(0, 1)
//           .toUpperCase()}${this.state.surname.slice(1).toLowerCase()}`
//       );
//     // Делает первые буквы заглавными, остальные строчными
//     this.setState({
//       name: "",
//       surname: "",
//     });
//   };

//   changeValue = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//       error: "",
//     });
//   };

//   render() {
//     return (
//       <div>
//         <form className="form" onSubmit={this.onSubmit}>
//           <input
//             className="input"
//             placeholder="name"
//             name="name"
//             value={this.state.name}
//             onChange={this.changeValue}
//           />
//           <input
//             className="input"
//             placeholder="surname"
//             name="surname"
//             value={this.state.surname}
//             onChange={this.changeValue}
//           />
//           <button className="button" type="submit">
//             Submit
//           </button>
//         </form>
//         <p className="error_text">{this.state.error}</p>
//       </div>
//     );
//   }
// }

//=================================================//
//==== Задание #3 - работа с Lifecycle methods ====//
//=================================================//

export default class Lifecycle extends React.Component {
  state = {
    pageTitle: "Hello",
  };

  componentDidMount() {
    this.setState({ pageTitle: "Start Page" });
  }

  componentDidUpdate(updatedTitle, ...rest) {
    updatedTitle = this.state.pageTitle;
  }

  render() {
    return (
      <div>
        <p className="title-for-task-3">{this.state.pageTitle}</p>
        <button className="button button-for-task-3"
          onClick={() => this.setState({ pageTitle: "Random Page" })}
        >
          Button for update
        </button>
      </div>
    );
  }
}

