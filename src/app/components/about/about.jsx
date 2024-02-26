import './about.css'
import about from '../../assets/about.jpg'
import Image from "next/image";
export default function About() {
    return(
        <>
            <div className="aboutWrapper" id="about">
                <div className="parentAbout">
                    <div className="childAbout1">
                        <div>
                            <h2 className="aboutHead head">About US</h2>
                            <h2 className="aboutHead headHead">Dolor sit amet, consectetur</h2>
                            <p className="aboutDesc desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aperiam aspernatur corporis cum dignissimos dolore ducimus error in molestiae nihil nisi officia, optio placeat quibusdam quidem rem sapiente suscipit totam.
                            </p>
                            <p className="aboutDesc desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aperiam aspernatur corporis cum dignissimos dolore ducimus error in molestiae nihil nisi officia, optio placeat quibusdam quidem rem sapiente suscipit totam.
                            </p>
                            <ul className="desc">
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur dignissimos dolorum, error </li>
                                <li>consectetur adipisicing elit. Commodi</li>
                                <li>Commodi consectetur dignissimos dolorum, error </li>
                            </ul>
                            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur eveniet ipsa quibusdam sit. Accusantium, atque cum dolore dolorum eligendi excepturi expedita nostrum odio porro possimus quia veniam voluptates voluptatibus.</p>
                            {/*<button className="aboutBtn">Pay Now</button>*/}
                        </div>
                    </div>
                    <div className="childAbout2">
                        <p className="text-center aboutImgWrapper">
                            <Image className="aboutImg" src={about} alt="about"/>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}