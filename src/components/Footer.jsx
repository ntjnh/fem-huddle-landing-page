import logo from '../assets/images/logo.svg'
import facebook from '../assets/images/facebook.svg'
import instagram from '../assets/images/instagram.svg'
import twitter from '../assets/images/twitter.svg'

export default function Footer() {
    return (
        <footer className="bg-cyan-975 pt-32 px-3 md:pt-0 text-base text-cyan-25">
            <div className="container mx-auto">
                <img className="mb-6" src={logo} alt="Huddle" />

                <address className="mb-6 not-italic max-w-[295px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </address>

                <a className="block mb-6" href="tel:+15431234567">+1-543-123-4567</a>
                <a className="block mb-16" href="mailto:example@huddle.com">example@huddle.com</a>

                <ul className="mb-14">
                    <li><a className="inline-block pb-5" href="#">About Us</a></li>
                    <li><a className="inline-block pb-5" href="#">What We Do</a></li>
                    <li><a className="inline-block pb-5" href="#">FAQ</a></li>
                    <li><a className="inline-block pb-5" href="#">Career</a></li>
                    <li><a className="inline-block pb-5" href="#">Blog</a></li>
                    <li><a className="inline-block" href="#">Contact Us</a></li>
                </ul>

                <ul className="mb-6">
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
                
                <p className="text-center text-xs">&copy; Copyright 2018 Huddle. All rights reserved.</p>
            </div>

            <div className="p-4 text-center text-xs">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer nofollow">Frontend Mentor</a>. 
                Coded by <a href="https://natejonah.com" target="_blank" rel="noreferrer nofollow">NATE</a>.
            </div>
        </footer>
    )
}
