import React from "react";
import "./style.scss";

interface Props {
  checked?: boolean;
  onChange?: (e: any) => void;
}

/*
  How use with react-hook-form, for function watch(function returns value of specific field)

  const watchFile = watch("nameField") // false | true;

  <Controller
  name="nameField"
  control={control}
  render={({ field: { onChange, value } }) => (
    <Checkbox
      onChange={(e: any) => onChange(e.target.checked)}
      checked={value}
      customClassName="w-5 h-5 rounded-md cursor-pointer border border-red-500"
    />
  )}
></Controller>; 
*/

const CheckBox = React.forwardRef<HTMLInputElement, Props>(
  ({ checked, onChange, ...props }, ref) => {
    return (
      <input
        ref={ref}
        onClick={onChange}
        checked={checked}
        className="checkbox"
        type="checkbox"
        {...props}
      />
    );
  }
);

export default CheckBox;
