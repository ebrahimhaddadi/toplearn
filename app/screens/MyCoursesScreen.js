import React,{useState} from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { FlatList, StyleSheet, Text, TouchableOpacity, View,Alert } from 'react-native'
import ItemSeparitor from '../components/shared/ItemSeparitor'
import Screen from '../components/shared/Screen'
import ToplearnText from '../components/shared/ToplearnText'
import Icon from 'react-native-ionicons'
// import MyIcon from '../components/shared/Icon'

const confirmationAleart=(course,onPress)=>{
    return Alert.alert(course.title,`مطمئنی میخوای ${course.title} رو حذف کنی`,
    [
        {
            text:"نه پاک نمی کنم",
            onPress:()=>{}
        },
        {
            text:"آره پاک میکنم",
            onPress:onPress
        }
    ],{cancelable:false}
    )
}
const deleteAction=(course,onPress)=>{
return(
    <TouchableOpacity onPress={()=>confirmationAleart(course,onPress)}>
        <View style={{
            backgroundColor:"tomato",
            justifyContent:"center",
            alignItems:"center",
            width:50,
            height:"100%"
        }}>
            <Icon name="trash"  color="#fff"/>
        </View>
    </TouchableOpacity>
)
}

const MyCoursesScreen = () => {
    const [getMyCourses, setMyCourse] = useState([
        { id: 1, title: "دوره جامع NodeJs", master: "یونس قربانی" },
        { id: 2, title: "دوره جامع React Native", master: "یونس قربانی" },
        { id: 3, title: "دوره جامع ReactJs", master: "یونس قربانی" },
        { id: 4, title: "دوره جامع ElectronJs", master: "یونس قربانی" },
        { id: 5, title: "دوره جامع جاوااسکریپت", master: "یونس قربانی" },
        { id: 6, title: "دوره جامع جاوااسکریپت", master: "یونس قربانی" },
        { id: 7, title: "دوره جامع جاوااسکریپت", master: "یونس قربانی" }
    ]);

    const handleDelete=(course)=>{
        setMyCourse(getMyCourses.filter(c=>c.id !==course.id))
        // console.log(getMyCourses)
    }
    return (
        <Screen style={styles.screen}>
        <View style={styles.title}>
        <ToplearnText color="#fff" fontFamily="ih" size="3">لییست دوره های من</ToplearnText>
        </View>
         <ItemSeparitor height={4}/>
         <View
         style={{width:"100%"}}
         >
             <FlatList
                 data={getMyCourses}
                 keyExtractor={c=>c.id.toString()}
                 renderItem={({item})=>(
                     <View style={{marginVertical:7}}>
                     <ItemSeparitor height={3} />
                     <Swipeable renderRightActions={()=>deleteAction(item,()=>handleDelete(item))} >
                      <View style={styles.container}>
                      <View
                      style={styles.details} 
                      >
                          <ToplearnText size="2.2" fontFamily="byekan">
                              {item.title}
                          </ToplearnText>
                          <ToplearnText size="2" fontFamily="byekan">
                              {`مدرس دوره:${item.master}`}
                          </ToplearnText>
                      </View>
                      </View>
                     </Swipeable> 
                     <ItemSeparitor height={3} />
                     </View>
                 )}
             />
         </View>
        </Screen>
    )
}

export default MyCoursesScreen

const styles = StyleSheet.create({
    screen:{
        alignItems:"center"
    },
    title:{
        marginVertical:8,
        backgroundColor:"tomato",
        width:"90%",
        borderRadius:14,
        padding:15,
        alignItems:"center"
    },
    container:{
        flexDirection:"row",
        padding:15,
        backgroundColor:"dodgerblue",
        justifyContent:"center"
    },
    details:{
        marginLeft:14,
        backgroundColor:"#f8f4f4",
        width:"100%",
        padding:10,
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center"
    }
})
