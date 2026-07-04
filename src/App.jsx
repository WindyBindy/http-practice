import { Component } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm/SearchForm";
import ImageList from "./components/ImageList/ImageList";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import { fetchImages } from "./api";
import "modern-normalize-css/styles/normalize.css";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    quary: "",
    images: [],
    page: 1,
    loading: false,
    imagePick:null,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.quary !== this.state.quary) {
      this.loadImages();
    }
  }

  loadImages = () => {
    const { quary, page } = this.state;

    if (!quary) {
      return;
    }

    this.setState({
      loading: true,
    });

    fetchImages(quary, page)
      .then((res) => {
        this.setState((prev) => {
          return(
            {images: [...prev.images, ...res.hits]}
          )
        });
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  };

  handleSearch = (quary) => {
    this.setState({
      quary: quary,
      images: [],
      page: 1,
    });
  };
  

  loadMore = () => {
    this.setState((prev) => {
      return {page: prev.page +1}
    }, () => {this.loadImages()})
  }

  openModal= (largeImageURL)=>{
    this.setState({
      imagePick: largeImageURL,
    })
  }
  closeModal= ()=>{
    this.setState({
      imagePick: null,
    })
  }


  // loadMore = () => {
  //   this.setState(prev => ({page: prev.page +1}), () => {this.loadImages()})
  // }

  render() {

    return (
      <>
        <SearchForm onSubmit={this.handleSearch} />
        {this.state.loading && <Loader />}
        <ImageList images={this.state.images} onImgClick={this.openModal} />
        {this.state.images.length >0 && <Button onClick = {this.loadMore}/>}

        {this.state.imagePick && <Modal image={this.state.imagePick} onClose={this.closeModal}/>}

        
      </>
    );
  }
}

export default App;
