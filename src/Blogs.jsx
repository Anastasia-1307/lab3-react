import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import searchIcon from './assets/magnifying-glass-tilted-left.svg'
import instagram from "./assets/instagram.svg" 
import discord from "./assets/icons8-discord.svg";
import github from "./assets/icons8-github.svg";
import line from "./assets/myline.png";
import greenline from "./assets/green_line.png"
import laptop from "./assets/laptop.jpg";
import { Link } from 'react-router-dom';
import {IconButton} from './Developer.jsx';
import './App.css';



// const IconButton = ({src, alt, onClick}) => {
// return (
// <button className='icon' onClick={onClick}>
//   <img src={src} alt={alt} width="20px" height="20px" className='nav'/>
// </button>
// );
// }

const MyComponent = ({src, alt, width, className}) => {
  return (
    <img src={src} alt={alt} width={width} className={className}></img>
  )
}

const data = [
  'Frontend',
  'Backend',
  'Software engineer',
  'Fullstack developer',
  'Beginner in IT'
];

function Cautare({data}) {
 
const [query, setQuery] = useState('');
const [filteredData, setData] = useState(data);



// useEffect(() => {
// setData(data);
// }, []);

const handleSearch = (event) => {
const searchTerm = event.target.value.toLowerCase();
setQuery(searchTerm);

const filteredResult = data.filter((item) => item.toLowerCase().includes(searchTerm));
setData(filteredResult);
}



return (
<div className='search-container'>
<input type="text" value={query} onChange={handleSearch} className='search-input'/>
<ul />
</div>
);

}


function Meniu() {
const [showSearch, setShowSearch] = useState(false);


//onClick={(e) => {e.preventDefault(); navigate('/Home.jsx');}} la ahref Home
  return (
 <>
  <nav className="container">
<span className="nav">&lt;C/&gt;      <span className="mynav">SinanTokman</span>     
<Link to="/developer" >Home</Link>
 <Link to="/blogs" >Blogs</Link>
  

<div className="end">
<IconButton src={searchIcon} alt="Search" className="search" onClick = {() => setShowSearch(data)}/> 
<IconButton src={instagram} alt="Instagram" onClick={() => window.open('https://www.instagram.com/', '_self')} />
<IconButton src={discord} alt="Discord" onClick={() => window.open('https://discord.com', '_self')}/>
<IconButton src={github} alt="Github" onClick={() => window.open('https://github.com', '_self')}/>
</div>
</span>
  </nav>
 {showSearch && <Cautare />}
  </>
  );
}

function Title() {
  return <h1 className='green'>Blogs</h1>;
}
export function GreenLine() {
  return (
    <>
    <MyComponent src={greenline} className="greenline" width={200} alt="Line" ></MyComponent><br />
    </>
  ) 
}

function Line() {
  return (
    <>
<MyComponent src={line} alt="Line" className="line"></MyComponent><br />

</>
  );
}

function TextWelcome() {
  return <h5>My thoughts on technology and business, welcome to subscribe</h5>
}

function SubscribeButton() {
return <button className='sbutton' onClick={() => alert('Subscribed successfully!')}>Subscribe My Blogs</button> ;
}




function Section() {
const navigate = useNavigate(); 
  return (
<>
<div className="imageandtext">
<img src={laptop} className='theimage'></img>
<div className='text'>
<h2 className='para'>What does it take to become a web developer?</h2> 
<p >Web developmnet, also known as website development, encompasses a variety of tasks and processes involved in 
  creating websites for the internet... </p>
  <Link to="/section" className='link'> Read more &gt;&gt;</Link>
  <button className="devbutton" onClick={() => navigate('/developer') }>Web developer</button>
  </div>

</div>

</>
  );
}


function Blogs() {
  return (
<div>
  <Meniu />
  <Title />
  <GreenLine />
  <TextWelcome/>
  <SubscribeButton />
  <Line />
  <Section />
  <Line />
  <Section />
  <Line />
  <Section />
  <Line />
</div>
  );
}

export default Blogs;