
import React, { useRef } from 'react'
import { Button } from 'react-bootstrap';
import '../firma/firmacomponent.scss'
import updateWord from '../../store/palabra/action'
import { connect } from 'react-redux';


  
 


const FirmaComponent = ({ updateWord }) => {
    const palabraRef = useRef(null);
    return (
        <div>

            <ul style={{ listStyleType: "none" }}>
                <li><textarea name="textarea" placeholder="FIRMA_" rows="4" id="firma" cols="40" ref={palabraRef} onChange={() => { updateWord(palabraRef.current.value) }} >
                </textarea>
                </li>
                {/* <li><Button onClick={() => { updateWord(palabraRef.current.value) }}>Guardar en la store (añadir firma)</Button></li> */}
            </ul>

        </div>
    )
}



export default connect(null, { updateWord })(FirmaComponent)