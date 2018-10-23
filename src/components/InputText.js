import React from 'react'
import { FormGroup, FormFeedback, Input, Label } from 'reactstrap'

const InputText = ({ input, label, meta: { touched, error, warning }, ...props }) => {
  return (
    <FormGroup className={touched && error ? 'has-error' : ''}>
      <Label htmlFor={input.name}><strong>{label}</strong></Label>
      <Input {...input} placeholder={label} className={touched && (Boolean(error) || Boolean(warning)) ? 'is-invalid' : ''} />
      {touched && error ? <FormFeedback>{error}</FormFeedback> : null}
      {touched && warning ? <FormFeedback>{warning}</FormFeedback> : null}
    </FormGroup>
  )
}

InputText.defaultProps = {
//   labelHidden: true
}

export default InputText