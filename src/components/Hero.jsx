import mockupImg from '../assets/images/illustration-mockups.svg'

export default function Hero() {
    return (
        <section className="py-20 md:py-16">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center text-center md:text-left">
                    <div className="px-5 md:pr-20 md:w-[46%]">
                        <h1 className="leading-normal mb-6 md:mb-7 text-2xl md:text-[40px] text-cyan-975">Build The Community <br />Your Fans Will Love</h1>

                        <p className="text-cyan-975 text-base md:text-lg">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>

                        <a className="bg-pink-450 font-bold inline-block mt-8 px-16 py-3 md:py-4 rounded-full text-xs md:text-sm text-white" href="#">Get Started For Free</a>
                    </div>

                    <div className="pt-14 px-6 md:pt-0 md:px-0 md:w-[54%]">
                        <img className="max-x-full md:max-w-[680px]" src={mockupImg} alt="Mockup" />
                    </div>
                </div>
            </div>
        </section>
    )
}
