import { outfit } from "./font"
import TextComponent from "./TextComponent"

const plans = [
    {
        name: "Starter Plan",
        price: "29",
        description: "This package is suitable for teams 1-15 people.",
        features: ["10 GB Dedicated Hosting Free", "Best for Developers, Freelancers", "1 Year Support"],
        buttonVariant: "default",
    },
    {
        name: "Basic Plan",
        price: "79",
        description: "This package is suitable for teams 1-50 people.",
        features: [
            "15 GB Dedicated Hosting Free",
            "Best for Developers, Freelancers",
            "5 Year Support",
            "Free Custom Domain",
            "Basic Statistics",
        ],
        buttonVariant: "gradient",
    },
    {
        name: "Premium Plan",
        price: "129",
        description: "This package is suitable for teams 1-100 people.",
        features: [
            "20 GB Dedicated Hosting Free",
            "Best for Developers, Freelancers",
            "Unlimited Support",
            "Free Custom Domain",
            "Full Statistics",
        ],
        buttonVariant: "default",
    },
]
export default function PricingSection() {


    return (
        <div className="min-h-screen  text-white py-16">
            <div className="max-w-5xl mx-auto">

                <TextComponent text1="Make the wise decision" text2="for your business" desc="Choose from our affordable 3 packages" />

                <div className=" rounded-2xl px-4 md:px-0 p-0 md:p-8">
                    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {plans.map((plan, index) => (
                            <div key={index} className=" hover:scale-105 transition-transform duration-700 cursor-pointer  bg-[#282A37] rounded-lg p-6 backdrop-blur-sm">
                                <h3 className=" text-base mb-4">{plan.name}</h3>
                                <div className="mb-4">
                                    <span className={`text-[40px] font-semibold ${outfit.className}`}>${plan.price}</span>
                                    <span className="text-gray-400">/month</span>
                                </div>
                                <p className="text-sm text-para1 mb-6">{plan.description}</p>

                                <div className="flex min-h-[260px] justify-between flex-col h-auto ">
                                    <div className="mb-6 ">
                                        <h4 className="font-medium  mb-4">What&apos;s included:</h4>
                                        <ul className="space-y-3">
                                            {plan.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="text-sm text-para2">
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button
                                        className={`w-full py-3 px-4 rounded-lg font-medium transition-all
                      ${plan.buttonVariant === "gradient"
                                                ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90"
                                                : "bg-gray-800 hover:bg-gray-700"
                                            }`}
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

