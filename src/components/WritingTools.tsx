import { FileText, PenLine, LayoutTemplate, CheckSquare, FileEdit, Building2 } from "lucide-react"
import TextComponent from "./TextComponent"

const tools = [
    {
        icon: FileText,
        title: "Blog Headlines",
        description: "Write a better blog title with our AI tool.",
    },
    {
        icon: PenLine,
        title: "Blog Intros",
        description: "Generate a paragraph of blog content using Blog Intros tool",
    },
    {
        icon: LayoutTemplate,
        title: "Blog Outline",
        description: "Need an attention-grabbing headline for your article?",
    },
    {
        icon: CheckSquare,
        title: "Blog Conclusions",
        description: "Write a better conclusions with AI writing tool.",
    },
    {
        icon: FileEdit,
        title: "Content Rewriter",
        description: "Get AI writer to rewrite your sentence in a different way.",
    },
    {
        icon: Building2,
        title: "Company About Us",
        description: "Write a better blog title with our AI tool.",
    },
    {
        icon: PenLine,
        title: "Blog Intros",
        description: "Generate a paragraph of blog content using Blog Intros tool",
    },
    {
        icon: LayoutTemplate,
        title: "Blog Outline",
        description: "Need an attention-grabbing headline for your article?",
    },
]

export default function WritingTools() {


    return (
        <div className=" text-white py-16">
            <div className="max-w-6xl mx-auto ">

                <TextComponent text1="54 exciting writing tools" desc="AI engines take information from various sources and read them like a human would do." />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {tools.map((tool, index) => (
                        <div key={index} className="bg-[#282A37] cursor-pointer rounded-xl p-5 hover:bg-gray-500/50 transition-colors">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-white rounded-lg">
                                    <tool.icon className="w-6 h-6  text-black bg-transparent" />
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">{tool.title}</h3>
                                    <p className="text-sm text-gray-400">{tool.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <button className="text-gray-400 hover:text-white transition-colors">See all 54 available tools</button>
                </div>
            </div>
        </div>
    )
}

