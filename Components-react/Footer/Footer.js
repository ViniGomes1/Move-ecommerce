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
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.28C8.28,9.09 5.11,7.38 2.9,4.79C2.53,5.42 2.33,6.16 2.33,6.94C2.33,8.43 3.07,9.75 4.18,10.53C3.47,10.51 2.82,10.31 2.22,10.03C2.22,10.05 2.22,10.07 2.22,10.08C2.22,12.24 3.74,14.04 5.77,14.46C5.42,14.56 5.05,14.61 4.66,14.61C4.37,14.61 4.08,14.58 3.82,14.53C4.38,16.31 6.08,17.56 8.12,17.6C6.62,18.73 4.72,19.44 2.65,19.44C2.32,19.44 2,19.42 1.68,19.38C3.72,20.72 6.1,21.5 8.75,21.5C16,21.5 20.33,15.54 20.33,10.29C20.33,10.12 20.33,9.95 20.32,9.78C21.11,9.21 21.85,8.51 22.46,7.69V6Z"></path>
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="#"
                                className="text-gray-700 dark:text-gray-300 hover:text-primary"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12,2.163c3.204,0,3.584,0.012,4.85,0.07c1.269,0.058,2.163,0.248,2.923,0.548c0.823,0.326,1.493,0.732,2.18,1.419c0.686,0.687,1.093,1.357,1.419,2.18c0.299,0.76,0.489,1.654,0.548,2.923c0.058,1.266,0.07,1.646,0.07,4.85s-0.012,3.584-0.07,4.85c-0.058,1.269-0.248,2.163-0.548,2.923c-0.326,0.823-0.732,1.493-1.419,2.18c-0.687,0.686-1.357,1.093-2.18,1.419c-0.76,0.299-1.654,0.489-2.923,0.548c-1.266,0.058-1.646,0.07-4.85,0.07s-3.584-0.012-4.85-0.07c-1.269-0.058-2.163-0.248-2.923-0.548c-0.823-0.326-1.493-0.732-2.18-1.419C1.94,18.053,1.534,17.383,1.208,16.56c-0.299-0.76-0.489-1.654-0.548-2.923C0.602,12.37,0.59,11.99,0.59,8.73s0.012-3.584,0.07-4.85c0.058-1.269,0.248-2.163,0.548-2.923c0.326-0.823,0.732-1.493,1.419-2.18C3.313,1.94,3.984,1.534,4.808,1.208C5.568,0.91,6.463,0.72,7.732,0.662C8.998,0.602,9.378,0.59,12,0.59M12,6.883c-2.828,0-5.117,2.289-5.117,5.117s2.289,5.117,5.117,5.117s5.117-2.289,5.117-5.117S14.828,6.883,12,6.883zM12,15.117c-1.721,0-3.117-1.396-3.117-3.117s1.396-3.117,3.117-3.117s3.117,1.396,3.117,3.117S13.721,15.117,12,15.117zM17.604,5.396c-0.771,0-1.396,0.625-1.396,1.396s0.625,1.396,1.396,1.396s1.396-0.625,1.396-1.396S18.375,5.396,17.604,5.396z"></path>
                                </svg>
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