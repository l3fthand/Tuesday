import React, {Component} from 'react';
import Table from 'react-bootstrap/Table'
import View from './View'
import './App.css';

 class App extends Component{
  constructor(props){
    super(props);
    this.state={
      activeView:'projects',
    }
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
      <h3>Projects</h3>

      <div className="card project">
				<img className="card-img-top" src="project.jpg" alt="Card image cap" />
				<div className="card-body">
				    <h5 className="card-title"></h5>
				    <p className="card-text"></p>
				    <p>
              <i className="fas fa-heart"></i>
              <i className="fas fa-edit" ></i>
              <i className="fas fa-trash" ></i>
				    </p>
				</div>
			</div>
       
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
