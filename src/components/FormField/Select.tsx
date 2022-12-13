import React, { useCallback, FC } from 'react';
import Select, { Options, SingleValue, GroupBase, StylesConfig } from 'react-select';
import { useField } from 'formik';

const CUSTOM_STYLES: StylesConfig<Option, false, GroupBase<Option>> = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#9695A5',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    boxShadow: 'none',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#EBEBEB',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#EBEBEB',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#9695A5',
  }),
  option: (provided) => ({
    ...provided,
    backgroundColor: '#9695A5',
    color: 'white',
    '&:hover': {
      backgroundColor: '#797C87',
      transitionDuration: '.3s',
    },
  }),
};

interface Option {
  value: string;
  label: string;
}

interface Props {
  name: string;
  placeholder: string;
  options: Options<Option>;
  className?: string;
  isDisabled?: boolean;
}

const SelectComponent: FC<Props> = ({ name, placeholder, options, className, isDisabled }) => {
  const [{ value }, { error, touched }, { setValue }] = useField(name);
  const onChange = useCallback(
    (option: SingleValue<Option>) => {
      setValue(option);
    },
    [value]
  );

  const showError = Boolean((touched || value) && error);

  return (
    <div>
      <Select
        value={value}
        styles={CUSTOM_STYLES}
        options={options}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        isDisabled={isDisabled}
      />
      {showError && <div className="text-red">{error}</div>}
    </div>
  );
};

export default SelectComponent;
