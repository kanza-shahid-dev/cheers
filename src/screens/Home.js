import React,{useState,useEffect} from 'react'
import { View, Text, FlatList,Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import styleSheet from '../assets/constants/styleSheet'
import ButtonComp from '../component/ButtonComp'
import SearchBar from '../component/SearchBar'
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../assets/constants/colors'
import { SliderBox } from "react-native-image-slider-box";
import HeaderBanner from '../component/HeaderBanner'

const{width,height}=Dimensions.get('window')
const Home = (props) => {
    const [DATA,setDATA]=useState([])
    useEffect(()=>{
        setDATA(data)
    },[])
    const data=[
        {title:'Title 1 here',image2:require('../assets/images/bottle2.png'),image:require('../assets/images/bottle2.png'),backgroundColor:colors.orange},
        {title:'Title 2 here',image2:require('../assets/images/bottle.png'),image:require('../assets/images/bottle.png'),backgroundColor:colors.green},
        {title:'Title here',image2:require('../assets/images/bottle5.png'),image:require('../assets/images/bottle.png'),backgroundColor:colors.lightGreen},
        {title:'Title here',image2:require('../assets/images/bottle.png'),image:require('../assets/images/bottle.png'),backgroundColor:colors.primary},
        {title:'Title here',image2:require('../assets/images/bottle2.png'),image:require('../assets/images/bottle.png'),backgroundColor:colors.primary},
        {title:'Title here',image2:require('../assets/images/bottle.png'),image:require('../assets/images/bottle.png'),backgroundColor:colors.primary},
        {title:'Title here',image2:require('../assets/images/bottle2.png'),image:require('../assets/images/bottle.png'),backgroundColor:colors.primary},
        {title:'Title here',image2:require('../assets/images/bottle2.png'),image:require('../assets/images/bottle.png'),backgroundColor:colors.primary},
        {title:'Title here',image2:require('../assets/images/bottle2.png'),image:require('../assets/images/bottle.png'),backgroundColor:colors.primary},
    ]
    const images=[
        require('../assets/images/banner.png'),   
        require('../assets/images/logo.png'),   
        require('../assets/images/banner.png'),  
        require('../assets/images/logo.png'),   

    ]
    function Search(text)
    {
        const filteredData=data.filter((item)=>item.title.toLowerCase().includes(text.toLowerCase()))
        console.log("____",filteredData)
        setDATA(filteredData)
       // setSearchbarValue(text)
    }
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={styleSheet.TabScreenContainer}>
           
           <HeaderBanner left="Good morning Jhon" color={colors.primary} navigation={props.navigation}/>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{marginRight:20,fontSize:16}}>Current Location</Text>
                    <Icon name="keyboard-arrow-down" size={30} color={colors.primary}/>
                </View>

            <SearchBar onChangeText={(value)=>Search(value)}/>

            <SliderBox images={images}
           parentWidth={width-40}
           resizeMode="contain"
           dotColor={colors.primary}
           inactiveDotColor={colors.grey}
           />
         
            <View style={{flexDirection:'row',marginBottom:20,marginTop:10}}>
            <View style={{flex:3}}><Text style={[styleSheet.heading,{color:colors.darkGrey}]}>Categories</Text></View>
            <View style={{flex:1,alignItems:'flex-end'}}><ButtonComp title="SEE ALL" type="small" onPress={()=>props.navigation.navigate("AllCategories")}/></View>
            </View>
           
            <FlatList
            data={DATA}
            key={3}
            numColumns={3}
            renderItem={({item})=>{
                return <View style={{padding:5,flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>props.navigation.navigate("Categories",{item})}>
                    <Image source={item.image2} style={{height:height*0.21,width:width*0.25}}/>
                    <Text style={[styleSheet.thirdHeading,{textAlign:'center'}]}>{item.title}</Text>
                    </TouchableOpacity>
                    </View>

            }}/>
        </View>
        </ScrollView>
    )
}

export default Home
