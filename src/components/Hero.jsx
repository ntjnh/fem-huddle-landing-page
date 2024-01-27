import mockupImg from '../assets/images/illustration-mockups.svg'

export default function Hero() {
    return (
        <section className="pt-20 pb-9 md:pt-20 md:pb-16 lg:py-16">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center text-center lg:text-left">
                    <div className="px-5 md:px-0 lg:pl-5 lg:pr-20 lg:w-[46%]">
                        <h1 className="leading-normal mb-6 lg:mb-7 text-2xl md:text-[40px] text-cyan-975">Build The Community <br />Your Fans Will Love</h1>

                        <p className="text-cyan-975 text-base md:mx-auto md:text-lg md:w-3/4 lg:mx-0 lg:w-auto">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>

                        <a className="bg-pink-450 font-bold inline-block mt-8 px-16 py-3 md:py-4 rounded-full text-xs md:text-sm text-white" href="#">Get Started For Free</a>
                    </div>

                    <div className="pt-14 px-6 md:px-0 lg:pt-0 lg:w-[54%]">
                        <img className="max-x-full lg:max-w-[680px]" src={mockupImg} alt="Mockup" />
                    </div>
                </div>
            </div>
        </section>
    )
}
