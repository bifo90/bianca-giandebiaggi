const Section = (props) => {
    return (
        <div className="pt-12 pb-32 md:pb-48 bg-white" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl t-blue">About Me</h2>
                    <p className="mt-4 max-w-2xl text-md text-gray-500 lg:mx-auto">
                    Appassionata di comunicazione visiva, di marketing e del mondo digitale, mi occupo di promozione pubblicitaria sui social network, consulenza commerciale e linguistica in diversi settori. Sono docente freelance, traduttrice ed interprete per le lingue Inglese e Francese.
                    Alla base del mio lavoro c&apos;è la passione per le lingue, che ho sviluppato a livello professionale principalmente per il settore alimentare e vinicolo, oltre che commerciale e letterario.
                    Ho acquisito inoltre competenze contabili ed organizzative, sviluppate all&apos;interno della società in cui lavoro.
                    </p>
                </div>
        
                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {props.data.map(feature => (
                            <div key={feature} className="relative">
                                <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                                    
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.titolo}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.body}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
export default Section;