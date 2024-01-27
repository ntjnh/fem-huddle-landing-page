import logo from '../assets/images/logo.svg'
import bgImageDesktop from '../assets/images/bg-hero-desktop.svg'

export default function Header(props) {
    const bgStyles = {
        backgroundImage: `url(${bgImageDesktop})`
    }

    return (
        <header className="bg-cyan-25 pt-5 px-4 md:pt-10 md:px-10 lg:pt-12 lg:px-0" style={bgStyles}>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="w-[49%]">
                        <img className="max-w-[100px] md:max-w-[200px]" src={logo} alt="Huddle logo" />
                    </div>

                    <div className="text-right w-[49%]">
                        <a className="bg-white font-bold inline-block px-6 py-1 md:px-16 md:py-3 rounded-full shadow-[0_7px_10px_-2px_rgba(0,0,0,0.1)] text-[10px] md:text-sm text-cyan-975" href="#">Try It Free</a>
                    </div>
                </div>
            </div>

            {props.children}
        </header>
    )
}
