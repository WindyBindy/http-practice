import { Component } from 'react'
import "./App.css"
import SearchForm from './components/SearchForm/SearchForm'
import { fetchImages } from './api'

class App extends Component {
state={
  quary: "",
  images:[],
  page:1
}

componentDidUpdate(_, prevState){
if(
  prevState.quary !== this.state.quary
){
this.loadImages()
}
}

loadImages=()=>{
const {quary, page}= this.state
if(!quary){
  return
}
fetchImages(quary, page).then(res=>{

  this.setState({
    images:res.hits
  })
})
}


handleSearch =  (quary)=>{
  this.setState({
    quary: quary,
    images:[],
    page: 1
  }) 

  
}



	render() {
    
    
    
    
		return (
    <>
    <SearchForm  onSubmit={this.handleSearch}/>

    <ul className="list">
      {this.state.images.map(img=>{
        return(
          <li key={img.id} >
            <img src={img.webformatURL} alt={img.tags} width="250px" />
          </li>
        )
      })}
    </ul>
    
    </>
    )
    
	}
}

export default App
