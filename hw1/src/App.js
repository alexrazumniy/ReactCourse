import React from "react";
import "./App.css";

const Home = () => {
  return <div className="current_page page-blue">Home page</div>
}

const News = () => {
  return <div className="current_page page-green">News page</div>
}

const CallBack = () => {
  return <div className="current_page page-red">CallBack page</div>
}

const Contacts = () => {
  return <div className="current_page page-blueviolet">Contacts page</div>
}

const pages = {
  home: <Home />,
  news: <News />,
  callback: <CallBack />,
  contacts: <Contacts />,
}

const links = [
  { id: 1, name: "Home", href: "#" },
  { id: 2, name: "News", href: "#" },
  { id: 3, name: "CallBack", href: "#" },
  { id: 4, name: "Contacts", href: "#" },
];

class NavBar extends React.Component {
  state = {
    currentPage: "home"
  }

  onClick = (name) => {
    this.setState({currentPage: name})
  };

  render() {
    return (
      <div>
        <nav className="nav">

          {links.map(({ href, name, id }) => (
            <a
              className="header-link"
              href={href}
              onClick={() => this.onClick(name.toLowerCase())}
              key={id}
            >
              {name}
            </a>
          ))}
        </nav>
        
        <div className="current_page">          
        {pages[this.state.currentPage]}        
        </div>
      </div>
    );
  }
}

export default NavBar;

//===== 1 variant =====

// const Home = () => {
//   return <div className="current_page page-blue">Home page</div>
// }

// const News = () => {
//   return <div className="current_page page-green">News page</div>
// }

// const CallBack = () => {
//   return <div className="current_page page-red">CallBack page</div>
// }

// const Contacts = () => {
//   return <div className="current_page page-blueviolet">Contacts page</div>
// }

// class NavBar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { currentPage: <Home /> }
//   }

//   showPage = (event) => {
//       const visitedLink = event.target.innerText
//     switch (visitedLink) {
//       case 'News':
//         this.setState({ currentPage: <News /> });
//         break;
//       case 'CallBack':
//         this.setState({ currentPage: <CallBack /> });
//         break;
//       case 'Contacts':
//         this.setState({ currentPage: <Contacts /> });
//         break;
//       default:
//         this.setState({ currentPage: <Home /> });
//         return;
//   }
// }

//   render() {
//     return (
//       <div>
//         <nav className="nav">
//           <a className="header-link" href='#' onClick={this.showPage}>Home</a>
//           <a className="header-link" href='#' onClick={this.showPage}>News</a>
//           <a className="header-link" href='#' onClick={this.showPage}>CallBack</a>
//           <a className="header-link" href='#' onClick={this.showPage}>Contacts</a>
//         </nav>
//         <div>{this.state.currentPage}</div>
//       </div>

//     );
//   }
// }

// export default NavBar;