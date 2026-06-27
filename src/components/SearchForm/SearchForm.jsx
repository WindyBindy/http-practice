import { Component } from "react";

class SearchForm extends Component{
  state={
    quary:"",
  }

  handleChange = (e)=>{
    this.setState({quary: e.target.value})
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    if(!this.state.quary){
      return
    }
    this.props.onSubmit(this.state.quary)
    
  }

  render(){
    const {quary} = this.state
    
    

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={quary} placeholder="what are we searching?"></input>
        <button type="submit">Search</button>
      </form>
      
    )
  }
}

export default SearchForm