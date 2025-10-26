
const Header = () => {
    return (
        <header
            class="sticky top-0 z-10 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-primary/20">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                    <div class="flex items-center gap-6">
                        <NavLink to="/"><img className="logo" src='Logo\path1.svg' ></img></NavLink>
                        <nav class="hidden md:flex items-center gap-6">
                            <NavLink to="/News" class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                                href="#">Novidades</NavLink>
                            <NavLink to="/Roupas" class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                                href="#">Roupas</NavLink>
                            <NavLink to="/" class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                                href="#">Acessórios</NavLink>
                        </nav>
                    </div>
                    <div class="flex items-center gap-4">
                        <button
                            class="hidden md:flex items-center justify-center rounded-lg h-10 px-4 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-bold transition-colors">
                            Entrar
                        </button>
                        <button
                            class="flex items-center justify-center rounded-lg h-10 w-10 bg-transparent hover:bg-primary/10 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                            <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z">
                                </path>
                            </svg>
                        </button>
                        <button
                            class="flex items-center justify-center rounded-lg h-10 w-10 bg-transparent hover:bg-primary/10 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                            <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}