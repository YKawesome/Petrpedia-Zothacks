import { useState, Component} from "react";


class PetrSticker extends Component {
    constructor(props){

        super(props);
        let id = props.id;
        

        this.state={

            name: 'exampleName',
            dropper: "@petr_the_spreadsheetr",
            dropID: 1,
            templateID: 1, 
            location: 'example location',
            willingToTrade: true

        }


    }

    componentDidMount() {
        let {userId} = this.props.params;
        console.log(userId);
        fetch("//localhost:5000/stickers-get/"+userId).then(value => {
          value.json().then(data=> {
            this.setState({name: data.name, contactInfo: data.email, petrList: data.stickers, userId})
          });
        });
      }

    render() {
        return <>
        <div class='sticker_name'>{this.state.name}</div>  
        <div class='dropper'>{this.state.dropper}</div>
        <div class='drop_id'>{this.state.dropID}</div>
        <div class='willing_to_trade'>{this.state.willingToTrade}</div>

        </>;


    }


}export default PetrSticker;