import Badge from "./components/Badge";
import Button from "./components/Button";
import CheckBox from "./components/Checkbox/Checkbox";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";
import OptionCard from "./components/OptionCard";
import PlanCard from "./components/PlanCard";
import { TYPES_BADGES, TYPES_OPTIONS } from "./utils/constants";

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
                background: "red",
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
              <div
                style={{
                  display: "flex",
                  gap: "1em",
                  flexWrap: "inherit",
                  overflow: "auto",
                }}
              >
                <PlanCard
                  typeOption={TYPES_OPTIONS.FOR_SOMEONE}
                  onClick={() => {}}
                  plan={{
                    name: "Plan en Casa y Clínica",
                    price: 99,
                    description: [
                      "Consultas en clínica para cualquier especialidad.",
                      "Medicinas y exámenes derivados cubiertos al 80%.",
                      "Atención médica en más de 200 clínicas del país.",
                    ],
                    age: 70,
                  }}
                />
                <PlanCard
                  typeOption={TYPES_OPTIONS.FOR_ME}
                  onClick={() => {}}
                  plan={{
                    name: "Plan en Casa",
                    price: 99,
                    description: [
                      "Videoconsulta con especialistas de psicología y nutrición.",
                      "Acceso a videos y recursos sobre bienestar.",
                      "Incluye todos los beneficios del Plan en Casa.",
                    ],
                    age: 70,
                  }}
                />
              </div>
              <div>
            
                <CheckBox />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
