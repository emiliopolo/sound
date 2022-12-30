import '../App.css';

const Project = (props) => {
    
    return (
      <div className="project" id={props.id}>

        <h2 className="title-text">{props.title}</h2>
        <h3 className='role'>{props.role}</h3>
        <iframe className="video" src={props.video} title="YouTube video player" frameborder="0" allow="accelerometer; encrypted-media; gyroscope" allowfullscreen></iframe>
      </div>
    );
  }
  
  export default Project;



