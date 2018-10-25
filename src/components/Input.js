import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap'

const InputComponent = ({ ...props }) => {
  return (
    <FormGroup>
      <Label htmlFor={props.name}><strong>{props.label}</strong></Label>
      <Input onChange={props.onChange} value={props.value} placeholder={props.label} />
    </FormGroup>
  )
}

InputComponent.defaultProps = {
//   labelHidden: true
}

export default InputComponent