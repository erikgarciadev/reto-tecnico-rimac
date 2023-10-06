import { FC } from "react";
import "./style.scss";

interface Props {
  checked?: boolean;
  onChange?: () => void
}

const CheckBox: FC<Props> = ({ checked , onChange}) => {
  return <input onChange={onChange} checked={checked} className="checkbox" type="checkbox" />;
};

export default CheckBox;
