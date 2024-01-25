import logo from '../images/home/Image 1.png'
import instagramLogo from '../images/home/Layer 2.svg'


function Footer() {
    return (
        <footer className="flex flex-col mt-20 h-[30vh] bg-[#389CD6]">
            <div>
                <ul className="flex flex-row justify-center mt-10  text-white">
                    <li className="mr-5"><a href="http">Contact Us</a></li>
                    <li className="mr-5"><a href="http">FAQ </a></li>
                    <li className="mr-5"><a href="http">Site Map </a></li>
                    <li className="mr-5"><a href="http">Privacy Policy </a></li>
                    <li className="mr-5"><a href="http">Cookies Policy </a></li>
                    <li className="mr-5"><a href="http">Legal Notice</a></li>
                </ul>
            </div>
            <div className="flex flex-row justify-around items-center">
                <img className='h-7' alt="logo" src={logo} />
                <img alt="logo" src={instagramLogo} />
            </div>
        </footer>
    );
}

export default Footer;
