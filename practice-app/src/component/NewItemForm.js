import React, {useState , useEffect} from 'react';
import { connect } from 'react-redux';
import {addItem} from './action';
import swal from 'sweetalert';
import { Tooltip } from 'react-tooltip'
import './NewItemForm.css'


const NewItemForm = () => {

    const [existItem , setItem] = useState(null);
    useEffect (() =>{
        fetch ('https://rickandmortyapi.com/api/character/51')
        .then((response) => response.json())
        .then(setItem);
    } , []);
    
    if(existItem)
    return (
        <CousinNicky
        name = {existItem.name}
        status = {existItem.status}
        species = {existItem.species}
        avatar = {existItem.image}
        location = {existItem.location.name}
        />        
    );


function CousinNicky ({name , status , species , avatar  , location}){
    return (
        <>
        <div className='all'>
            <div  className='cousin' data-tooltip-id="my-tooltip" data-tooltip-content="Male">
                <Tooltip id="my-tooltip" />
                <div>
                    <img src = {avatar}  alt = {name} className = 'pic'/>   
                </div>
                <div className='text' >
                   <h1>{name}</h1>
                   <p>{status}-{species}</p>
                   <p className='location'> Last known location :</p>
                   <p>{location}</p>
                   <p className='location'>First seen in : </p>
                </div>
            </div>
            <div>
                <button className = 'add'
                onClick={() => {
                        swal({
                            title :"This item added to your favorites",
                            icon : "success"
                        })
                }}>
                   Add to favorites
                </button>
            </div>
        </div>
        </>
    );
}
}



const mapStateToProps = state => ({
    items : state.items,
});

const mapDispatchToProps = dispatch => ({
    onAddPressed : text => dispatch(addItem(text)),
});

export default connect(mapStateToProps , mapDispatchToProps)(NewItemForm);