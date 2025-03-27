import './App.css';

function Div({imgSrc, title, description}) {
    return (
<div className="greendiv">
<img src={imgSrc} className="imagediv" alt="Icon"/>
<h5 className="black"> {title} <span>{description}</span></h5>
</div>
    )

}

export default Div;