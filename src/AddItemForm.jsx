import React, {Component} from 'react';

class AddItemForm extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        var formData = new FormData(this.form);

        var data = {
            name:formData.get('name-input'),
            work:formData.get('work-input'),
            description:formData.get('description-input')
        }
        this.props.postItem(data);
        this.props.setActiveView('projects');
    }

    render(){
        return(

            <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
            <div className="form-group">
                  <input type="text" className="form-control" name="name-input" id="name-input" placeholder="Your name"/>
              </div>
              <div className="form-group">
                  <input type="text" className="form-control" name="work-input" id="work-input" placeholder="Where do you work?"/>
              </div>
              <div className="form-group">
                  <input type="text" className="form-control" name="description-input" id="description-input" placeholder="What did you make?"/>
              </div>
              {/* <div className="form-group">
                  <label htmlFor="name-input">Photo</label>
                  <input type="text" className="form-control" name="photo-input" id="photo-input" value="project.jpg"/>
              </div> */}
              <div className="form-group">
                  <label htmlFor="type-input">What type of cofee beans where used?</label>
                  <select className="form-control" name="type-input" id="type-input" placeholder="Name the bean type used">
                      <option value="1">Arabica</option>
                      <option value="2">Robusta</option>
                  </select>
              </div>
              <button type="submit" className="btn btn-primary">Post</button>
          </form>

        );
    }
}

export default AddItemForm;