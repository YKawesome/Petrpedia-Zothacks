import { useState, Component} from "react";
import PetrSticker from "../sticker";
import { useParams } from "react-router-dom";

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
      this.state = {name: "nobody", contactInfo: "", petrList: [], userId: 0};
    }
    componentDidMount() {
      let {userId} = this.props.params;
      console.log(userId);
      fetch("//localhost:5000/users-get/"+userId).then(value => {
        value.json().then(data=> {
          this.setState({name: data.name, contactInfo: data.email, petrList: data.stickers, userId})
        });
      });
    }
    render() {
      let petrList = [];
      for(let i = 0;i<this.state.petrList;i++) {
        petrList.push(<PetrSticker id={this.state.petrList[i]}></PetrSticker>)
      }
      return <>
        <div className='username_title'>{this.state.name}</div>
        <div className='user_page_contact'>{this.state.contactInfo}</div>
        <div className='sticker_list'>{petrList}</div>
        <div>{this.state.userId}</div>
      </>
    }
  }
export default (props) => (<User {...props} params={useParams()}></User>);
