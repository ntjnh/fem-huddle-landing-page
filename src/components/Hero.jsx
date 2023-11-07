import mockupImg from '../assets/images/illustration-mockups.svg'

export default function Hero() {
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex items-center">
                    <div className="pr-20 w-[46%]">
                        <h1 className="leading-normal text-4xl text-cyan-975">Build The Community <br />Your Fans Will Love</h1>

                        <p className="text-cyan-975">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>

                        <a className="bg-pink-450 font-normal inline-block mt-8 px-16 py-4 rounded-full text-sm text-white" href="#">Get Started For Free</a>
                    </div>

                    <div className="w-[54%]">
                        <img className="max-w-[680px]" src={mockupImg} alt="Mockup" />
                    </div>
                </div>
            </div>
        </section>
    )
}
