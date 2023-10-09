import { Link } from "react-router-dom";
import StepsLayout from "../../layouts/StepsLayout";
import ButtonBack from "../../components/ButtonBack";
import { PATHS } from "../../utils/constants";
import "./styles.scss";
import OptionCard from "../../components/OptionCard";
import { options } from "../../utils/data";
import SliderPlans from "./SliderPlans";

const Plans = () => {
  return (
    <StepsLayout>
      <div className="container container-plans">
        <div className="container-button-back">
          <Link to={PATHS.HOME}>
            <ButtonBack />
          </Link>
        </div>
        <div className=" container-plans__instructions">
          <h1>Rocío ¿Para quién deseas cotizar?</h1>
          <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
        </div>
        <div className="container-plans__options">
          {options.map((option, i) => (
            <OptionCard key={i} {...option} />
          ))}
        </div>
        <div className="container-plans__list-plans">
          <SliderPlans
            plans={[
              {
                name: "Plan en Casa",
                price: 39,
                description: [
                  "Médico general a domicilio por S/20 y medicinas cubiertas al 100%.",
                  "Videoconsulta y orientación telefónica  al 100% en medicina general + pediatría.",
                  "Indemnización de S/300 en caso de hospitalización por más de un día.",
                ],
                age: 60,
              },
              {
                name: "Plan en Casa y Clínica",
                price: 99,
                description: [
                  "Consultas en clínica para cualquier especialidad.",
                  "Medicinas y exámenes derivados cubiertos al 80%.",
                  "Atención médica en más de 200 clínicas del país.",
                ],
                age: 70,
              },
              {
                name: "Plan en Casa + Bienestar",
                price: 70,
                description: [
                  "Videoconsulta con especialistas de psicología y nutrición.",
                  "Acceso a videos y recursos sobre bienestar.",
                  "Incluye todos los beneficios del Plan en Casa.",
                ],
                age: 25,
              },
              {
                name: "Plan en Casa + Chequeo ",
                price: 49,
                description: [
                  "Un Chequeo preventivo general de manera presencial o virtual.",
                  "Acceso a Vacunas en el Programa del MINSA en centros privados.",
                  "Incluye todos los beneficios del Plan en Casa.",
                ],
                age: 90,
              },
              {
                name: "Plan en Casa + Fitness",
                price: 45,
                description: [
                  "Descuentos en más de 50 locales de gimnasio.",
                  "Beneficios exclusivos en alimentos nutricionales y complementos.",
                  "Incluye todos los beneficios del Plan en Casa.",
                ],
                age: 30,
              },
            ]}
          />
        </div>
      </div>
    </StepsLayout>
  );
};

export default Plans;
