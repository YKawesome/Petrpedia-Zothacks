import { useState, Component} from "react";
import { useParams } from "react-router-dom";

function convertImageToBase64(file, callback) {
    const reader = new FileReader();

    reader.onload = () => {
        callback(btoa(reader.result));
    };

    reader.readAsBinaryString(file);
}

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


class NewTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "", creator: "", num_stickers: 0, dropId: 0, dropsList: []};
        this.submit = this.submit.bind(this);
    }
    componentDidMount() {
        fetch("//localhost:5000/drops-get").then(val=>val.json().then(data=>{console.log(data),this.setState({dropsList: data})}));
    }
    submit() {
        postData("//localhost:5000/templates-post?drop_id="+this.state.dropId,{name: this.state.name, creator: this.state.creator, number_of_stickers: this.state.num_stickers, image:this.state.image});
    }
    render() {
        let dropsDropDown=[];
        for(let i=0;i<this.state.dropsList.length;i++){
            dropsDropDown.push(<option key={i} value={this.state.dropsList[i].id}>{this.state.dropsList[i].name}</option>);
        }

        return(
            <>
                <h1 className="templatecreate">Create a Template</h1>
                <div className="templateoptions">
                    
                    <h2 className="ntname"> Name: </h2>
                    <input type = "nttext" value={this.state.name} onChange={event => this.setState({name:event.target.value})} ></input>
                    <h2 className="ntcreator">Creator: </h2>
                    <input type = "text" value={this.state.creator} onChange={event=> this.setState({creator:event.target.value})}></input>
                    <h2 className="ntnumstickers">Number of Stickers: </h2>
                    <input type = "number" value={this.state.num_stickers} onChange={event=> this.setState({num_stickers:event.target.value})}></input>
                    <h2 className="ntdrop">Drop: </h2>
                    <select onChange={event=> this.setState({dropId:event.target.value})}>
                        {dropsDropDown} 
                    </select>
                    <h2 className="ntimage">Image: </h2>
                    <input type = "file" onChange={event=> convertImageToBase64(event.target.files[0],str=>this.setState({image:str}))}></input>
                </div>
                <button onClick={this.submit}>Submit</button>
            </>

        )
    }

}
export default NewTemplate;