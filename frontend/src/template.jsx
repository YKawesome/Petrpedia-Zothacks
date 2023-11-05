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
        };
    }
    componentDidMount() {
        let {templateId} = this.props.params;
        fetch("//localhost:5000/templates-get/"+templateId).then(value => {
          value.json().then(data=> {
            this.setState({name: data.name, dropper: data.creator, image: data.image, numberOfStickers: data.number_of_stickers, stickers: data.stickers})
          });
        });
      }

    render(){
        return <>
        <div class=""></div>
        </>
    }

}


export default (props) => (<Template {...props} params={useParams()}></Template>);
