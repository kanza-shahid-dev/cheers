import React from 'react'
import { View, Text ,Image} from 'react-native'
import styleSheet from '../assets/constants/styleSheet'
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../assets/constants/colors';

const OrderHistoryItem = () => {
    return (
        <View style={{width:'100%',padding:15,paddingLeft:20,paddingRight:20,marginBottom:10,marginTop:10,marginRight:10,flexDirection:'row',borderWidth:1,borderRadius:20,borderColor:'grey'}}>
            <View style={{flex:1,justifyContent:'center'}}>
            <Text style={[styleSheet.thirdHeading,{marginBottom:10,color:colors.darkGrey,fontWeight:'bold'}]}>
                Order No:
            </Text>
            <Text style={{fontSize:18,color:'grey',fontWeight:'700'}}>
                Subtotal
            </Text>
            </View>
            <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}>
            <Text style={styleSheet.thirdHeading}>
                #123456
            </Text>
            <Text style={{fontSize:18,color:'grey',fontWeight:'700'}}>
                R 300
            </Text>
            </View>
            
        </View>
    )
}

export default OrderHistoryItem
