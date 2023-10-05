import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div>
        <div>
          <div
            style={{
              margin: "1em",
            }}
          >
            <Button>Cotiza aquí</Button>
            <Button  primary>Seleccionar plan</Button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
