import { Component } from "react";
import ImageItem from "./ImageItem/ImageItem";
import style from "./ImageList.module.css"

class ImageList extends Component {
  render() {
const {images, onImgClick}=this.props
    return (
      <ul className={style.list}>
        {images.map((img) => {
          return (
            <ImageItem key = {img.id} img = {img} onClick={onImgClick}/>
            // <li key={img.id}>
            //   <img src={img.webformatURL} alt={img.tags} />
            // </li>
          );
        })}
      </ul>
    );
  }
}

export default ImageList;