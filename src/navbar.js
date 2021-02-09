function Navbar({setPage}){
	const navelements=['Home','Menu','Stories','About Us'].map((item,index)=>{
		return <li key={index} className='nav-item'><a className='noselect'  onClick={()=>{setPage(item)}}>{item}</a></li>
	}
		)
	const hamburgerMenu=['','',''].map((item,index)=>{
		return <span key={index} className='bar noselect'></span>
	})
	const toggle=()=>{
		const navlist=document.querySelector('.navlist')
		navlist.classList.toggle('active')
	}

	return (
		<nav className='navbar'>
		<h4 className='navbrand'>Cafe Name</h4>
		<a className='toggle-button' href='#' onClick={()=>{toggle()}}>
		{hamburgerMenu}
		</a>
		<ul className='navlist'>
		{navelements}
		</ul>
		</nav>
		)
}
export default Navbar;