import { Component } from "react";
import style from "./Modal.module.css"

class Modal extends Component {
componentDidMount(){
  window.addEventListener("keydown", this.handleKeydown)
  
}
componentWillUnmount(){
  window.removeEventListener("keydown",this.handleKeydown)
}
handleKeydown=(event)=>{
if(event.code === "Escape"){
this.props.onClose()
}
}


handleBackdropClick=(event)=>{
if(event.target=== event.currentTarget){
  this.props.onClose()
}
  
}

  render() {
    
    return (
    <div className={style.backdrop} onClick={this.handleBackdropClick}>
      <div className={style.modal}>
        <img src={this.props.image}alt="img"  />
    
      </div>
    </div>
    );
  }
}

export default Modal;
