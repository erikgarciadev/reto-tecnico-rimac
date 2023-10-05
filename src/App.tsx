import Badge from "./components/Badge";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { TYPES_BADGES } from "./utils/constants";

function App() {
  return (
    <>
      <Header />
      <div>
        <div>
          <div>
            <Button>Cotiza aquí</Button>
            <Button fullWidth primary>
              Seleccionar plan
            </Button>
            <div>
              <Badge>Seguro Salud Flexible</Badge>
              <Badge type={TYPES_BADGES.PLAN}>Plan recomendado</Badge>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
