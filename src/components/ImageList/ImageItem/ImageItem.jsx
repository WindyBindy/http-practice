import { Component } from "react";
import style from "./ImageItem.module.css"

class ImageItem extends Component {
  render() {
    const {img, onClick} = this.props    
    return (
      <li className={style.item}>
        <img src={img.webformatURL} alt={img.tags}  className={style.img} onClick={()=>{onClick(img.largeImageURL)}}/>
      </li>
    );
  }
}

export default ImageItem;
