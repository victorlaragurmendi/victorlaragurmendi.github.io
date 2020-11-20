

const updateWord=(palabra)=>{
    console.log( `la  frase es  "${palabra}"`)
    
    return{
        type:'UPDATE_WORD',
        payload:palabra
    }
    
}

export default updateWord