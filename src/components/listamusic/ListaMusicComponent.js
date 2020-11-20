import React from 'react';
import { connect } from 'react-redux';
import { selectActiveWord } from '../../store/palabra/reducer';




const ListaMusicComponent=({palabra})=>{
    return(
        <div>
            <h1 className="palabra"> {palabra} </h1>
                 
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        palabra:selectActiveWord(state)
    }
}




export default connect(mapStateToProps)(ListaMusicComponent)