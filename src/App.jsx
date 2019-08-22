import React, {Component} from 'react';
import axios from 'axios';

import Update from './Update.jsx'
import View from './View.jsx';
import Item from './Item.jsx';
import AddItemForm from './AddItemForm.jsx'

import './App.css';

var url = 'http://10.2.24.70:4000/api/';
// var url = 'http://localhost:4000/api/';

 class App extends Component{
  constructor(props){
    super(props);
    this.state={
      activeView:'projects',
      items:[],
      updateItem: null,
    }
    
  }

  //update project

  setItemToUpdate = (id) => {
    var foundItem = this.state.items.find((i) => {
      return i.id === id;
    });
    this.setState({updateItem: foundItem});
  }
  

  //GET
  getItem = ()=>{
    axios.get(url+'tasks')
    .then(res=>{
      this.setState({items:res.data})
    })
  }
  //Put
  updateItem = (id,data)=>{
    axios.put(url+'tasks/'+id,data)
    .then(res=>{
      this.getItem()
    })
  }
  //post
  postItem = (data)=>{
    axios.post(url+'tasks/',data)
    .then(res=>{
      this.getItem()
    })
  }
  deleteItem = (id)=>{
    axios.delete(url+'tasks/'+id)
    .then(res=>{
      this.getItem()
    })
  }
  componentDidMount(){
    this.getItem()
  }

  setActiveView = (view)=>{
    this.setState({activeView:view})
  }
  render(){
    return(
      <div className="app">

        <View viewName = "projects" activeView={this.state.activeView} className="color1">
        <div className="header">
          <i class="fas fa-coffee"></i>
          <div className="cupper"><h2>CUPPER</h2></div>
          <i className="fas fa-plus"onClick={()=>this.setActiveView('nav')}></i>
        </div>
        <div className="tagline"><p>Go get a cupper from one of your locals!</p></div>
			<div className="main">
      <h3></h3>

      {
      this.state.items.map((i) => {

      var props = {
      ...i,
      key: i.id,
      deleteItem: this.deleteItem,
      updateItem: this.updateItem,
      setActiveView: this.setActiveView,
      setItemToUpdate: this.setItemToUpdate,
      };
      return (<Item {...props} />)
      })
      }

      
       
			</div>
        </View>
        <View viewName = "add-project" activeView={this.state.activeView} className="color2">
        <div className="header">
        <i class="fas fa-coffee"></i>
          <h3>Post your coffee!</h3>
          <i className="fas fa-times" onClick={()=>this.setActiveView('projects')}></i>
        </div>
        <div className="tagline"><p>Share your creation with us!</p></div>
			<div className="main">
          <AddItemForm postItem={this.postItem} setActiveView={this.setActiveView}  />
			    </div>
        </View>

        <View viewName = "edit-project" activeView={this.state.activeView} className="color3">
        <div className="header">
          <i class="fas fa-coffee"></i>
          <h3>Edit your post!</h3>
          <i className="fas fa-times" onClick={()=>this.setActiveView('projects')}></i>
        </div>
        <div className="tagline"><p>Share your creation with us!</p></div>

			<div className="main">
      
        <Update {...this.state.updateItem} updateItem={this.updateItem} setActiveView={this.setActiveView}/>
			</div>
        </View>
        
        <View viewName = "nav" activeView={this.state.activeView} className="color5">
        <div className="header"><i className="fas fa-times"onClick={()=>this.setActiveView('projects')}></i></div>
			<div className="main">
        <ul className="menu">
          <li><a onClick={()=>this.setActiveView('projects')}className="color1" href="#">Projects</a></li>
          <li><a onClick={()=>this.setActiveView('add-project')}className="color3" href="#">Add project</a></li>
       </ul>	    
			</div>
        </View>
      </div>
    )
  }
}

export default App;
