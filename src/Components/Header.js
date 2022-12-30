import '../App.css';
import './Header.css';


const Header = (props) => {
    return (
        <div className="header">
            <div className="left-img"></div>

            <div className='center-header'>
                <div className="header-img"></div>
                <h3 className='header-text'>Sound by Emilio Polo</h3>
                <a className='btn' href="https://www.linkedin.com/in/emilio-polo-21287313b/" target="_blank">Let's Connect</a>

            </div>   
            <div className="right-img"></div>
        </div>
    )
}


export default Header;