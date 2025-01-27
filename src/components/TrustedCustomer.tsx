import Image from "next/image"


import img3 from '@/assets/Card 1.png'
import img4 from '@/assets/Frame 1136abcf.png'
import { outfit } from "./font"
import logo1 from '@/assets/logos/1.png'
import logo2 from '@/assets/logos/2.png'
import logo3 from '@/assets/logos/3.png'
import logo4 from '@/assets/logos/4.png'
import logo5 from '@/assets/logos/5.png'
import logo6 from '@/assets/logos/6.png'
import logo7 from '@/assets/logos/7.png'
import logo8 from '@/assets/logos/8.png'
import Button from "./Button"
const logos = [
    { name: "Waverio", src: logo1 },
    { name: "SquareStone", src: logo2 },
    { name: "Martino", src: logo3 },
    { name: "Virogan", src: logo4 },
    { name: "Vertex", src: logo5 },
    { name: "Aromix", src: logo6 },
    { name: "Fireli", src: logo7 },
    { name: "Natrom", src: logo8 },
]
export default function TrustedCustomer() {


    return (
        <div className=" text-white">
            {/* Trusted Banner */}
            <div className="text-center py-4">
                <p className={`text-2xl text-para2 ${outfit.className}`}>Trusted by nearly 5000+ paying customers</p>
            </div>

            {/* Logo Section */}
            <div className="max-w-5xl mx-auto px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
                    {logos.map((logo) => (
                        <div key={logo.name} className="flex justify-center">
                            <Image
                                src={logo.src || "/placeholder.svg"}
                                alt={logo.name}
                                width={120}
                                height={40}
                                className="h-8 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* First Content Section */}
            <div className="max-w-6xl flex flex-col lg:flex-row-reverse  mx-auto px-4 py-6  gap-12 items-center ">
                <div className="relative flex-1   order-2 md:order-1">

                    <Image src={img3} width={600} className=" h-[500px] w-full" alt="logo" />
                    <Image src={img4} className="absolute top-1/2 -translate-y-1/2 -right-32" alt="logo" />
                </div>
                <div className="flex-1">
                    <h2 className={`text-3xl w-5/6 md:text-4xl font-medium mb-6 ${outfit.className}`}>
                        Create content efficiently and quickly with great AI writing tools
                    </h2>
                    <p className="text-gray-400 mb-8">
                        An AI Writer is the most accurate content generation, rewriting and writing tool that helps you transform
                        your text into a completely personalized.
                    </p>
                    {/* <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90 transition-opacity">
                        Start 14 Days Free Trial
                    </button> */}
                    <Button text="Start 14 Days Free Trial" />
                </div>
            </div>

            {/* Second Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className={`text-3xl w-3/4 md:text-4xl font-medium mb-6 ${outfit.className}`}>
                        Write what you want to convey through clear, & authentic writing
                    </h2>
                    <p className="text-gray-400 mb-8">
                        An AI Writer is the most accurate content generation, rewriting and writing tool that helps you transform
                        your text into a completely personalized.
                    </p>
                    <Button text="Start 14 Days Free Trial" />
                </div>
                <div className="bg-white rounded-lg shadow-xl p-6">
                    <div className="space-y-4">
                        <div className="h-24  bg-gray-100 rounded w-3/4" />
                        <div className="h-24 bg-gray-100 rounded w-1/2" />
                        <div className="h-32 bg-gray-100 rounded w-full" />
                    </div>
                    {/* <Image src={img1} alt="Logo" /> */}
                </div>
            </div>
        </div>
    )
}

