let Categories=[{'title':'HOT CLASSICS','items':['Espresso','Affogato','Conpanna','Cafe Americano','Cappucino','Cafe Latte','Cafe Mocha','Hot Chocolate']}
,{'title':'COLD CLASSICS','items':['Frappe','Iced Americano','Iced Cafe Mocha','Smoothies','Chocolate Smoothie']}]

function Category(props){
	let listitems=props.items.map((item,key)=>{
		return <li key={key}>{item}</li>
	}
	)
	return(
		<div className='menu-category'>
		<h3>{props.title}</h3>
		<ul>{listitems}</ul>
		</div>
		)

}

function Menu(){
	let category_items=Categories.map((category,key)=>{

		return <Category key={key} title={category.title} items={category.items}/>
	})

	return(
		<>
		<h1>Menu</h1>
		{category_items}
		
	</>
)
}
export default Menu;
