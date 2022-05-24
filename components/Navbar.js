import { motion } from "framer-motion"
const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-10 bg-white">
            <div className="px-8">
                <div className="flex items-center h-16">
                    <div className="flex justify-between w-full items-center relative">
                        <p>Bianca Giandebiaggi</p>
                        <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                            <div className="flex items-baseline space-x-4">
                                <motion.a 
                                    className="t-blue px-3 py-2 rounded-md text-sm font-medium" 
                                    whileHover={{scale: 1.1}}
                                    href="#about" 
                                    rel="noreferrer">
                                    About Me
                                </motion.a>
                                {/*<a className="t-indigo px-3 py-2 rounded-md text-sm font-medium" href="#portfolio">Portfolio</a>*/}                                
                                <motion.a 
                                    className="t-violet px-3 py-2 rounded-md text-sm font-medium" 
                                    href="#contact" 
                                    rel="noreferrer">
                                    Contact
                                </motion.a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium" href="https://www.linkedin.com/in/bianca-giandebiaggi/" target="_blank" rel="noreferrer">
                                    <i className="text-2xl fa fa-linkedin-square"></i>
                                </a>
                            </div>
                        </div>                            
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar