const { HashRouter, Route, Switch, NavLink } = ReactRouterDOM;

const AddCustomer = () => <h2>Adicionar</h2>;
const NotFound = () => <h2>Página Não Encontrada</h2>;

const App = () => (
  <HashRouter>
    <MainPage />
  </HashRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
