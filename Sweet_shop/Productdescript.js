import React from 'react'

function Productdescript(props) {
  return (
    <div id="productdesp">
        <div id="productdestop" >  
           <div className="productimg"><img className='imginner' src={props.itemind.image}></img></div>
           <div className='producttext'>
            <h2>{props.itemind.productname}</h2>
            <p>sfsfeferwerwdfdfddg</p>
            <button>-</button><span>feff</span><button>+</button><br></br>
            <button>Add to cart</button>
           </div>
        </div>
    </div>
  )
}

export default Productdescript