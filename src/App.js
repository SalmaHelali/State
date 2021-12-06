import React from "react";
import "./App.css";
import MyPic from "./images/MyPic.jpg"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Person: {
        FullName: "Salma" ,
        bio: " Developer girl in GomyCode ",
        profession: "",
        imgsrc: { MyPic },
        isActive: false,
      },
    };
  }
            handleShow = () => {
             this.setState({
              isActive: true,
    });
  };
  handleHide = () => {
    this.setState({
      isActive: false,
    });


  };
  render() {
    const styleObject = { color: "Black", textAlign: "center" };
    if (this.state.isActive) {
      return (
        <div style={styleObject}>
          <div className="btn">
            <button onClick={this.handleHide}>Hide</button>
          </div>
          <div className="sou">
            <img src={MyPic} alt="souu" />
          </div>
          <h1>{this.state.Person.FullName}</h1>
          <h2>{this.state.Person.profession}</h2>
          <p>{this.state.Person.bio}</p>
        </div>
      );
    } else {
      return (
        <div className="btn">
          <button onClick={this.handleShow}>Show</button>
          
        </div>
      );
    }
  }
}
export default App;
