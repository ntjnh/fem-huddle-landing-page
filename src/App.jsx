import Header from './components/Header'
import Hero from './components/Hero'
import CTA from './components/CTA'
import Footer from './components/Footer'
import growImg from './assets/images/illustration-grow-together.svg'
import flowImg from './assets/images/illustration-flowing-conversations.svg'
import yourImg from './assets/images/illustration-your-users.svg'
import './App.css'

function App() {

    return (
        <>
            <Header />

            <main>
                <Hero />

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

                <CTA />

            </main>

            <Footer />
        </>
    )
}

export default App
