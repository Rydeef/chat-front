import React, { FC } from "react";
import { useField } from "formik";

import TextField from "../TextField/TextField";

interface Props {
  placeholder?: string;
  className?: string;
  isDisabled?: boolean;
  name: string;
}

export const Input: FC<Props> = ({ name, className, isDisabled, ...props }) => {
  const [{ value, ...field }, { error, touched }] = useField(name);
  const showError = Boolean((touched || value) && error);

  return (
    <div className={className}>
      <TextField {...field} {...props} value={value} isDisabled={isDisabled} />
      <div className="text-red text-sm h-[28px]">{showError && error}</div>
    </div>
  );
};
