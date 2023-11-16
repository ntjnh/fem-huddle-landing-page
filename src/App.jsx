import Header from './components/Header'
import Hero from './components/Hero'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Features from './components/Features'

function App() {

    return (
        <>
            <Header>
                <Hero />
            </Header>

            <main>

                <Features />

                <CTA />

            </main>

            <Footer />
        </>
    )
}

export default App
