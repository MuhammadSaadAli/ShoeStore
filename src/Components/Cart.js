
import React,{useContext} from 'react';
import swal from 'sweetalert';
// import './../Animation.css'

// Components
import {shoeContext} from './Context'


function Cart() {

  const [allShoesList,setAllShoes] = useContext(shoeContext)
  return (
    <div className="App"  >
      <h1 className='animate__animated animate__zoomInDown'>
        Add your inventory here by purchasing from Our Product section
      </h1>
      {   allShoesList.map( (keyName,ind) => {
              const Delete = () => {
                
                setAllShoes(prevData => [...prevData])
                allShoesList.splice(ind,1)

                swal({
                  title: "Added to your Cart",
                  text: `You have Successfully Delete ${keyName.name} from your Cart. You can add ${keyName.name} again in your cart by our purchasing section ` ,
                  icon: "error"
                });

              }
              const Buy = () => {
                
                setAllShoes(prevData => [...prevData])
                allShoesList.splice(ind,1)

                swal({
                  title: "Added to your Cart",
                  text: `You have Successfully Buy ${keyName.name} from your Cart. It Cost only ${keyName.price} ` ,
                  icon: "success"
                });

              }
          return(
            
            <div  style={{  textAlign:'center' , width:'350px' , boxShadow:'0 0 10px #463636' , margin:' 20px'}}  key={ind} >
            <div  > 
            <h3 >
                {keyName.name}
              </h3>
              <img src={keyName.img} alt={keyName.name} height={150}/>
              
              <br />
              <br />
                <div > <span >  {keyName.price} &nbsp; &nbsp; </span> <button onClick={Buy}> Buy The Shoes</button> 
                <button onClick={Delete} className="Danger"> Delete from cart</button>  </div>
            </div>
             </div>
          )
        }
      )}
    </div>
  );
}

export default Cart;
