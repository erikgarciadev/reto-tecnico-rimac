import Badge from "./components/Badge";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";
import OptionCard from "./components/OptionCard";
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
            <div
              style={{
                padding: "1em",
                display: "flex",
                flexDirection: "column",
                gap: "1em",
              }}
            >
              <div
                style={{
                  display: "flex",
                  borderRadius: "8px",
                  border: "1px solid var(--grey-60)",
                }}
              >
                <select
                  style={{
                    width: "140px",
                    border: "none",
                    padding: "16px",
                    borderTopLeftRadius: "8px",
                    borderBottomLeftRadius: "8px",
                    outline: "none",
                    borderLeft: "0px",
                    borderRight: "1px solid var(--grey-60)",
                  }}
                >
                  <option>DNI</option>
                </select>
                <Input
                  border={false}
                  label="Nro. de documento"
                  value={"30216147"}
                />
              </div>
              <div>
                <Input label="Celular" value={"5130216147"} />
              </div>
            </div>
            <div
              style={{
                padding: "1em",
              }}
            >
              <OptionCard
                imageUrl="./images/protection-light.svg"
                title="Para mi"
                subTitle="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
              />

              <OptionCard
                selected
                imageUrl="./images/add-user-light.svg"
                title="Para alguien mas"
                subTitle="Realiza una cotización para uno de tus familiares o cualquier persona."
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
