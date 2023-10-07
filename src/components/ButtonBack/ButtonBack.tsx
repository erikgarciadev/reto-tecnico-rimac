import { ArrowLeftIcon } from "../Icons";
import "./styles.scss";

const ButtonBack = () => {
  return (
    <div className="button-back">
      <div className="button-back__circle">
        <ArrowLeftIcon />
      </div>
      <p className="button-back__text">Volver</p>
    </div>
  );
};

export default ButtonBack;
