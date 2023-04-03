import React from 'react';
import user from '../images/user.png'


const ContactCard = ({contactList,index,handleDelete,setIsEditMode,isEditMode, handleEdit,handleFav}) => {
    const handleClick=(()=>{
        handleDelete(index);
        setIsEditMode(false); 


    })
    
    const handleEditClick = () => {
        setIsEditMode(true);
        handleEdit(index);
      };
      const handleFavList = () => {
        handleFav(index);
      };

    return (
        <div className="item"  style={{ padding:"7px" }}>
            <img className="ui avatar image" src={user} alt="user-image" />
            <div className="content">
                <div className="header">{contactList.name}</div>
                <div>{contactList.email}</div>
            </div>
            <i style={{ color: "red", float: "right", marginTop: "20px" }} className="trash alternate outline icon" onClick={handleClick} />
             <i  style={{ color: "blue", float: "right", marginRight: "20px", marginTop: "20px"}} class="edit outline icon" onClick={handleEditClick}>
             </i>
             <i style={{ color: "maroon", float: "right", marginRight: "20px", marginTop: "20px"}} class="heart icon" onClick={handleFavList}></i>
        </div>
    )
}

export default ContactCard