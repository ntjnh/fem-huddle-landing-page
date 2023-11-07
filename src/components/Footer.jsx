import logo from './assets/images/logo.svg'
import facebook from './assets/images/facebook.svg'
import instagram from './assets/images/instagram.svg'
import twitter from './assets/images/twitter.svg'

export default function Footer() {
    return (
        <footer>
            <div className="container mx-auto">
                <img src={logo} alt="Huddle" />

                <address>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </address>

                <a href="tel:+15431234567">+1-543-123-4567</a>
                <a href="mailto:example@huddle.com">example@huddle.com</a>

                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">What We Do</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>

                <ul>
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer nofollow">
                            <img className="h-5 w-5" src={facebook} alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer nofollow">
                            <img className="h-5 w-5" src={twitter} alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer nofollow">
                            <img className="h-5 w-5" src={instagram} alt="Instagram" />
                        </a>
                    </li>
                </ul>
                
                <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
            </div>

            <div className="p-4 text-center text-xs">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer nofollow">Frontend Mentor</a>. 
                Coded by <a href="https://natejonah.com" target="_blank" rel="noreferrer nofollow">NATE</a>.
            </div>
        </footer>
    )
}
