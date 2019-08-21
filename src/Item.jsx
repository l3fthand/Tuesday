import React, {Component} from 'react'

class Item extends Component{
    constructor(props){
    super(props)
    }
    handleDeleteClick=(id)=>{
        var id= this.props.id
        this.props.deleteItem(id)
    }

    editItem = () => {
        var {setActiveView, setItemToUpdate, id} = this.props;
    
        setItemToUpdate(id);
        setActiveView('edit-project');
      }
    
    render(){

        var {name, work, description} = this.props;

        return(
            <div className="card project">
				{/* <img className="card-img-top" src="project.jpg" alt="Card image cap" /> */}
				<div className="card-body">
              
				    <h5 className="card-title">{name}</h5>
				    <p className="card-text">{work}</p>
                    <p className="card-text">{description}</p>
				    <p>
                    <i className="fas fa-heart"></i>
                    <i onClick={this.editItem} className="fas fa-edit" ></i>
                    <i className="fas fa-trash" onClick={this.handleDeleteClick}></i>
				    </p>
                    
				</div>
			</div>
        )
    }
}
export default Item 
