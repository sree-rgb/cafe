function Navbar({setPage}){
	const navelements=['Home','Menu','Stories'].map((item,index)=>{
		return <li key={index} className='nav-item'><button onClick={()=>{setPage(item)}}>{item}</button></li>
	}
		)

	return (
		<div className='navbar'>
		<h4 className='navbrand'>Cafe Name</h4>
		<ul className='navlist'>
		{navelements}
		</ul>
		</div>
		)
}
export default Navbar;