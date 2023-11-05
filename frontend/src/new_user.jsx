import { useState, Component} from "react";
import { useParams } from "react-router-dom";

async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }


class NewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "", email: ""};
        this.submit = this.submit.bind(this);
    }
    submit() {
        postData("//localhost:5000/users-post", {name: this.state.name, email: this.state.email});
    }
    render() {

        return(
            <>
                <header>
                <div class = "hTitle">Petrpedia</div>
                <input class = "headerEle" type="text" placeholder="Search.."></input>
                <a class = "headerEle" href="#profile">
                    <img class = "circle" src = "https://cdn-icons-png.flaticon.com/512/25/25694.png" height = "40"></img>
                </a>
                <a class = "headerEle" href="/new_template">
                    <img class = "circle" src = "https://static.thenounproject.com/png/2729266-200.png" height = "40"></img>
                </a>
                <a className = "headerEle" href="/trade">
                    <img className = "circle" src = "https://cdn.iconscout.com/icon/free/png-256/free-switch-1470433-1244947.png" height = "50"></img>
                </a>
                <a className = "headerEle" href="#profile">
                    <img className = "circle" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" height = "40"></img>
                </a>
                </header>
                <h1 className="templatecreate">Create a User</h1>
                <div className="templateoptions">
                    
                    <h2 className="ntname"> Name: </h2>
                    <input type = "nttext" value={this.state.name} onChange={event => this.setState({name:event.target.value})} ></input>
                    <h2 className="ntcreator">Email: </h2>
                    <input type = "text" value={this.state.email} onChange={event=> this.setState({email:event.target.value})}></input>
                </div>
                <button className='moveup' onClick={this.submit}>Submit</button>
            </>

        )
    }

}
export default NewUser;