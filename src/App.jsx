import React, {Component} from 'react';

import Update from './Update.jsx'
import axios from 'axios';
import View from './View.jsx';
import Item from './Item.jsx';

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
        <div className="header"><i className="fas fa-bars"onClick={()=>this.setActiveView('nav')}></i></div>
			<div className="main">
      <h3></h3>

      {
      this.state.items.map((i) => {

      var props = {
      ...i,
      key: i.id,
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
        <div className="header"><i className="fas fa-times" onClick={()=>this.setActiveView('projects')}></i></div>
			<div className="main">
        <h3>Post your coffee!</h3>
        <form>
                <div className="form-group">
                    <input type="text" className="form-control" name="name-input" id="name-input" placeholder="Where do you work?"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="description-input" id="description-input" placeholder="What did you make?"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name-input">Photo</label>
                    <input type="text" className="form-control" name="photo-input" id="photo-input" value="project.jpg"/>
                </div>
                <div className="form-group">
                    <label htmlFor="type-input">Type</label>
                    <select className="form-control" name="type-input" id="type-input">
                        <option value="1">Painting</option>
                        <option value="2">Sculpture</option>
                        <option value="3">Digital</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
			    </div>
        </View>

        <View viewName = "edit-project" activeView={this.state.activeView} className="color3">
        <div className="header"><i className="fas fa-times" onClick={()=>this.setActiveView('projects')}></i></div>
			<div className="main">
      <h3>Edit project</h3>
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
