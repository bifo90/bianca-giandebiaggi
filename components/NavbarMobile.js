const NavbarMobile = () => {
    const toggleClick = () => {
        const drop_wrap = document.querySelector('.js-drop-mobile')
        drop_wrap.classList.toggle('active')
    }

    return (
            <nav className="fixed top-0 left-0 w-full z-10 bg-white">
                <div className="px-4 md:px-8">
                    <div className="flex items-center justify-between h-16">
                        <a href="/#">Bianca Giandebiaggi</a>
                        {/* <div className="-mr-2 flex md:hidden">
                            <button className="text-gray-800 hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none" onClick={toggleClick}>
                                <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                    </path>
                                </svg>
                            </button>
                        </div> */}
                    </div>
                </div>
                {/* <div className="js-drop-mobile bg-white">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a className="text-black hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#" rel="noreferrer">
                            Home
                        </a>
                        <a className="text-black dark:text-white block px-3 py-2 rounded-md text-base font-medium" href="#about" rel="noreferrer">
                            About Me
                        </a>
                        <a className="text-black hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="#contact" rel="noreferrer">
                            Contact
                        </a>
                        <a className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium" href="https://www.linkedin.com/in/bianca-giandebiaggi/" target="_blank" rel="noreferrer">
                            <i className="text-2xl fa fa-linkedin-square"></i>
                        </a>                        
                    </div>
                </div> */}
            </nav>
    )
}
export default NavbarMobile