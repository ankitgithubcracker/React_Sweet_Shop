import React, { useState } from 'react'
import Productdescript from './Productdescript';
function Product() {
    let arrProduct=[
      {
         "id":"1",
         "image":"https://i.ndtvimg.com/i/2017-08/kaju-barfi_650x400_71501923806.jpg",
         "productname":"Kaju katli Sweet",
         "price":"Rs 250",
         "quantity":"200g",
         "discription":"Kaju katli, also known as kaju barfi, is a traditional Indian dessert characterized by its diamond shape, made with cashew nuts, sugar, cardamom powder, and ghee butter. This sweet treat often comes wrapped in an edible silver foil, signifying luxury and appreciation for the consume",
      },
      {
        "id":"2",
        "image":"https://www.sanjanafeasts.co.uk/wp-content/uploads/2016/11/Rum-Soaked-Kala-Jamun-01-1.jpg.webp",
        "productname":"Kala Jamun Sweet",
        "price":"Rs 150",
         "quantity":"400g",
        "discription":"Kala Jamun is an Indian sweet made with milk solids. These fried balls are dipped in a sugar syrup flavored with cardamom, rose water and saffron! They are the perfect festive treat.",
     },
     {
        "id":"3",
        "image":"https://www.awesomecuisine.com/wp-content/uploads/2007/10/kalakand.jpg",
        "productname":"Kalakand",
        "price":"Rs 200",
         "quantity":"1kg",
        "discription":"Kaju katli, also known as kaju barfi, is a traditional Indian dessert characterized by its diamond shape, made with cashew nuts, sugar, cardamom powder, and ghee butter. This sweet treat often comes wrapped in an edible silver foil, signifying luxury and appreciation for the consume",
     }
     ,{
        "id":"4",
        "image":"https://i.ndtvimg.com/i/2017-08/kaju-barfi_650x400_71501923806.jpg",
        "productname":"Kaju katli",
        "discription":"Kaju katli, also known as kaju barfi, is a traditional Indian dessert characterized by its diamond shape, made with cashew nuts, sugar, cardamom powder, and ghee butter. This sweet treat often comes wrapped in an edible silver foil, signifying luxury and appreciation for the consume",
     },
     {
        "id":"5",
        "image":"https://i.ndtvimg.com/i/2017-08/kaju-barfi_650x400_71501923806.jpg",
        "productname":"Kaju katli",
        "discription":"Kaju katli, also known as kaju barfi, is a traditional Indian dessert characterized by its diamond shape, made with cashew nuts, sugar, cardamom powder, and ghee butter. This sweet treat often comes wrapped in an edibl e silver foil, signifying luxury and appreciation for the consume",
     }
    ]
    const [procductdesp,setProductdesp]=useState();
    const productDisplay=(e)=>
    {  
        let ind=e.target.parentElement.getAttribute("index")
        console.log( ind);
        console.log(arrProduct[ind]);
            // document.getElementById("slide").setAttribute("class","hidden");
            // document.getElementById("productouter").setAttribute("class","hidden");
            // document.getElementById("productdesp").removeAttribute("class");
            setProductdesp(<Productdescript itemind={arrProduct[ind]}></Productdescript>);
            // document.getElementById("productdesp").removeAttribute("class");

    }
  return (
    <>
    <div id="productouter">
        {/* <h1>Sweets Product</h1> */}
        <div id="Procduct">
            {/* <div className="productdetail">

               <img className='imgproduct' src={arrProduct[0].image} style={{height:"30%",width:"80%"}}></img>
               <p>{arrProduct[0].productname}</p>
               <p>{arrProduct[0].quantity}-{arrProduct[0].price}</p>
               <button className='btnadd' >Add To Cart</button>
            </div> */}
            {
               arrProduct.map((item,i)=>{
                  return(
                     <div className="productdetail" index={i} onClick={productDisplay}>

                     <img className='imgproduct' src={item.image} style={{height:"30%",width:"80%"}}></img>
                     <p>{item.productname}</p>
                     <p>{item.quantity}-{item.price}</p>
                     <button className='btnadd' >Add To Cart</button>
                  </div>
                  )
               })
            }
           
        </div>
    </div>
            {
               procductdesp
            }
    </>
  )
}

export default Product