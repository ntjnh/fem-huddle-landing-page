import mockupImg from '../assets/images/illustration-mockups.svg'

export default function Hero() {
    return (
        <section>
            <div className="container mx-auto">
                <h1>Build The Community Your Fans Will Love</h1>

                <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>

                <a href="#">Get Started For Free</a>

                <img className="max-w-[680px]" src={mockupImg} alt="Mockup" />
            </div>
        </section>
    )
}
