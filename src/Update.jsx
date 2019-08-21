import React, {Component} from 'react';
import './App.css';

// var urlPrefix = 'http://localhost:4000/api';

 class App extends Component{
  constructor(props){
    super(props);
    this.state={
      activeView: 'add-project',
      workInputValue: 'Starbucks',
      coffeeInputValue: 'flat white',
    }
  }
  setActiveView = (view)=>{
    this.setState({activeView:view})
  }
  render(){
    return(
      <div className="app">

        <View viewName = "add-project" activeView={this.state.activeView} className="color2">
          <div className="header"><i className="fas fa-times" onClick={()=>this.setActiveView('projects')}></i></div>
			    <div className="main">
          <h3>Post your coffee!</h3>
          <form>
            <div className="form-group">
              <input type="text" className="form-control" name="name-input" id="name-input" placeholder="Where do you work?" value={this.state.workInputValue}/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="description-input" id="description-input" placeholder="What did you make?" value={this.state.coffeeInputValue}/>
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

        
      </div>
    )
  }
}

export default App;
