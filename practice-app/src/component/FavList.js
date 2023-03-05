import React from "react";
import './FavList.css';

const FavList = ({item , onRemovePressed}) => (
    <div className="item-container">
        <div className="button-container">
            <button className="remove-button"  onClick={() => onRemovePressed(item.text)}>Remove</button>
            
        </div>
    </div>
);

export default FavList;