import { FC } from "react";
import "./styles.scss";
import Step from "./Step";

interface Props {
  currentStep: number;
  steps: {
    text: string;
    path: string;
  }[];
}

const Stepper: FC<Props> = ({ currentStep, steps }) => {
  return (
    <>
      <div className="stepper">
        {steps.map((step, i) => (
          <Step
            key={step.path}
            text={step.text}
            step={i + 1}
            active={currentStep === i + 1}
          />
        ))}
      </div>
    </>
  );
};

export default Stepper;
