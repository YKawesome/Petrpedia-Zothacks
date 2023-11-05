import { useState, Component} from "react";
import PetrSticker from "../sticker";
import Template from "../template"
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
      this.state = {name: "", contactInfo: "", petrList: [], userId: 0};
    }
    componentDidMount() {
      let {userId} = this.props.params;
      console.log(userId);
      fetch("//localhost:5000/users-get/"+userId).then(value => {
        value.json().then(data=> {
          this.setState({name: data.name, contactInfo: data.email, petrList: data.stickers, userId})
          console.log(data);
        });
      });
    }
    render() {
      let petrList = [];
      for(let i = 0;i<this.state.petrList.length;i++) {
        petrList.push(<div key={i}>
            <img src={"//localhost:5000/templates-get-image/?image_path=" +encodeURIComponent(this.state.petrList[i].image_url)}></img>
            <div>{this.state.petrList[i].willing_to_trade?"Will trade":"Will not trade"}</div>
            <div className="sticker_location">Location: {this.state.petrList[i].current_location}</div>
            <a href={"/design/"+this.state.petrList[i].template_id}>See more here</a>
        </div>)
      }
      return <>
        <div className="user_info">
        <img class="profile_picture" 
      src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
       alt="Profile Picture"/>
          <h1 className='username_title'>{this.state.name}</h1>
          <h2 className='user_id'>User ID: {this.state.userId}</h2>
          <div className='user_page_contact'>{this.state.contactInfo}</div>
        </div>
        <h2>Stickers Owned</h2>
        <div className='sticker_list'>{petrList}</div>
      </>
    }
  }
export default (props) => (<User {...props} params={useParams()}></User>);
