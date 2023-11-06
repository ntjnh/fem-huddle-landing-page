import logo from './assets/images/logo.svg'
import mockupImg from './assets/images/illustration-mockups.svg'
import facebook from './assets/images/facebook.svg'
import instagram from './assets/images/instagram.svg'
import twitter from './assets/images/twitter.svg'
import growImg from './assets/images/illustration-grow-together.svg'
import flowImg from './assets/images/illustration-flowing-conversations.svg'
import yourImg from './assets/images/illustration-your-users.svg'
import './App.css'

function App() {

    return (
        <>
            <header>
                <div className="container mx-auto">
                    <img src={logo} alt="Huddle logo" />
                    <a href="#">Try It Free</a>
                </div>
            </header>

            <main>
                <section>
                    <div className="container mx-auto">
                        <h1>Build The Community Your Fans Will Love</h1>

                        <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>

                        <a href="#">Get Started For Free</a>

                        <img className="max-w-[680px]" src={mockupImg} alt="Mockup" />
                    </div>
                </section>

                <section>
                    <div className="container mx-auto">
                        <article>
                            <h2>Grow Together</h2>
                            <p>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
                            <img className="max-w-[410px]" src={growImg} alt="" />
                        </article>

                        <article>
                            <h2>Flowing Conversations</h2>
                            <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
                            <img className="max-w-[410px]" src={flowImg} alt="" />
                        </article>

                        <article>
                            <h2>Your Users</h2>
                            <p>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
                            <img className="max-w-[410px]" src={yourImg} alt="" />
                        </article>
                    </div>
                </section>

                <section>
                    <div className="container mx-auto">
                        <h3>Ready To Build Your Community?</h3>
                        <a href="#">Get Started For Free</a>
                    </div>
                </section>

            </main>

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
        </>
    )
}

export default App
