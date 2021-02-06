import {useState} from 'react';
const STORIES = [{'title':'Espresso','text':["Espresso is both a coffee beverage and a brewing method. Espresso is made by forcing very hot water under high pressure through finely ground compacted coffee.Tamping down the coffee promotes the water's even penetration through the grounds.This process produces an almost syrupy beverage by extracting both solid and dissolved components.The crema is produced by emulsifying the oils in the ground coffee into a colloid, which does not occur in other brewing methods.","Generally an espresso machine is used to make espresso.Angelo Moriondo, from Turin(Northern Italy), patented a steam-driven 'instantaneous' coffee beverage making device in 1884.Unlike true espresso machines, it brewed in bulk, not as individual servings. Seventeen years later,in 1901, Luigi Bezzera, from Milan, devised and patented several improvements to the espresso machine.","Espresso is not a specific bean, bean blend, or roast level. Any bean or roasting level can be used to produce authentic espresso. For example, in southern Italy, a darker roast is generally preferred.  Farther north, the trend moves toward slightly lighter roasts, while outside Italy a wide range is popular."],'image':'story1.jpg'},
{'title':'Frappe','text':['A frappe is a Greek iced coffee drink made form instant coffee, water, sugar and milk. The frappe was invented through experimentation by Dimitris Vakondios a Nescafe representative, in 1957 in Thessaloniki (City in Greece). Frappes are among the most popular forms of coffee in Greece and Cyprus and have become a hallmark of postwar, outdoor,Greek, coffee culture.','he name frappe comes from French where it describes drinks chilled with ice. Beginning in the 19th century a variety of cold coffee drinks named cafe frappe are documented, some similar to slushes, others more like iced coffee. The Greek version of cafe frappe, using instant coffee was invented in 1957 at Thessaloniki International Fair. A representative of the Nestle company, Giannis Dritsas, was exhibiting a new product for children, a chocolate beverage produced instantly by mixing it with milk and shaking it in a shaker. Dritsas employee Dimitris Vakondios was looking for a way to have his usual instant coffee during his break but could not find any hot water, so he mixed the coffee with cold water and ice cubes in a shaker.',"This improvised experiment established the frappe which   quickly grew in popularity in Greece. Nestle capitalized on the drink with intense marketing campaigns in the 1980s that broadened the drink's popularity and left the brand name Nescafe inextricably linked with the frappe. A frappe can be made with a cocktail shaker or more commonly today with an electric milk frother or milkshake machine. First, instant coffee, sugar and a little water are shaken or blended together until a thick foam is made.This is poured into the serving glass and ice cubes, cold water and optionally, milk are added to it. The drink is almost always served with a drinking straw, as the thick foam which form on top is considered bitter by many."],'image':'story2.jpg'},
{'title':'Cafe Latte','text':["Caffe latte is a coffee drink made with espresso and steamed milk. The word comes from the Italian caffe e latte, caffelatte or caffellatte, which means 'coffee & milk'.Variaants include the chocolate-flavored mocha or replacing the coffee with another drink base such as masala chai,mate matcha turmeric or rooibos; other types of milk such as soy milk or almond milk, are also used.","According to the Oxford English Dictionary, the term caffe latte was first used in English in 1867 by William Dean Howells in his essay 'Italian Journeys'. In Italy, caffe latte is almost always prepared at home, for breakfast only. The coffee is brewed with a stovetop moka pot and poured into a cup containing heated milk. Outside Italy, a caffe latte is typically prepared in a 240ml glass or cup with one standard shot of espresso and filled with steamed milk with a layer of foamed milk approximately 12mm thick on the top. When ordering this drink in Italy, one should ask for a latte macchiato.","The drink is related to a cappuccino, the difference being that a cappuccino consists of espresso and steamed milk with a 20 millimeters thick layer of milk foam. A caffe latte differs from a latte macchaito.  In a latte macchiato,espresso is added to milk rather than the reverse, and caffe lattes have a stronger coffee flavour.The latte macchiato is milk steamed to microfoam, served in a glass with a half shot of espresso poured gently through the foamy top layer, creating a layered drink with a 'macchia' a spot of espresso on the top."],'image':'story3.jpg'}]


function Story(props){
	const story_text=props.text.map(
		(para,index)=>{
			return <p key={index}>{para}</p>
		}
		)
	return (
	<div className="story-grid">
		<div className="story-grid-text">
			<h1>{props.title}</h1>
			{story_text}
		</div>
		<img className="story-img" src={props.image} alt="coffee image"/>

	</div>
	)
}


function Stories(props){
	const [story,setStory]=useState(props.story)
	const story_list=STORIES.map((story)=>{return story.title})
	const story_onclick=(e)=>{setStory(e.target.getAttribute('data-index'))}
	const Story_menu=story_list.map((title,index)=>{return <li key={index} className="story_menu_item"  >< button  data-index={index} onClick={story_onclick}>{title}</button></li>})
	
return (

	<div className="story">
	<ul className="story_menu_list">{Story_menu}</ul>
	<Story title={STORIES[story].title} text={STORIES[story].text} image={STORIES[story].image} />
	</div>
	)
}
export default Stories;