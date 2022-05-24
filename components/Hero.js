import { motion } from "framer-motion"
const Header = () => {
    const initial = {y: 30, opacity: 0}
    const final = {y: 0, opacity: 1}
    const delay = {delay: 0.2}
    const delay_2 = {delay: 0.3}
    const delay_3 = {delay: 0.5}
    return (
        <div className="w-full h-screen relative bg-white overflow-hidden flex flex-wrap items-center">
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                <div className="text-left">
                    <h1 className="mb-5 tracking-tight bold text-gray-900 text-5xl sm:text-7xl lg:text-9xl">
                        <motion.span 
                            className="block t-blue"
                            initial={initial}
                            animate={final}>
                            Lingue
                        </motion.span>    
                        <motion.span 
                            className="block t-blue"
                            initial={initial}
                            animate={final}
                            transition={delay}>
                            Digital Marketing
                        </motion.span>
                        <motion.span 
                            className="block t-violet"
                            initial={initial}
                            animate={final}
                            transition={delay_2}>
                            Social Media Management
                        </motion.span>                                                                
                    </h1>
                    <motion.div 
                        initial={initial}
                        animate={final}
                        transition={delay_3}
                        >
                        <p className="text-base text-gray-500 sm:text-lg md:text-xl">
                            Definire la Strategia Aziendale. Formare e organizzare le risorse per il Digitale. Corsi di Lingua.</p>
                        <p className="text-base text-gray-500 sm:text-lg md:text-xl lg:mx-0">
                            Se sei un&apos;azienda, un professionista o uno studente, contattami per un confronto senza impegno.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default Header;