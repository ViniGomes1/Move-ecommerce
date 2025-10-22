const Footer = () => {
    return (
        <footer className="bg-background-light dark:bg-background-dark border-t border-primary/20 mt-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Loja */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-gray-900 dark:text-white">Loja</h3>
                        {["Novidades", "Roupas", "Acessórios", "Sale"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Ajuda */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-gray-900 dark:text-white">Ajuda</h3>
                        {["Contato", "FAQ", "Envios e Devoluções"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Empresa */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-gray-900 dark:text-white">Empresa</h3>
                        {["Sobre Nós", "Carreiras", "Imprensa"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Siga-nos */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-gray-900 dark:text-white">Siga-nos</h3>
                        <div className="flex gap-4">
                            {/* Twitter */}
                            <a
                                href="#"
                                className="text-gray-700 dark:text-gray-300 hover:text-primary"
                            >
                                <i class="bi bi-twitter-x"></i>
                            </a>

                            {/* Instagram */}
                            <a
                                href="#"
                                className="text-gray-700 dark:text-gray-300 hover:text-primary"
                            >
                                <i class="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-primary/20 text-center text-sm text-gray-700 dark:text-gray-300">
                    <p>© 2024 Move. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}