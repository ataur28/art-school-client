
import logo from '../../../assets/logo.png'
import facebook from '../../../assets/footerIcon/facebookIcon.png'
import instagram from '../../../assets/footerIcon/instaramIcon.jpg'
import twitter from '../../../assets/footerIcon/twitterIcon.jpg'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
            <h1 className="text-4xl"><span className="text-red-500" >Art</span>School</h1>
                <p>Chirkut Industries Ltd.<br />Providing reliable tech since 1992</p>
                <div className="card-actions">
                    <img className='h-7 w-7' src={facebook} alt="" />
                    <img className='h-7 w-7' src={instagram} alt="" />
                    <img className='h-7 w-7' src={twitter} alt="" />
                </div>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            
        </footer>
    );
};

export default Footer;