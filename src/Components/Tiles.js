import '../App.css';
import { useState } from 'react';
import Project from './Project';

 //This is the original stage so we don't show the content. 


const Tiles = (props) => {

    const [content, setContent] = useState(false);
    const showContent = ()=> {
        //Here I change the original state
   
    content? setContent(false) : setContent(true);
    
    if (content==true){
    window.location.reload(false);
    }

    console.log(content)
        
    }


    return (
        <div className="tiles" id={props.id} >

            <div className= {content? "show" : "hide"} id="project">
                <div className="close" onClick={showContent}>&#x2715;</div>
                <div className='project-container'>
                    <Project
                      id={props.id}
                      title={props.title}
                      role={props.role}
                      video={props.video}
                      
                    />
                </div>
            </div>

            <div className="tileContainer" onClick={showContent}>
                <img className="tileImg" src={props.source}/>
                <h2 className="title-text">{props.title}</h2>
                <h3 className='role'>{props.role}</h3>
                <h3 className="genre">{props.genre}</h3>
                <p className="description">{props.description}</p>
                    
            </div>

            

        </div>
    )
}


export default Tiles;