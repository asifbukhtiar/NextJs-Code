import './banner.css'
import banner from '../../assets/banner.jpg'
import Link from "next/link";
import Image from "next/image";

export default function Banner() {
    return(
        <>
            <div className="bannerWrapper">
                <div className="parentBanner">
                    <div className="childBanner1">
                        <div>
                            <h2 className="bannerHead head">Lorem ipsum dolor</h2>
                            <h2 className="bannerHead head">Dolor sit amet, consectetur</h2>
                            <p className="bannerDesc desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam at consectetur, cum debitis saepe sint totam! Accusantium architecto blanditiis</p>
                            <Link href={'/payment'}><button className="bannerBtn">Pay Now</button></Link>
                        </div>
                    </div>
                    <div className="childBanner2">
                        <p className="text-center bannerImgWrapper">
                            <Image className="bannerImg" src={banner} alt="banner"/>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}