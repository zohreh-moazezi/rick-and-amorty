import React from 'react';
import {connect} from 'react-redux';
import NewItemForm from './NewItemForm';
import FavList from './FavList';
import { removeItem } from './action';


const HomePage = ({items = [] , onRemovePressed}) => (
    <div className='list-wrapper'>
        <NewItemForm />
        {items.map(item => <FavList
         item = {item}
         onRemovePressed = {onRemovePressed}
          />)}
    </div>
);



const mapStateToProps = state => ({
    items : state.items,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed : text => dispatch(removeItem(text)),
    
});

export default connect(mapStateToProps , mapDispatchToProps)(HomePage);