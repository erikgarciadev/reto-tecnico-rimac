import Badge from "../../components/Badge";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";
import "./styles.scss";

const FormInformation = () => {
  return (
    <form className="form">
      <div className="form__container_title">
        <div>
          <Badge>Seguro Salud Flexible</Badge>
          <h1>Creado para ti y tu familia</h1>
        </div>
        <picture>
          <img width="136px" height="160px" src="./images/family-mobile.webp" />
        </picture>
      </div>
      <p className="form__instructions">
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría, 100% online.
      </p>

      <div className="input-select">
        <select>
          <option>DNI</option>
        </select>
        <Input border={false} label="Nro. de documento" value={"30216147"} />
      </div>

      <div className="form-container-input">
        <Input label="Celular" value="51032332" />
      </div>
      <div className="container-checkbox">
        <Checkbox />
        <label>Acepto la Política de Privacidad</label>
      </div>
      <div className="container-checkbox">
        <Checkbox />
        <label>Acepto la Política Comunicaciones Comerciales</label>
      </div>
      <p className="form__terms">Aplican Términos y Condiciones.</p>

      <Button>Cotiza aquí</Button>
    </form>
  );
};

export default FormInformation;
