import React from 'react';
//Include Sweetalert
import swal from 'sweetalert';

function Sweet() {

  const sweetAlert=()=>{
    swal('A');
  }

   
    return (
<div className="App">
  
<div className="col-md-5 center">
  <button className="btn btn-dark  btn-lg" onclick={()=>sweetAlert()}>Comprar</button>
</div>

</div>
)
}

export default Sweet;