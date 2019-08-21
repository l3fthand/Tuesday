import React, {Component} from 'react'

class Item extends Component{
    constructor(props){
    super(props)
    }
    handleDeleteClick=(id)=>{
        var id= this.props.id
        this.props.deleteItem(id)
    }
    render(){
        return(
            <div className="card project">
				{/* <img className="card-img-top" src="project.jpg" alt="Card image cap" /> */}
				<div className="card-body">
				    <h5 className="card-title">{this.props.name}</h5>
				    <p className="card-text">{this.props.description}</p>
                    <p className="card-text">{this.props.work}</p>
				    <p>
              <i className="fas fa-heart"></i>
              <i className="fas fa-edit" ></i>
              <i className="fas fa-trash" onClick={this.handleDeleteClick}></i>
				    </p>
				</div>
			</div>
        )
    }
}
export default Item 
