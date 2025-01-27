export default function Footer() {
    const footerSections = {
        Company: ["About", "Features", "Works", "Career"],
        Help: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
        Resources: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"],
        Links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"],
    }

    return (
        <footer className=" text-white mb-24 px-8 ">


            {/* <div className="flex justify-around flex-wrap gap-8"> */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                {Object.entries(footerSections).map(([title, items]) => (
                    <div key={title}>
                        <h3 className="font-semibold  mb-4">{title}</h3>
                        <ul className="space-y-3">
                            {items.map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            {/* <div className="max-w-7xl mx-auto px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {Object.entries(footerSections).map(([title, items]) => (
                        <div key={title}>
                            <h3 className="font-semibold mb-4">{title}</h3>
                            <ul className="space-y-3">
                                {items.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div> */}
        </footer>
    )
}

