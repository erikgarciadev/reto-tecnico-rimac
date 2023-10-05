import { FC } from "react";
import "./styles.scss";
import { classNames } from "../../utils/util";

interface Props {
  children: React.ReactNode;
  type?: "default" | "plan";
}

const Badge: FC<Props> = ({ children, type = "default" }) => {
  return (
    <span className={classNames("badge", type === "plan" ? "badge--plan" : "")}>
      {children}
    </span>
  );
};

export default Badge;
