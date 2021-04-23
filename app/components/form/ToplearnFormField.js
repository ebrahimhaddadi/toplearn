import React from 'react'
import {useFormikContext} from 'formik'
import ToplearnTextInput from '../shared/ToplearnTextInput';
import ErrorMessage from './ErrorMessage';

const ToplearnFormField = ({name,...otherProps}) => {
    const {errors,setFieldTouched,touched,handleChange} =useFormikContext();
    return (
      <>
       <ToplearnTextInput
            {...otherProps}        
             onChangeText={handleChange(name)}
             onBlur={() => setFieldTouched(name)}
                />
         
        
          <ErrorMessage error={errors.[name]} visible={touched.[name]} />
      </>
    )
}

export default ToplearnFormField

// const styles = StyleSheet.create({})
