import './App.css';
import Home from './home';
import Menu from './menu'
import Stories from './stories'
import Navbar from './navbar'
import Aboutus from './aboutus'
import {useState} from 'react'
function App() {
	const [currentPage,setPage]=useState('Home')
	const [currentStory,setStory]=useState('0')
	const callPage=()=>{
		switch(currentPage){
		case 'Home':
			return <Home setPage={setPage} setStory={setStory}/>
		case 'Menu':
			return <Menu/>
		case 'Stories':
			return <Stories story={currentStory}/>
		case 'About Us':
		return <Aboutus/>
		default:
			return <h1> Error</h1>
	}
}
  return (
  	<>
  	<Navbar setPage={setPage}/>
  	{callPage()}
  	</>
  );
}

export default App;
