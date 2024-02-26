import './header.css'
import Link from "next/link";
export default function Header() {

    return(
        <>
            <div className="headerWrapper" id="home">
                <div className="parentHeader">
                    <div className="childHeader1">
                        <h3 className="text-center headerLogo pointer"><Link className="links" href={'/'}>LOGO</Link></h3>
                    </div>
                    <div className="childHeader2">
                        <p className="navLinks pointer"><Link className="links" href={'/'} >Home</Link></p>
                        <p className="navLinks pointer"><Link className="links" href={'#about'}>About</Link></p>
                        <p className="navLinks pointer"><Link className="links" href={'#faq'}>FAQ</Link></p>
                        <p className="navLinks pointer"><Link className="links" href={'#contact'}>Contact</Link></p>
                    </div>
                    <div className="childHeader3">
                        <Link href={'/payment'}><button className="headerPayBtn">Pay Now</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}