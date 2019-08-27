import React, {Component} from 'react'

var publicUrl = 'http://localhost:4000/';

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

        var {name, work, description, photo} = this.props;

        return(
            <div className="card project">
				<img className="card-img" src={publicUrl+photo} alt="Card image cap"/>
				<div className="card-body">
              
				    <h5 className="card-title">{name}</h5>
				    <div className="text-box">
                    <p className="card-text">{work}</p>
                    <p className="card-text">{description}</p>
                    </div>
				    <p>
                    <i onClick={this.editItem} className="fas fa-edit" ></i>
                    <i className="fas fa-trash" onClick={this.handleDeleteClick}></i>
				    </p>
                    
				</div>
			</div>
        )
    }
}
export default Item 
