import React, { useContext } from 'react';
import swal from 'sweetalert';


import Shoes from './../shoes.json'
import {shoeContext} from './Context'

function Product() {
  const [allShoesList , setAllShoes] = useContext(shoeContext)
  return (
    <div className="App">
      <h1 className='animate__animated animate__backInDown'>
        Here are our Products
      </h1>
      <br />   <br />  <br />
        <div className='animate__animated animate__backInUp' style={{display:"flex" , flexWrap:'wrap' }}>
          {Object.keys(Shoes).map(keyName => {
            const shoe = Shoes[keyName]

            const setData = (e) => {
              e.preventDefault()
              setAllShoes(prevData => [...prevData , shoe])
              swal({
                title: "Added to your Cart",
                text: `You have Successfully add ${shoe.name} in your Cart. You can Buy or remove ${shoe.name} from Your cart` ,
                icon: "success"
              });
            }
            console.log(allShoesList)
            return(
              <div  style={{  textAlign:'center' , width:'350px' , boxShadow:'0 0 10px #463636' , margin:' 20px'}}  key={shoe.id} >
                <div  > 
                <h3 >
                    {shoe.name}
                  </h3>
                  <img src={shoe.img} alt={shoe.name} height={150}/>
                  
                  <br />
                  <br />
                    <div > <span >  {shoe.price} &nbsp; &nbsp; </span>  <button onClick={setData}> Add To Cart </button> </div>
                </div>
                 </div>
            )

          })}
        </div>
    </div>
  );
}

export default Product;
