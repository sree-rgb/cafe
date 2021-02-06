
import {useState,useEffect} from 'react';
function Card(props){

	return (
		<div className='card'>
		<h3>{props.text}</h3>
		<img className="card_image" src={props.src} />
		</div>
		)
}
function OfferBanner(props){
	return (
		<div className='banner'>
			<div  className='offerbox'>
		 		<h4> Your chance to win</h4><br/>
					<h1> FREE BEVERAGE</h1><br/>
				<h4>For an entire month</h4>
			</div>
      
		</div>
		)
}
function* imageNameGenerator() {
  
    let coffeeimages=['coffee-1.png','coffee-2.png']
  
  let number_of_images=coffeeimages.length
  let current_image_index=-1
  while (true) {
  current_image_index= ((current_image_index+1)==number_of_images)? 0:current_image_index+1
  yield coffeeimages[current_image_index]
  }

}
 let image_gen=imageNameGenerator()
function Home() {
 
  let [imageGetter,setImage]=useState('coffee-1.png')
  useEffect(()=>{
    let clearID=setInterval(()=>{setImage(image_gen.next().value)},5000)
    return ()=>{clearInterval(clearID)}
  },[])

  return (
  	<>
  	<div  className='home_container'>
      <img src={imageGetter} />
    	<div className="cardbox">
    	<Card src={'coffee1.svg'} text={'Espresso'}/>
    	<Card src={'coffee2r2.svg'} text={'Frappe'}/>
    	<Card src={'coffee3r.svg'} text={'Caffe latte'}/>
    	</div>

    </div>
    <OfferBanner/>
    </>
  );
}

export default Home;