import { useFormikContext } from 'formik'
import React from 'react'
import { View, Text } from 'react-native'
import CustomButton from '../shared/CustomButton'


const SubmitButton = ({title}) => {
    const {handleSubmit}=useFormikContext()
    return <CustomButton title={title} onPress={handleSubmit}/>
}

export default SubmitButton
