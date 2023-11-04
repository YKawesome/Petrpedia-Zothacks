import { useState, Component} from "react";
import "./App.css";



class PetrSticker extends Component {
    constructor(props){

        super(props);
        let id = props.id;
        // fetch line

        this.state={

            name: 'exampleName',
            dropper: "@petr_the_spreadsheetr",
            dropID: 1,
            templateID: 1, 
            location: 'example location',
            willingToTrade: true

        }

    }

    render() {
        return <>
        <div class='sticker_name'>{this.state.name}</div>  
        <div class='dropper'>{this.state.dropper}</div>
        <div class='drop_id'>{this.state.dropID}</div>
        <div class='willing_to_trade'>{this.state.willingToTrade}</div>

        </>;


    }


}