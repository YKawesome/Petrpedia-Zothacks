import { useState, Component} from "react";
import "./App.css";
import PetrSticker from "../sticker";

/*
This is the starting point of our application. Here, we can begin coding 
and transforming this page into whatever best suits our needs. 
For example, we can start by creating a login page, home page, or an about section; 
there are many ways to get your application up and running. 
With App.jsx, we can also define global variables and routes to store information as well as page navigation.
*/
class User extends Component {
    constructor(props) {
        super(props);
        // Fetch
        this.state = {
            name: 'exampleName', 
            contactInfo: 'exampleInfo',
            petrList: [0,1,2]
        }
    }
    render() {
      let petrList = [];
      for(let i = 0;i<this.state.petrList;i++) {
        petrList.push(<PetrSticker id={this.state.petrList[i]}></PetrSticker>)
      }
      return <>
        <div class='username_title'>{this.state.name}</div>
        <div class='user_page_contact'>{this.state.contactInfo}</div>
        <div class='sticker_list'>{petrList}</div>
      </>
    }
  }
export default User;
