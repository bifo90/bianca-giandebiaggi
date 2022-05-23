const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-10 bg-white">
            <div className="px-8">
                <div className="flex items-center h-16">
                    <div className="flex justify-between w-full items-center">
                        <p>Bianca Giandebiaggi</p>
                        <div className="hidden md:block">
                            <div className="flex items-baseline space-x-4">
                                <a className="t-blue hover:text-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#about" rel="noreferrer">About Me</a>
                                {/*<a className="t-indigo hover:text-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#portfolio">Portfolio</a>*/}                                
                                <a className="t-violet hover:text-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#contact" rel="noreferrer">Contact</a>
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