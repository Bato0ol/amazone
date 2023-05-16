import React from 'react'
import './Home.css';
import Product from './Product';
import Header from './Header';
function Home() {
  return (
   
   
    <div className='home'>
    
        <img className='home_img' src='https://didrikhansen.pro/clones/amazon/static/media/addContainer.e702f5ac.jpg' alt=''/>
       
        <div className='home_row'>
          <Product id="12321341"
          title="the learn startup :How constant innovation......."
          price={11.96}
          rating={5}
          image="https://lean.st/images/final-cover.png?1315940898"
          />
 <Product id="12321341"
          title="Mixer......."
          price={249}
          rating={5}
          image="https://m.media-amazon.com/images/I/61jFYI4spyL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
           <Product id="12321341"
          title="Samsung Galaxy Watch 5 Pro with LTE support on Amazon with a promo price"
          price={70.96}
          rating={5}
          image="https://gagadget.com/media/cache/54/01/540111e7938cbc5e8f5cfacd45c54776.jpg"
          />
        </div>
        <div className='home_row'>
        <Product id="12321341"
          title="SAMSUNG Galaxy S22 Ultra Cell Phone"
          price={250}
          rating={5}
          image="https://m.media-amazon.com/images/I/61U6oC65TTL._AC_SX569_.jpg"
          />
           <Product id="12321341"
          title="Samsung’s original Gear Fit was a great success"
          price={200}
          rating={5}
          image="https://fdn.gsmarena.com/imgroot/news/16/06/samsung-gear-fit-2-goes-for-pre-order-on-amazon/gsmarena_002.png"
          />
        </div>
        <div className='home_row'>
        <Product id="12321341"
          title="sumsung monitor......."
          price={100.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/61LmgKYPiJL._AC_SX679_.jpg"
          />

        </div>

        
      
  </div>

  )
}

export default Home