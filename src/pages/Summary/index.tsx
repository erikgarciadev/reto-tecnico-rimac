import ButtonBack from "../../components/ButtonBack";
import StepsLayout from "../../layouts/StepsLayout";
import SummaryCard from "./SummaryCard";
import { Link } from "react-router-dom";
import "./styles.scss";
import { PATHS } from "../../utils/constants";

const Summary = () => {
  return (
    <StepsLayout>
      <div className="container container-summary">
        <div className="container-button-back">
          <Link to={PATHS.PLANS}>
            <ButtonBack />
          </Link>
        </div>
        <h1 className="title-summary">Resumen del seguro</h1>
        <SummaryCard
          data={{
            username: "Rocio Miranda Diaz",
            dni: "448888833",
            cellphoneNumber: "131313",
            plan: "Plan en Casa y Clinica",
            price: 99,
          }}
        />
      </div>
    </StepsLayout>
  );
};

export default Summary;
