const Portfolio = (props) => {
    return (
        <div className="py-12 bg-white" id="portfolio">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl t-indigo">Portfolio</h2>
                </div>
        
                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {props.data.map((feature,i) => (
                            <div className="w-full shadow rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center" key={i}>
                                <div className="text-center">
                                    <p className="text-xl text-black font-bold mb-2">{feature.title}</p>
                                    <p className="text-base text-gray-400 font-normal mb-4">{feature.text}</p>
                                    <p className="text-sm text-gray-400 font-normal">{feature.date1} - {feature.date2}</p>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;