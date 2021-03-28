import "./styles.css";
import Header from "./components/header";
import Wrapper from "./components/wrapper";
import Footer from "./components/footer";
import Home from "./page/home";
import News from "./page/news";
import Contact from "./page/contact";
import Price from "./page/price";
import ServicesPage from "./page/services";
import Sale from "./page/sale";
import About from "./page/about";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Wrapper} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/price" component={Price} />
        <Route path="/sale" component={Sale} />
        <Route path="/news" component={News} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  );
}
