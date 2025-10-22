const Main = () => {
    return (
        <main className="flex-grow">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Seção: Coleção de Verão */}
                <section className="mb-12">
                    <div
                        className="relative min-h-[480px] flex items-center justify-center text-center p-8 rounded-xl overflow-hidden bg-cover bg-center"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCDiNC3BJwH_8T4ipJ6O9nIX3gQ818MzDXZiuBzsY3dFAeuCA23TQCmpTQrhjgO62Njm8WTH0-a7W6u64XGiudSVYrBs9De_oqbkGkBmZX35TNwQbiVNjxoD266UXeKudZJYjp5j-SM_B8g_IIZWC_GGIgvDYTf6m6aaHINhBoVFYGLf1SX4bplID-N_gDNl2HE4Q5TWnpz7ig6mMdkVtT1SIvPuNehyWk2Y_dtI-PNej40_XXV4VDNjRZPGef1PHvM3vQ5TY7GtE4")',
                        }}
                    >
                        <div className="flex flex-col items-center gap-6">
                            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter">
                                Coleção de Verão
                            </h1>
                            <p className="max-w-md text-base md:text-lg text-white/90">
                                Descubra as últimas tendências em roupas de treino para mulheres.
                            </p>
                            <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
                                Comprar Agora
                            </button>
                        </div>
                    </div>
                </section>

                {/* Seção: Novidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Novidades
                    </h2>
                    <div
                        className="flex overflow-x-auto -mx-4 px-4 pb-4 gap-6"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {[
                            {
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGRlTTI4vivH4Lr5SDabV8r14Gz8EVYeY3udi0O5UjXp0mHBqMIza1YFtsOJV3fMwSB5pNcfPs431imYlJfIJ7egTXMSYvhpvOq8pHLnzAJBTffv8eDdSeq01dyMdXIJEiF4zG0FUpD9XfjZqfC1vBVJKylS8C3mr_61WsAjfA7g3Y3IvWcxr55fDeCGzsdMbbgNXX6aix7Y_J3Y4uEHqV1e58qXAkFFq_bgS9M3spKoAHFgHLtZdhI9UZ7dvURQHVresYwXKdIAQ',
                                title: 'Conjunto de treino azul',
                                price: 'R$ 150',
                            },
                            {
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjzRsrugaYxtMrhxPYGZq00n83y4duIp8m0b-k4j9F6XLT0c_c3KY40goAjilUh-JDDRx-8TCiTUKPai670z2SuX9DwzEMub_thpsmuhVIXaTQuM8gIlMAf_Vot1RZDlcNMJ5kpyo6Tb4e-SGMjj5z8RyupFrpWnUqRRshfi7P1oAhnF4Q8YHeyY4yWThKvJYdkHZ_ImTNphAiMPojSr8pf6GFt7ZMTGQfx6xVriajIXKzZzJdKsDsREVvEpuLQRru9zfsLN2eIZc',
                                title: 'Legging estampada',
                                price: 'R$ 80',
                            },
                            {
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChs-N4-vZzyp2P0OIa4b1BuPosKdGf_ZoD9d2Xjn-YYVDFQIL0yUmmLRdfFUKcAp8cxcS-wG-7HqeYQpcnILgRV6-jbdYJNl654bFmhryVtvSYZXt_nVxr81uW4l-V5RhPqHIgykUhjm-UUd15_IzjutaRRPhR0_gAE4DQu0nOQUOuTp9sCeHUhgWYBDOfQvGWuBLmghBgeTQ370s1C_hWxnJc9cMcjuRfUO0iFL-YtdGYjjo9c5_RU9LxCX9o_-oOgBSSh4qSIMc',
                                title: 'Top esportivo rosa',
                                price: 'R$ 50',
                            },
                            {
                                img: '',
                                title: 'Em Breve',
                                price: 'Aguarde',
                            },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-4 flex-shrink-0 w-64">
                                <div
                                    className={`w-full aspect-[3/4] bg-cover bg-center rounded-lg ${!item.img && 'bg-background-light dark:bg-background-dark border border-primary/20'
                                        }`}
                                    style={{
                                        backgroundImage: item.img ? `url("${item.img}")` : 'none',
                                    }}
                                />
                                <div>
                                    <h3 className="font-medium text-gray-900 dark:text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-primary">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Seção: Promoções */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Promoções
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            {
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-qq4HKZ0pAJU9Cat1aZSolEBXsVnrpWSKwOQ_xs9vXTe_by34n4fyb4Hsvi7_Xup_hveedUloIwYflMP3Ll1KGBpQ4CIsq5hXvoSry-9ibrJWl8Qj5eI6ytFr3h1CbA72BdlM26L7wGfb7oVWdl3ey4-i_n1gbg7QTiO8lIe9NZSkan3-WStngZDk1fvK48OjbK21I0ES90XqazsqT9e8f_4lejXujd1IQnsR3y-bj9IWH1Lt9YVkbr_9yI10U6IbHylQVG5Z1h4',
                                label: 'Até 50% de desconto em leggings',
                            },
                            {
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrk4rZlclZVks8SDpOjJj8lMoBnGwLd6Wu72X-nsdR8XVGQvi8ejz_mJ3HunR6kX1ODik5mPiYhJ0YHubsNMItJgUNAX9L8lB6by2THXQV_rpr8TG4fZB1HXCXXFrZhX5V0nb7bZ61BZkRZiv2VrSPvG-QWdNvQZEFcIgFFdk7tfG7forC81dVMnxbqQB-4E1BspAt_mUko1qQHm69VwbQQNtCgpAzA4ENUv4nxbzC5lPKjRnsteSrDBSRMyrwnxzVSCgDYqNVKew',
                                label: 'Compre 2 tops e ganhe 1',
                            },
                        ].map((promo, i) => (
                            <div key={i} className="group relative rounded-lg overflow-hidden">
                                <div
                                    className="w-full aspect-video bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                                    style={{ backgroundImage: `url("${promo.img}")` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <p className="absolute bottom-4 left-4 text-white text-lg font-bold">
                                    {promo.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Seção: Produtos em Destaque */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Produtos em Destaque
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            {
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAso4fGfKung2yXqyfnEljHTFCTpXcTpU3TgkcOg5f7VOOUbJw6JhuY1lUFLTNyf87Ad1RLIZsnVbp02UjEPrLD2FZt8wfO1EZrFDGK7-RqlUO1dQnUZkeG3xIU9SaksRRFxILVo75gx0xfqr595EorxSJm1_ELqO4i5w2CZ1wBQYHJXQPPb3RDhZyyrWKDYg4yIO9XN9QEJg987wbXE0Z7va2tX0y73vM5UiJRleew1ALWVIq4ArnFG9ka4qM5YfqoCkarRIIqFFE',
                                title: 'Legging de cintura alta',
                                price: 'R$ 90',
                            },
                            {
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKxrlNw1XuGPgqxRM3dDwXYcrch17ilsobqSpcgikEa4JnZ4c8Reak8eMRir5rLVkdHnTxOzMx5MBi482mHMl1vI17SqFuFJV_QiDfTmHeHCwgXuJYPPGr1IVIirZbp7C1LzI7Tif9Ohbvj4gsTLbzy-Js4ieJfwwy6-Hba9OmJnd-fZYsb6rB2KhYMdhaGPYfkNt1o9XLEn0wTdrgtfxHyTuxxorOZATqg__9R_dztTI05lwxeT45hP5INERd9plG56p8KeBJFUk',
                                title: 'Top esportivo com suporte',
                                price: 'R$ 60',
                            },
                            {
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATzZOoz9H0skksIbqobupSyO-dVR3HrnaF_3w2nEoyMOELto_3_2qWYnOPV6UIVaR4JikopBL-1CCLJD47LTpXaNB2wZAL3Hb6tgVF_y7D9HA1Aka9QHK1qgxLbEvVuyRMCVvtfWNcRnWrWW-CMHWtZyCnLVzzAptGV9QNXYkFf7-ZlblY1nWdUSKlIQyXthh5vpKJikH6U3VeQD4atNkWYZfbAoIVcDsXIBFKSX35kHi3vumZdJmjMAmWAx2aLOLSOisNoT92An0',
                                title: 'Shorts de treino',
                                price: 'R$ 40',
                            },
                        ].map((product, i) => (
                            <div key={i} className="flex flex-col gap-3 group">
                                <div className="w-full aspect-square bg-cover bg-center rounded-lg overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                                        style={{ backgroundImage: `url("${product.img}")` }}
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 dark:text-white">
                                        {product.title}
                                    </h3>
                                    <p className="text-sm text-primary">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}