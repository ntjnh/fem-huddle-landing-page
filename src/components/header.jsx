import logo from '../assets/images/logo.svg'

export default function Header() {
    return (
        <header>
            <div className="container mx-auto">
                <img src={logo} alt="Huddle logo" />
                <a href="#">Try It Free</a>
            </div>
        </header>
    )
}
