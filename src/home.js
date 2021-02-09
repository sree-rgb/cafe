
import {useState,useEffect} from 'react';
function Card(props){

	return (
		<div className='card card-grid'>
		<h3 className='card-title'>{props.text}</h3>
		<img className="card_image" src={props.src} onClick={props.getStory} alt='coffee'/>
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
function Home({setPage,setStory}) {
  var getStory=(story)=>{return function(){setPage('Stories');
setStory(story);}
}
 
  let [imageGetter,setImage]=useState('coffee-1.png')
  useEffect(()=>{
    let clearID=setInterval(()=>{setImage(image_gen.next().value)},5000)

    return ()=>{clearInterval(clearID)}
  },[])

  return (
  	<>
  	<div  className='home_container'>
      <img src={imageGetter} alt='A cup of coffee'/>
    	<div className="cardbox">
    	<Card src={'coffee1.svg'} text={'Espresso'} alt="" getStory={getStory('0')}/>
    	<Card src={'coffee2r2.svg'} text={'Frappe'} alt=""getStory={getStory('1')}/>
    	<Card src={'coffee3r.svg'} text={'Caffe latte'} alt="" getStory={getStory('2')}/>
    	</div>

    </div>
    <OfferBanner/>
    </>
  );
}

export default Home;