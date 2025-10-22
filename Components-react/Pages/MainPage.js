const MainPage = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/Roupas" component={Roupas} />
                <Route path="/News" exact component={Main} />
                <Route path="/" exact component={Main} />
            </Switch>
            <Footer />
        </>
    )
}