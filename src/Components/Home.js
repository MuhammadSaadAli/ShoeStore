import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
 

 
export default function Slideshow () {
    return (

        <div>
        <h1 className=' animate__animated animate__flip' > Welcome to our Shoe Store</h1>
      <br/> <br/>
      <div className='row' style={{display:'flex', justifyContent:'center'}}>
      <div className="slide-container col-md-6 animate__animated animate__pulse" style={{width:'40%' }}>
        <Slide>
          <div className="each-slide">
           <img alt='Shoe' src='https://images-na.ssl-images-amazon.com/images/I/61Ez19M9BZL._AC_UY1000_.jpg' style={{width:'95%' , height:'95%'}} />
          </div>
          <div className="each-slide">
          <img alt='Shoe'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkXDXNAxo5-n6AHIiNivoyNeZfWS7iTn2PwQ&usqp=CAU' style={{width:'95%' , height:'95%'}} />

          </div>
          <div className="each-slide">
          <img alt='Shoe'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQngn-Obdv0_gie3XRCc3n1yq_N56zhSvGKkA&usqp=CAU'  style={{width:'95%' , height:'95%'}} />

          </div>
        </Slide>
      </div>
      <h5 className='col-md-6 animate__animated  animate__fadeInRightBig' style={{justifyContent:'flex-start'}}> 
      
      Shoe store is a piece of parent Inc., an assorted arrangement of worldwide footwear brands. Joined, these brands enable make to parent an organization with both an inheritance and a mission. Parent organization’ inheritance incorporates over 130-long stretches of craftsmanship, an enthusiasm for fit and a business canny, with a mission to keep on rousing individuals to feel better… feet first.
      The Company opened up to the world in 1973 when it changed its name to ‘Organization Name’ US Limited. Today, ‘Shoe Store’ US has built up itself as US’s biggest footwear retailer. Its retail system of more than 1375 stores gives it a compass/inclusion that no other footwear organization can coordinate. The stores are available in great areas and can be found in all the ‘Organization Name’ s, small ‘Organization Name’ s and towns

‘Organization Name’ ‘s keen looking new stores bolstered by a scope of better quality items are gone for offering a better shopping knowledge than its clients.

The Company additionally works a substantial non retail appropriation organize through its urban discount division and takes into account a great many clients through more than 30,000 merchants.
      </h5>
      </div>

      </div>
    )
}