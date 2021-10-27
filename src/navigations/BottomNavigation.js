import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Cart from '../screens/Cart';
import Checkout from '../screens/Checkout';
import Home from '../screens/Home';
import Categories from '../screens/Categories'
import Profile from '../screens/Profile';
import WishList from '../screens/WishList';
import StackNavigation from './StackNavigation';
import ItemDetail from '../screens/ItemDetail'
import { Text } from 'react-native';
import AllCategories from '../screens/AllCategories';
import OrderHistory from '../screens/OrderHistory';
import colors from '../assets/constants/colors';

const BottomNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator initalRouteName="Home" screenOptions={{headerShown:false,tabBarStyle:{height:75},tabBarItemStyle:{borderRadius:180,height:50,marginLeft:18,marginRight:18,marginTop:10,marginBottom:5},tabBarLabelStyle:{fontSize:14},tabBarColor:'white',tabBarActiveTintColor:colors.primary,tabBarActiveBackgroundColor:colors.primary,borderTopWidth:20}}  >
        <Tab.Screen name="Home" 
        component={Home} 
        options={{
          tabBarIcon:({color,focused})=>focused?<Icon name="home" size={22} color={'white'}/>:<Icon name="home" size={22} color={color}/>,
          tabBarLabel:({focused})=>focused?null:<Text style={{textAlign:'center'}}>Home</Text> 
          }}/>
        <Tab.Screen name="WishList" 
        component={WishList}  
        options={{
            tabBarIcon:({color,focused})=>focused?<Icon name="heart" size={22} color={'white'}/>:<Icon name="heart" size={22} color={color}/>,
            tabBarLabel:({focused})=>focused?null:<Text style={{}}>WishList</Text>
          }}/>
        <Tab.Screen name="Cart" 
        component={Cart}  
        options={{
            tabBarIcon:({color,focused})=>focused?<Icon name="shopping-bag" size={22} color={'white'}/>:<Icon name="shopping-bag" size={22} color={color}/>,
            tabBarLabel:({focused})=>focused?null:<Text style={{}}>Cart</Text>
          }}/>
        <Tab.Screen name="Profile" 
        component={Profile}  
        options={{
            tabBarIcon:({color,focused})=>focused?<Icon name="user-alt" size={22} color={'white'}/>:<Icon name="user-alt" size={22} color={color}/>,
            tabBarLabel:({focused})=>focused?null:<Text style={{}}>Profile</Text> 
          }}/>
        <Tab.Screen name="Categories" 
        component={Categories}  
        options={{
          tabBarButton:()=>null}}/>
        <Tab.Screen name="ItemDetail" 
        component={ItemDetail}  
        options={{
          tabBarButton:()=>null}}/>
        <Tab.Screen name="Checkout" 
        component={Checkout} 
        options={{
          tabBarButton:()=>null}}></Tab.Screen>
           <Tab.Screen name="AllCategories" 
        component={AllCategories} 
        options={{
          tabBarButton:()=>null}}></Tab.Screen>
             <Tab.Screen name="OrderHistory" 
        component={OrderHistory} 
        options={{
          tabBarButton:()=>null}}></Tab.Screen>
          
            
      </Tab.Navigator>
    )
}

export default BottomNavigation
