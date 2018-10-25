import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Input, Label } from 'reactstrap'

const InputComponent = ({ name, label, onChange, value }) => {
  return (
    <FormGroup>
      <Label htmlFor={name}><strong>{label}</strong></Label>
      <Input onChange={onChange} value={value} placeholder={label} />
    </FormGroup>
  )
}

InputComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
}

export default InputComponent