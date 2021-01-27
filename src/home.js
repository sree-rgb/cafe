
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
function Home() {
  return (
  	<>
  	<div  className='home_container'>
    	<div className='item1'>
    		<h1>Your cup of inspiration</h1>
    		<h4>Experience love at first sip</h4>
    	</div>
    	<div className="cardbox">
    	<Card src={'coffee1.svg'} text={'Espresso'}/>
    	<Card src={'coffee2.svg'} text={'Hot or Iced'}/>
    	<Card src={'coffee3.svg'} text={'Caffe latte'}/>
    	</div>

    </div>
    <OfferBanner/>
    </>
  );
}

export default Home;