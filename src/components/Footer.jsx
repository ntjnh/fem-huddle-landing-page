import logo from '../assets/images/logo-white.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import facebook from '../assets/images/facebook.svg'
import instagram from '../assets/images/instagram.svg'
import twitter from '../assets/images/twitter.svg'

export default function Footer() {
    return (
        <footer className="bg-cyan-975 pt-32 px-4 md:pt-0 text-base text-cyan-25">
            <div className="container mx-auto">
                <img className="mb-6 w-[170px]" src={logo} alt="Huddle" />

                <div className="flex mb-6 pl-1">
                    <FontAwesomeIcon className="pt-1.5" icon={faLocationDot} />
                    <address className="max-w-[320px] not-italic pl-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </address>
                </div>

                <div className="flex mb-6 pl-1">
                    <FontAwesomeIcon className="pt-1.5" icon={faPhoneVolume} />
                    <a className="block pl-5" href="tel:+15431234567">+1-543-123-4567</a>
                </div>

                <div className="flex pl-1">
                    <FontAwesomeIcon className="pt-1.5" icon={faEnvelope} />
                    <a className="block mb-16 pl-5" href="mailto:example@huddle.com">example@huddle.com</a>
                </div>

                <ul className="mb-14 pl-1">
                    <li><a className="inline-block pb-5" href="#">About Us</a></li>
                    <li><a className="inline-block pb-5" href="#">What We Do</a></li>
                    <li><a className="inline-block pb-5" href="#">FAQ</a></li>
                    <li><a className="inline-block pb-5" href="#">Career</a></li>
                    <li><a className="inline-block pb-5" href="#">Blog</a></li>
                    <li><a className="inline-block" href="#">Contact Us</a></li>
                </ul>

                <ul className="mb-6 text-center">
                    <li className="border border-white inline-block rounded-full p-2">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer nofollow">
                            <img className="h-4 invert w-4" src={facebook} alt="Facebook" />
                        </a>
                    </li>
                    <li className="border border-white inline-block rounded-full p-2 mx-3">
                        <a href="https://twitter.com" target="_blank" rel="noreferrer nofollow">
                            <img className="h-4 invert w-4" src={twitter} alt="Twitter" />
                        </a>
                    </li>
                    <li className="border border-white inline-block rounded-full p-2">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer nofollow">
                            <img className="h-4 invert w-4" src={instagram} alt="Instagram" />
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
