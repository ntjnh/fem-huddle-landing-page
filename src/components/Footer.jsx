import logo from '../assets/images/logo-white.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="bg-cyan-975 pt-32 px-4 pb-8 md:pt-30 md:px-10 lg:px-4 lg:pt-48 text-base text-cyan-25">
            <div className="container mx-auto lg:max-w-[1232px]">
                <img className="mb-6 w-[170px]" src={logo} alt="Huddle" />

                <div className="lg:flex">

                    <div className=" lg:w-2/5">
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
                            <a className="block mb-16 md:mb-12 lg:mb-8 pl-5" href="mailto:example@huddle.com">example@huddle.com</a>
                        </div>
                    </div>

                    <ul className="mb-14 lg:mb-0 pl-1 lg:columns-2 lg:w-[30%]">
                        <li><a className="hover:underline inline-block pb-5" href="#">About Us</a></li>
                        <li><a className="hover:underline inline-block pb-5" href="#">What We Do</a></li>
                        <li><a className="hover:underline inline-block pb-5" href="#">FAQ</a></li>
                        <li><a className="hover:underline inline-block pb-5" href="#">Career</a></li>
                        <li><a className="hover:underline inline-block pb-5" href="#">Blog</a></li>
                        <li><a className="hover:underline inline-block" href="#">Contact Us</a></li>
                    </ul>

                    <ul className="mb-6 lg:mb-0 text-center lg:w-[30%]">
                        <li className="inline-block">
                            <a className="border border-white inline-block rounded-full lg:leading-none p-2 lg:text-sm w-[42px] lg:h-8 lg:w-8 hover:border-pink-450 text-white hover:text-pink-450" href="https://facebook.com" target="_blank" rel="noreferrer nofollow">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </li>
                        <li className="inline-block mx-3">
                            <a className="border border-white inline-block rounded-full lg:leading-none p-2 lg:text-sm w-[42px] lg:h-8 lg:w-8 hover:border-pink-450 text-white hover:text-pink-450" href="https://twitter.com" target="_blank" rel="noreferrer nofollow">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li className="inline-block">
                            <a className="border border-white inline-block rounded-full lg:leading-none p-2 lg:text-sm w-[42px] lg:h-8 lg:w-8 hover:border-pink-450 text-white hover:text-pink-450" href="https://instagram.com" target="_blank" rel="noreferrer nofollow">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                    </ul>

                </div>
                
                <p className="text-right text-xs">&copy; Copyright 2018 Huddle. All rights reserved.</p>
            </div>
        </footer>
    )
}
