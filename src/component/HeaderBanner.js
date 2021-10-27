import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../assets/constants/colors'
import styleSheet from '../assets/constants/styleSheet';

const HeaderBanner = (props) => {
    return (
        <View style={{flexDirection:'row'}}>
        {props.left?
        <View style={{flex:1}}><Text style={[styleSheet.secHeading,{color:colors.darkGrey}]}>{props.left}</Text></View>
        :
        <View style={{flex:1,flexDirection:'row'}}>
        <View style={{flex:1,alignItems:'flex-start'}}>
        <TouchableOpacity onPress={()=>props.navigation.goBack()}>
        <Icon name="arrow-back-ios" color={props.color} size={25}/>
        </TouchableOpacity>
        </View>
        </View>
        }
        <View style={{alignItems:'flex-end'}}>
        <TouchableOpacity onPress={()=>props.navigation.navigate("Cart")}>
        <Icon name="shopping-cart" color={props.color} size={25}/>
        </TouchableOpacity>
        </View>
        </View>
       
       
    )
}

export default HeaderBanner
