let Categories=[{'title':'HOT CLASSICS','items':['Espresso','Affogato','Conpanna','Cafe Americano','Cappucino','Cafe Latte','Cafe Mocha','Hot Chocolate']}
,{'title':'COLD CLASSICS','items':['Frappe','Iced Americano','Iced Cafe Mocha','Smoothies','Chocolate Smoothie']}
,{'title':'TEA','items':['Ginger Honey','Green Tea','Darjeeling Tea','Tulsi Tea','Ginger Tea','Cardamom Tea','Earl Grey Tea']}
,{'title':'ADD ONS','items':['Whipped Crean','Vanila Flavour','Irish Cream Flavour','Hazelnut Flavour','Chocolate Fudge','Espresso Shot','Vanilla Ice','Caramel Sauce']}]

function Category(props){
	let listitems=props.items.map((item,key)=>{
		return <li key={key} className='menu-item'>{item}</li>
	}
	)
	return(
		<div className={'category'+props.id}>
		<h3 className={'category-title category-title'+props.id}>{props.title}</h3>
		<ul >{listitems}</ul>
		</div>
		)

}

function Menu(){
	let category_items=Categories.map((category,key)=>{

		return <Category key={key} id={key} title={category.title} items={category.items}/>
	})

	return(
		<div className='menu-container'>
			<h1 className='menu-title'>Menu</h1>

			<div className='menu-grid'>
			<img src="menudrink.svg" className='menu-drink'/>
				{category_items}
		
			</div>
		</div>
)
}
export default Menu;
