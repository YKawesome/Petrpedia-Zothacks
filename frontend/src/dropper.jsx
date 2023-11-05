import { Component } from "react";
import { useParams } from "react-router-dom";

class DropperPage extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "", contactInfo: "", petrList: [], userId: 0};
      }
      componentDidMount() {
        let {dropperName} = this.props.params;
        fetch("//localhost:5000/templates-get-by-creator/"+dropperName).then(value => {
          value.json().then(data=> {
            console.log(data);
            this.setState({petrList: data, dropperName});
            console.log(dropperName)
          });
        });
      }
      render() {
        let petrList = [];
        for(let i = 0;i<this.state.petrList.length;i++) {
          petrList.push(<div key={i}>
            <img src={"//localhost:5000/templates-get-image/?image_path=" +encodeURIComponent(this.state.petrList[i].image)}></img>
            <div className="template_name">{this.state.petrList[i].name}</div>
          </div>)
        }
        return <>
          <div className='username_title'>{this.state.name}</div>
          <div className='user_page_contact'>{this.state.contactInfo}</div>
          <div className='sticker_list'>{petrList}</div>
        </>
      }
}

export default (props) => (<DropperPage {...props} params={useParams()}></DropperPage>);