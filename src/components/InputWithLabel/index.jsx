import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const InputWithLabel = ({ register, errors, label, name, type = 'text', options, ...rest }) => {
  return (
    <div className='input_box'>
      <label className='input_label' htmlFor={name}>
        {label}
      </label>

      {type === 'select' ? (
        <SelectInput {...{ register, errors, label, name, options }} />
      ) : (
        <input className='input_field' id={name} type={type} {...register(name)} {...rest} />
      )}

      <p className='input_error_message'>{errors[name]?.message}</p>
    </div>
  );
};

const SelectInput = ({ register, name, options }) => (
  <select className='input_field' id={name} {...register(name)}>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.title}
      </option>
    ))}
  </select>
);

export default InputWithLabel;

InputWithLabel.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  options: PropTypes.array,
};
