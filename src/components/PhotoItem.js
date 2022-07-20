import { Component } from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */
class PhotoItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            image:[this.props.name],
            text:[this.props.text]
        }
        console.log(this)
    }
   
    
    render(){
        return (
            <div className="photoItem m-2">
                <img alt="" src={this.state.image} />
                <div>{this.state.text}</div>
            </div>
            
        );
    }
    
}
export default PhotoItem;
