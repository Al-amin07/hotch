import { Twitter } from "lucide-react"
import TextComponent from "./TextComponent"
import img1 from '@/assets/Ellipse 14.png'
import img2 from '@/assets/Ellipse 14 (1).png'
import img3 from '@/assets/Ellipse 14 (2).png'
import img4 from '@/assets/Ellipse 14 (3).png'
import Image, { StaticImageData } from 'next/image'

interface Testimonial {
    name: string
    handle: string
    avatar: StaticImageData
    content: string
    hashtags?: string[]
}

const testimonials: Testimonial[] = [
    {
        name: "Darrell Steward",
        handle: "@jennywilson",
        avatar: img1,
        content:
            "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
        hashtags: ["#noOther"],
    },
    {
        name: "Leslie Alexander",
        handle: "@leslie",
        avatar: img2,
        content: "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users.",
        hashtags: ["#postcrafts"],
    },
    {
        name: "Jenny Wilson",
        handle: "@jennywilson",
        avatar: img3,
        content: "This is a top quality product. No need to think twice before making it live on web.",
        hashtags: ["#make_it_fast"],
    },
    {
        name: "Kristin Watson",
        handle: "@kristinwatson",
        avatar: img4,
        content:
            "Finally, I've found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.",
        hashtags: ["#postcrafts"],
    },
    {
        name: "Guy Hawkins",
        handle: "@jennywilson",
        avatar: img1,
        content: "This is a top quality product. No need to think twice before making it live on web.",
        hashtags: ["#make_it_fast"],
    },
    {
        name: "Marvin McKinney",
        handle: "@jennywilson",
        avatar: img2,
        content:
            "With Postcrafts, it's quicker with the customer, the customer is more ensured of getting exactly what they ordered, and I'm all for the efficiency.",
        hashtags: ["#dev", "#tools"],
    },
    {
        name: "Annette Black",
        handle: "@jennywilson",
        avatar: img3,
        content:
            "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
        hashtags: ["#noOther"],
    },
    {
        name: "Floyd Miles",
        handle: "@jennywilson",
        avatar: img4,
        content:
            "My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
        hashtags: ["#postcrafts"],
    },
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <div className="bg-white w-auto rounded-xl p-6">
            <div className="flex justify-between items-start">
                <div className="flex gap-3">
                    <Image
                        src={testimonial?.avatar}
                        alt={testimonial?.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <div className="font-medium text-gray-900">{testimonial.name}</div>
                        <div className="text-gray-500 text-sm">{testimonial.handle}</div>
                    </div>
                </div>
                <Twitter className="w-5 h-5 text-blue-400" />
            </div>
            <p className="mt-4 text-gray-900">{testimonial.content}</p>
            {testimonial.hashtags && (
                <div className="mt-3 flex flex-wrap gap-2">
                    {testimonial.hashtags.map((hashtag) => (
                        <span key={hashtag} className="text-[#0EA5E9] text-sm">
                            {hashtag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}

export default function Testimonials() {
    return (
        <div className=" py-16">
            <div className="max-w-7xl mx-auto px-4">

                <TextComponent text1="What our customers say" desc="Read why thousands of marketers, writers, and entrepreneurs love us so much." />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>

            </div>
        </div>
    )
}

