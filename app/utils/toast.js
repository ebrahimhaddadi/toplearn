import { RFPercentage } from 'react-native-responsive-fontsize'
import Toast from 'react-native-tiny-toast'



export const successToast=(message)=>{
    Toast.showSuccess(message,{
        position:Toast.position.CENTER,
        textStyle:{
            fontFamily:"byakan",
            fontSize:RFPercentage("1.8")
        },
        shadow:true
    })
}

export const loadingToast=(message)=>{
    Toast.showLoading(message,{
        position:Toast.position.CENTER,
        textStyle:{
            fontFamily:"byakan",
            fontSize:RFPercentage("1.8")
        },
        shadow:true
    })
}

export const customToast=(message)=>{
    Toast.show(message,{
        position:Toast.position.BOTTOM,
        textStyle:{
            fontFamily:"byakan",
            fontSize:RFPercentage("1.8")
        },
        shadow:true
    })
}

