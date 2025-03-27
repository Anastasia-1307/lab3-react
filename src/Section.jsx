
import { Link } from "react-router-dom";
import {useState} from 'react';
import searchIcon from './assets/magnifying-glass-tilted-left.svg'
import instagram from "./assets/instagram.svg" 
import discord from "./assets/icons8-discord.svg";
import github from "./assets/icons8-github.svg";
import SearchBar from "./SearchBar";
import {IconButton} from './Developer';
import upload from "./assets/upload.svg";
import line from "./assets/myline.png";
import laptop from "./assets/laptop.jpg";
import './App.css';



const MyComponent = ({src, alt}) => {
  return (
    <img src={src} alt={alt} className='line'></img>
  )
}

function Line() {
  return (
    <>
<MyComponent src={line} alt="Line" className="line"></MyComponent><br />

</>
  );
}




function Meniu() {
const [showSearch, setShowSearch] = useState(false);


//onClick={(e) => {e.preventDefault(); navigate('/Home.jsx');}} la ahref Home
  return (
 <>
  <nav className="container">
<div className="nav">&lt;C/&gt;      <span className="mynav">SinanTokman</span>     
<Link to="/developer" >Home</Link>
 <Link to="/blogs" >Blogs</Link>
  

<div className="end">
<IconButton src={searchIcon} alt="Search" onClick = {() => setShowSearch(!showSearch)}/> 
<IconButton src={instagram} alt="Instagram" onClick={() => window.open('https://www.instagram.com/', '_self')} />
<IconButton src={discord} alt="Discord" onClick={() => window.open('https://discord.com', '_self')}/>
<IconButton src={github} alt="Github" onClick={() => window.open('https://github.com', '_self')}/>
</div>
</div>
  </nav>
 {showSearch && <SearchBar data={[ 'Frontend', 'Backend', 'Software engineer', 'Fullstack developer', 'Beginner in IT']}/>}
  </>
  );
}

function Title() {
    return <h1 className='green'>What does it take to become a web developer?</h1> 
}


function Sectiune() {
  return (
<>
<div className="container">
<div className="header">
  <h6><b>Text</b> Sinan   &nbsp;    <b>Date</b> 10 Oct. 2023  &nbsp;  <b>Read</b> 1 Min</h6> 

  <IconButton className='nav' src={upload} alt="Upload" onClick={() => window.open()}/>
  </div>
</div>
</>
  );
}



function Content() {
  return (
<>
<img src={laptop} className='sectionimage'></img>

<p className="whitetext">Web development, also known as website development, encompasses a variety of tasks and processes involved in 
creating websites for the internet. It involves various specialized fields, each with its own set of skills and techniques. While 
some individuals might view web development as a holistic process, it can be broken down into several key areas that are 
essential for building a functional and visually apealing website. </p>
<p className="greentext">Frontend Development:</p>
<p className="whitetext">Frontend developmnet focuses on the user-facing aspects of a website. It involves creating the visual 
  elements that users interact with directly. Frontend developers use a combination of languages such as HTML, CSS and JavaScript 
  to build and style the layout, design and interactivity of the website. They need to have a strong understanding of user experience
   (UX) and user interface (UI) design to ensure that the website is both aesthetically pleasing and user-friendly.
</p>
<p className="greentext">Backend Development:</p>
<p className="whitetext">Backend development involves the behind-the-scenes functionality of a website. It includes server-side 
  scripting, databases and the logic that operates behind the scenes to ensure that the frontend works smoothly. Backend developers 
  work with programming languages such as Ruby, Python, PHP and Java, and frameworks such as Node.js, Django and Lavarel. They are 
  responsible for building and maintaining the server, application and database that power the website.
</p>
</>
  );
}

function Section() {
    return (
<div>
    <Meniu />
    <Title />
    <Sectiune />
    <Line />
   <Content />

</div>
    );
}
export default Section;


 
