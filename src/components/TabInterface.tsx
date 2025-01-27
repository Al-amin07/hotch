"use client"

import { useState } from "react"
import TextComponent from "./TextComponent"

interface TabContent {
    title: string
    content: string[]
}
const tabs = [
    { id: "headlines", label: "Blog Headlines", gradient: true },
    { id: "intros", label: "Blog Intros", gradient: true },
    { id: "rewriter", label: "Content Rewriter", gradient: true },
    { id: "facebook", label: "Facebook Ads", gradient: true },
    { id: "product", label: "Product Description", gradient: true },
    { id: "pas", label: "PAS Copywriting Formula", gradient: true },
]

export default function TabInterface() {
    const [activeTab, setActiveTab] = useState("headlines")


    const tabContent: Record<string, TabContent> = {
        headlines: {
            title: "4 Blog Headlines Generated",
            content: [
                "Create original content that ranks for SEO",
                "Any mechanical keyboard enthusiasts in design?",
                "The More Important the Work, the More Important the Rest",
                "How to design a product that can grow itself 10x in year",
                "Any mechanical keyboard enthusiasts in design?",
            ],
        },
        intros: {
            title: "3 Blog Intros Generated",
            content: [
                "Start your journey with a compelling introduction",
                "Hook your readers from the first sentence",
                "Make a lasting impression with your opening",
            ],
        },
        rewriter: {
            title: "Content Rewriter Results",
            content: [
                "Transform your existing content",
                "Refresh your message while keeping its essence",
                "Generate unique variations of your text",
            ],
        },
        facebook: {
            title: "Facebook Ad Copy",
            content: [
                "Engage your audience with compelling ads",
                "Drive conversions with powerful copy",
                "Reach your target market effectively",
            ],
        },
        product: {
            title: "Product Descriptions",
            content: [
                "Highlight your product's best features",
                "Convert browsers into buyers",
                "Showcase your unique value proposition",
            ],
        },
        pas: {
            title: "PAS Framework Results",
            content: [
                "Problem: Identify the pain point",
                "Agitation: Emphasize the consequences",
                "Solution: Present your offering",
            ],
        },
    }

    return (
        <div className=" text-white py-16">
            <div className="max-w-5xl mx-auto px-4">

                <TextComponent text1="Mixland helps you" text2="build beautiful website" />

                <div className="  overflow-hidden">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-[300px,1fr]">
                        {/* Tabs Navigation */}
                        <div className=" ">
                            <div role="tablist" aria-orientation="vertical" className="flex flex-col gap-2.5 ">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        role="tab"
                                        aria-selected={activeTab === tab.id}
                                        aria-controls={`panel-${tab.id}`}
                                        id={`tab-${tab.id}`}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`
                      flex items-center rounded-xl px-5 py-3 text-left focus:outline-none focus:bg-gray-800/30
                       border border-[#282A37] transition-colors
                      ${activeTab === tab.id

                                            && " bg-gradient-to-r from-blue-600 border-0 to-purple-600"} `}
                                    //   ${activeTab === tab.id
                                    //                             ? tab.gradient
                                    //                                 ? " bg-gradient-to-r from-blue-600 to-purple-600"
                                    //                                 : " bg-gray-800/50"
                                    //                             : "hover:bg-gray-800/20"
                                    //                         }
                                    // `}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="bg-[#282A37] p-6 rounded-xl">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <p className="text-sm text-gray-400">{tabContent[activeTab]?.title}</p>
                            </div>

                            <div role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`} className="space-y-4">
                                {tabContent[activeTab]?.content.map((item, index) => (
                                    <p key={index} className="text-gray-200">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

