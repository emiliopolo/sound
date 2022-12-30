import '../App.css';
import './Footer.css';

const Footer = (props) => {
    return (
        <div className="footer">

            <div className='footer-content'>
                <img className="footer-img" src="header-img/polo.svg"/>
                <div className='text-aligment'><h3 className='footer-text'>ⓒ 2023 All rights reserved</h3></div>
                <a className='btn-footer' href="https://www.linkedin.com/in/emilio-polo-21287313b/" target="_blank">Let's Connect</a>
            </div>   

        </div>
    )
}


export default Footer;