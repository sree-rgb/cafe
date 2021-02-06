import logo from './logo.svg';
import './App.css';
import Home from './home';
import Menu from './menu'
import Stories from './stories'
import Navbar from './navbar'
import {useState} from 'react'
function App() {
	const [currentPage,setPage]=useState('Home')
	const callPage=()=>{
		switch(currentPage){
		case 'Home':
			return <Home/>
		case 'Menu':
			return <Menu/>
		case 'Stories':
			return <Stories story='0'/>
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
