const Roupas = () => {
    return (
        <main className="container mx-auto flex-1 px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col gap-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        Roupas de Treino
                    </h1>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">Ordenar por:</span>
                        <select className="rounded border-zinc-300 dark:border-zinc-700 bg-transparent py-1 pl-2 pr-8 text-sm font-medium focus:border-primary focus:ring-primary">
                            <option>Relevância</option>
                            <option>Mais vendidos</option>
                            <option>Preço: Menor para Maior</option>
                            <option>Preço: Maior para Menor</option>
                        </select>
                    </div>
                </div>

                <div className="flex gap-8">
                    {/* Sidebar */}
                    <aside className="hidden w-64 flex-col gap-6 lg:flex">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                                Categorias
                            </h3>
                            <div className="flex flex-col gap-1">
                                <a className="rounded px-3 py-1 text-sm font-medium text-primary bg-primary/10" href="#">
                                    Todos
                                </a>
                                {["Leggings", "Tops", "Shorts", "Macacões", "Conjuntos", "Jaquetas"].map((cat) => (
                                    <a
                                        key={cat}
                                        className="rounded px-3 py-1 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-primary/10"
                                        href="#"
                                    >
                                        {cat}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                                Tamanho
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {["P", "M", "G", "GG"].map((size) => (
                                    <button
                                        key={size}
                                        className={`flex h-9 w-9 items-center justify-center rounded border text-sm ${size === "G"
                                            ? "border-primary bg-primary text-white"
                                            : "border-zinc-300 dark:border-zinc-700 hover:border-primary"
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                                Cor
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {["black", "white", "#5a62a7", "pink", "gray"].map((color, i) => (
                                    <button
                                        key={i}
                                        className="h-7 w-7 rounded-full border-2 border-zinc-300 dark:border-zinc-700"
                                        style={{
                                            backgroundColor:
                                                color === "pink"
                                                    ? "rgb(249 168 212)"
                                                    : color === "gray"
                                                        ? "rgb(156 163 175)"
                                                        : color,
                                        }}
                                    ></button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Produtos */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                            {[
                                {
                                    nome: "Legging de Treino Power",
                                    preco: "R$ 129,90",
                                    imagem:
                                        "https://lh3.googleusercontent.com/aida-public/AB6AXuAdoOeY8lm_lOpgGlb1eEpEh7ZiLUKUPMH5HFtBUjp-bo5lu6R1PpR3GqlmedAOW2HmAXYNCLjV6NA4FBMpHn-Hj-CI8r9nIyLms3-NS0YqWp4vLfGIDSDAQrABjDrECC5i9R-KwXuY-BVbd7m1_8T9hP4Qw_laBumllJ3pJxlusIdrz8lat55QRs6h57Gl3WjWD3Ns9WdVSuE-c1KoxoLm-C-xTRpBmTuMJHN-HmrA8rtFZi7kNmbsa40ylDduBYMtJBzIhsoUNbk",

                                },
                                {
                                    nome: "Top de Treino Sculpt",
                                    preco: "R$ 79,90",
                                    imagem:
                                        "https://lh3.googleusercontent.com/aida-public/AB6AXuCgAe5jaTZzq6IsAb_YiKUGE-Hl9rnBxEUgdBiYKyZgkKXYVWH5pRFkCZr4sTq18Sa9DLqmavi_vI9ZbzuXJfxFP5U3rB8rb9fppdZMiMd4IapS3uVI1KDcrz6QcXZjAOvdcTvaawL4Eaomb_nfrNjVOy4-0r8zigReYR6jup1LTyW2DjLxWf5G2jKmx4y2bZXtO7ShZyjh1-y8Tmsl4olaanB-eirMHocEutesW85piTNmsXVcpSGDV35b6RXn2b-OdDDujKil1oY",

                                },
                                {
                                    nome: "Shorts de Treino Flex",
                                    preco: "R$ 59,90",
                                    imagem:
                                        "https://lh3.googleusercontent.com/aida-public/AB6AXuAS54xKc9iknHzoWis2fauZ_3Qy6y3OqMRbFtNvOagITIo7TiAPvX15ohJvRitxgBaTnV88itD91oJ4yI0OQ_judX8rbJnplji93wBbr-m0InD_ocmss2yjDdD9SP37d6gSbZu8O8CbtHJ3ksXxB44Pe9_tWwlWSOrzd5FrElYkSkc7eXM-6EbqPIFeEuoYDsIS-ai0TLZhCRWYHP_CK8_yjjuOJwcw4Ab_OlK6ypeidGCgHhWqe04DbwY-DlrBqOrjMTYIBY5MFjA",

                                },
                                {
                                    nome: "Macacão de Treino Flow",
                                    preco: "R$ 149,90",
                                    imagem:
                                        "https://lh3.googleusercontent.com/aida-public/AB6AXuALp6TmPhvyuod5U5Ed82ER51pbUKQg3fW6fLV0xqeinctOdmXHxOAB_HtbNv5t3fgDKgSlRUCVgo5L5y-YuzyEyVntGXYgcMsa2-IfDQGqz46sHfpBEKIuECy16eP2q0gtGJOP_1kzHZsuf59q6l_nNi9OHmHfW3NhWyU03hD51AEJOvAZWEykXZS0oFGvyspEQEnAFFCNbhePt8_SGwe9hpfzOki1MfT1WqM5bS-qgSnb9GiHA5cs8hoRQg_sxI5HtSaxn09BkJQ"
                                },
                                {
                                    nome: "Conjunto de Treino Active",
                                    preco: "R$ 199,90",
                                    imagem:
                                        "https://lh3.googleusercontent.com/aida-public/AB6AXuAM1GuxC6Z1E2a-6_-kqQshBAakG6MKHEDEMZXPMfIJbOllhEP0fglNii72AvuG5zylQ5BiXFGqwaddyk7AR4zv_tQOMgQ6MF4rpGB9Dd3Z6acVDudPNHt8TcjCg1BH9N1LL8oI_OHsxUGilXnyDVsFIG7iYsx-EsWRWKc7WdEo8pvhiDsApQYYLWq8Z06xQQhAjqpwxkVLam9p5Db7UPiTGs5ebsJGf-i7gfXVpQu538JfTCq6FGlHUC10P4Xzg1EQ66jEHxztc4A"
                                },
                                {
                                    nome: "Jaqueta de Treino Breeze",
                                    preco: "R$ 119,90",
                                    imagem:
                                        "https://lh3.googleusercontent.com/aida-public/AB6AXuCH05QsSrbiIRXV0ccPjDawIW8c_LGjZTPiWFGjGpnYygJFX5MdsTx_2_1ScSYRXyZaYqqZa7V7fT2dPO8QtKnKLLy-pu4ffjTi95XxcoHPMYX2lgBJdCwE9Y44rmyQpIpW_nzjaNOOyBarUCzOmABa8mZW_JVrvRnr9Mvq3I_uZyfSKmupTI5DUKyqQFeixsN7G4yM9I5Dr5H2FlzJLSO5bXCn583QpIeqBfvZKrLGh_6RDYs3vDYYmbQXp8SE57_u_hsjAwpzXyE"
                                }
                            ].map((produto) => (
                                <div key={produto.nome} className="group flex flex-col gap-2">
                                    <div className="relative overflow-hidden rounded-lg ">
                                        <div
                                            className="w-full aspect-[3/4] bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                                            style={{ backgroundImage: `url('${produto.imagem}')` }}
                                        ></div>
                                        <button className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div>
                                        <h4 className="text-base font-medium text-zinc-800 dark:text-zinc-100">
                                            {produto.nome}
                                        </h4>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-400">{produto.preco}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}



