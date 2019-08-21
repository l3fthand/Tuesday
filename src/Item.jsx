import React, {Component} from 'react'

class Item extends Component{
    constructor(props){
    super(props)
    }
    
    render(){
        return(
            <div className="card project">
				<img className="card-img-top" src="project.jpg" alt="Card image cap" />
				<div className="card-body">
				    <h5 className="card-title">{this.props.task}</h5>
				    <p className="card-text">{this.props.description}</p>
				    <p>
              <i className="fas fa-heart"></i>
              <i className="fas fa-edit" ></i>
              <i className="fas fa-trash" ></i>
				    </p>
				</div>
			</div>
        )
    }
}
export default Item 
