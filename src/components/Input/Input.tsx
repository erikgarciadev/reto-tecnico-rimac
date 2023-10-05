import { FC } from "react";
import "./styles.scss";
import { classNames } from "../../utils/util";

interface Props {
  label: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  border?: boolean;
}

const Input: FC<Props> = ({ label, onChange, value, border = true }) => {
  return (
    <div
      className={classNames(
        "container-input",
        border ? "container-input--border" : ""
      )}
    >
      <label className="container-input__label">{label}</label>
      <input
        className="container-input__input"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
