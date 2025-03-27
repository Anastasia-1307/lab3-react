import {useState} from 'react';
import searchIcon from './assets/magnifying-glass-tilted-left.svg'
import instagram from "./assets/instagram.svg" 
import discord from "./assets/icons8-discord.svg";
import github from "./assets/icons8-github.svg";
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import invite from './assets/icons8-invite.svg';
import computer from './assets/icons8-computer.svg';
import notes from './assets/icons8-notes.svg';
import coding from './assets/icons8-coding.svg';
import chat from './assets/icons8-chat.svg';
import laptop from './assets/laptop.svg';
import mylaptop from'./assets/laptop.jpg';
import programist from './assets/programist.jpg';
import phone from './assets/icons8-phone.svg';
import location from './assets/icons8-location.svg';
import schedule from './assets/schedule.svg';
import download from './assets/icons8-download.svg';
import mouse from './assets/icons8-mouse.svg';
import  {GreenLine} from './Blogs';
import phoneapp from './assets/icons8-phoneapp.svg';
import Div from './Div';
import './App.css';
import html from './assets/icons8-html.svg';
import css from './assets/css.svg';
import js from './assets/icons8-js.svg';
import react from './assets/react.svg';
import IconsDev from './IconsDev';




export const IconButton = ({src, alt, onClick}) => {
return (
<button className='icon' onClick={onClick}>
  <img src={src} alt={alt} width="20px" height="20px" className='nav'/>
</button>
);
}




function Meniu() {
const [showSearch, setShowSearch] = useState('');
//const navigate = useNavigate();

//onClick={(e) => {e.preventDefault(); navigate('/Home.jsx');}} la ahref Home
  return (
 <>
  <nav className="container">
<span className="nav">&lt;C/&gt;      <span className="mynav">SinanTokmak</span>     
<Link to="/developer">Home</Link>
 <Link to="/blogs">Blogs</Link>
  

<div className="end">
<IconButton src={searchIcon} alt="Search" onClick = {() => setShowSearch(!showSearch)}/> 
<IconButton src={instagram} alt="Instagram" onClick={() => window.open('https://www.instagram.com/', '_self')} />
<IconButton src={discord} alt="Discord" onClick={() => window.open('https://discord.com', '_self')}/>
<IconButton src={github} alt="Github" onClick={() => window.open('https://github.com', '_self')}/>
</div>
</span>
  </nav>
  {showSearch && <SearchBar data={["Frontend", "Backend", "Fullstack", "React", "Node.js"]} />}
  </>
  );
}


function Devtitle() {
return <h1 className="developer">Developer</h1>
}


function Search() {
  return (
  
    
  <div>
<span className="devcomp"><IconButton src={invite} alt="invite" onClick = {() => window.open('https://mail.google.com/mail/u/0/#inbox', '_self')}/></span>
<span className="devcomp"><IconButton src={computer} alt="computer" onClick = {() => window.open('https://www.laptopmag.com/reviews/best-laptops-1', '_self')} /> </span>
<span className="devcomp"><IconButton src={notes} alt="notes" onClick={() => window.open('https://www.rabota.md/ro/jobs-moldova-full-stack', '_self')}/></span>
<span className="devcomp"><IconButton src={coding} alt="coding" onClick={() => window.open('https://react.dev/learn', '_self')}/></span>
<span className="devcomp"><IconButton src={chat} alt="chat" onClick={() => window.open('https://www.reddit.com', '_self')}/></span>
</div>

  
  );
}

function Component() {
  
  return (

<div >
  <span className="greenh">&lt;p&gt; </span>
<span className="block"> <h1 className='whitetext'>Hey &nbsp;</h1> </span>
<span className="block"><h1 className="whitetext"> I'm <span className="greentext">Sinan</span>,</h1></span>
<span className="block"><h1 className='whitetext'>Full-Stack Developer <span className="littlegreen">&lt;p&gt; </span> </h1> <span className="littlegreen">&lt;p&gt; </span> </span>
<span className="block"> <p className="whitetext"> &nbsp;  I enjoy helping other developers. Sharing knowledges allows us to do the best!</p>  </span>
<span className="greenh">&lt;p&gt; </span>
<span className="block"><h2 className="greentext">Let's Talk <IconButton src={laptop} alt="chat" onClick={() => window.open('https://www.reddit.com', '_self')}/> </h2></span>
</div> 


  );
}


function Curriculum() {
return (
<div className="border">
  <img src={programist} width={150} height={100} className="imgborder"></img>
  <h3 className="whitetext">Sinan</h3>
  <h6 className='whitetext'>Full-Stack Developer</h6>
 <h6 className='whitetext'><IconButton src={phone} alt="phone"/> 029786543</h6> 
 <h6 className="whitetext"><IconButton src={location} alt='location'/> SUA, California, 45 White street</h6>
<h6 className='whitetext'><IconButton src={schedule} alt='schedule'/> Mon - Fri, 9:00 - 17:00</h6>
  
<button className='dowloadbutton' onClick={() => alert('Download!')}>Download CV <IconButton src={download} alt="download"/>  </button> 
</div>
);
}

function Numbers() {
  return (
<div className="circle"> 
 <div className="devcomp">
<h4 className="greentext">4 <span className="whitetext">Programming Languages</span></h4>
<h4 className="greentext">6 <span className="whitetext">Frameworks</span></h4>
<h4 className="greentext">8 <span className="whitetext">Years of experience</span></h4>
</div>
</div>
  );
}


function Aboutme() {
  return (
<div className="bordergreen">
<h3 className="whitetext">About Me</h3>
</div>

  )
}

function Little() {
return <img src={mouse} alt="mouse" className="center"></img>
}




function Hello() {
  return (
  
    <div className="top">
      <div className="greenh">&lt;p&gt; </div>
      <div className="greentext"><h4>Hello!</h4></div>
      <div className="whitetext">My name is Sinan. I am specialized in web development. I know<span className="greentext"> HTML</span>, 
      <span className="greentext"> CSS</span>, <span className="greentext">JS</span>, and <span className="greentext">React</span> etc.
        </div>
        <div className="whitetext">
          I am a highly interested in web development and eager to learn the latest technologies and approaches.
          I am a flexible person. I can work at any time. I like opportunities, challenges and <span className="greentext">teamwork</span>.
        </div>
        <div className="whitetext">
      I hope my advice will help you, no matter if you work in IT field or if you wish to.
        </div>
        
        <div className="greenh">&lt;p&gt; </div>
    </div>

  )
}


function MyImage() {
  return <img src={mylaptop} width={400} height={220}></img>
}

function Skills() {
  return <h1 className="skills">Skills</h1>
}

function Comment() {
  return <div className="para">Front-end web development</div>
}


function DivWeb() {
  return (
<>
<Div imgSrc={computer} title="Web Development" description="HTML, CSS, JS, React"/>

</>
  );
}

function DivApp() {
  return <Div imgSrc={phoneapp} title="App Development" description="UI/UX"/>
}


function IconHtml() {
  return  (
  <div className="together">
  <IconsDev imgSrc={html} title="HTML" className="red-circle"/> 
 <IconsDev imgSrc={css} title="CSS" className="blue-circle"/>
 <IconsDev imgSrc={js} title="JS" className="yellow-circle" />
 <IconsDev imgSrc={react} title="React" className="lightblue-circle" />
  </div>
);
}

function Developer() {
return (
    <div>
    <Meniu/>
    <Devtitle/>
    <div className="together">
    <Search/>
    <Curriculum />
    <Component />
    <Numbers />
    </div>
    <div className="elem">
    <Little />
    <Aboutme />
    <div className="containerul">
    <Hello />
    <MyImage/>
    </div>
    </div>
    <div>
      <Little/>
      <Skills/>
  <GreenLine />
  <Comment />
  <div className="divs">
  <DivWeb/>
  
  <DivApp/>
  </div>
  <div className="space">
  <IconHtml/>
  </div>
    </div>
    </div>
);
}

export default Developer;





