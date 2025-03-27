// import './App.css';
// function IconsDev({img, title, icon}) {
//     return (
//         <div>
//             <img src={img} title={title} icon={icon} className="icons"/>
//         </div>
//     )
// }

// export default IconsDev;


// function IconsDev({ imgSrc, title, className }) {
//     return (
//       <div>
//         <img src={imgSrc} alt={title} className={className} />
//         <h5 className="circle-text">{title}</h5>
//       </div>
//     );
//   }
  
//   export default IconsDev;



function IconsDev({ imgSrc, title, className }) {
   // Atribuie o culoare în funcție de titlu
    const colorTitle = title.toLowerCase();
    const titleColor = colorTitle === "html" ? "red" :
     colorTitle === "css" ? "blue" : 
     colorTitle === "js" ? "yellow" 
    : colorTitle === "react" ? "lightblue": "";
  
    return (
     <div>
      <div className={className}>
        <img src={imgSrc} alt={title} className="circle-img" />
      </div>
      <h5 className="circle-text" style={{ color: titleColor }}>
      {title}
    </h5>
    </div>
    );
  }
  
  export default IconsDev;