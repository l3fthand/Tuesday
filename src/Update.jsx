import React, {Component} from 'react';
import './App.css';

// var urlPrefix = 'http://localhost:4000/api';

 class App extends Component{
  constructor(props){
    super(props);
  
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    var {updateItem,id,setActiveView} = this.props

    var formData = new FormData(this.form);

    var data = {
      name: formData.get('name-input'),
      work: formData.get('work-input'),
      description: formData.get('description-input'),
    }

    updateItem(id,data);
    setActiveView('projects');
  }

  render(){

    var {name, work, description} = this.props;

    return(
      

          <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
            <div className="form-group">
              <input type="text" className="form-control" name="name-input" id="name-input" placeholder="Where do you work?" defaultValue={name}/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="work-input" id="work-input" placeholder="What did you make?" defaultValue={work}/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="description-input" id="description-input" placeholder="What did you make?" defaultValue={description}/>
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

        
      
    )
  }
}

export default App;
