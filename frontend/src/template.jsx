import { useState, Component} from "react";
import "./App.css";

class Template extends Component {

    contructor (props){
        super(props);
        //Fetch
        this.state = {
            name: 'exampleName',
            templateID: 1,
            dropper: 'exampleDropper',
            numberOfStickers: 1,
            dropID: 1,


        }
    }

    render(){
        return <div>
            
        </div>;
    }

}

