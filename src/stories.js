
const STORIES = [{'title':'Espresso','text':["Espresso is both a coffee beverage and a brewing method. Espresso is made by forcing very hot water under high pressure through finely ground compacted coffee.Tamping down the coffee promotes the water's even penetration through the grounds.This process produces an almost syrupy beverage by extracting both solid and dissolved components.The crema is produced by emulsifying the oils in the ground coffee into a colloid, which does not occur in other brewing methods.","Generally an espresso machine is used to make espresso.Angelo Moriondo, from Turin(Northern Italy), patented a steam-driven 'instantaneous' coffee beverage making device in 1884.Unlike true espresso machines, it brewed in bulk, not as individual servings. Seventeen years later,in 1901, Luigi Bezzera, from Milan, devised and patented several improvements to the espresso machine.","Espresso is not a specific bean, bean blend, or roast level. Any bean or roasting level can be used to produce authentic espresso. For example, in southern Italy, a darker roast is generally preferred.  Farther north, the trend moves toward slightly lighter roasts, while outside Italy a wide range is popular."],'image':'story1.jpg'}]
function Story(props){
	const story_text=props.text.map(
		(para)=>{
			return <p>{para}</p>
		}
		)
	return (
	<div className="story-grid">
		<div className="story-grid-text">
			<h1>{props.title}</h1>
			{story_text}
		</div>
		<img className="story-img" src={props.image}/>

	</div>
	)
}


function Stories(props){
	
return (
	<div className="story">
	<Story title={STORIES[0].title} text={STORIES[0].text} image={STORIES[0].image} />
	</div>
	)
}
export default Stories;