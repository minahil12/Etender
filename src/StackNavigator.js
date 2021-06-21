/*import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from './Login'
import Main from './Main'
import myTenders from './MyTenders'
import myBids from './MyBids'
import tenderDetails from './TenderDetails'
import myTenderBids from './MyTenderBids'
import bidDetails from './BidDetails'



const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator 
    initialRouteName="Login"
    screenOptions={{ gestureEnabled: false }}>

      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />

      <Stack.Screen  name="myTenders" component={myTenders} options={{
        headerShown: false,
        title: 'My Bids',
        headerStyle: {
          backgroundColor: '#76dbc6'
        },
        headerTintColor: 'white'


      }} />
      <Stack.Screen name="myBids" component={myBids} options={{
        headerShown: false,
        title: 'My Bids',
        headerStyle: {
          backgroundColor: '#76dbc6'
        },
        headerTintColor: 'white'
      }} />
      <Stack.Screen name="tenderDetails" component={tenderDetails} options={{
        headerShown: false,
        title: 'Tender DETAIL',
        headerStyle: {
          backgroundColor: 'white'
        },
        headerTintColor: 'white'
      }} />
      <Stack.Screen name="myTenderBids" component={myTenderBids} options={{ headerShown: false }} />

      <Stack.Screen name="bidDetails" component={bidDetails} options={{
        headerShown: false,
        title: 'Bid DETAIL',
        headerStyle: {
          backgroundColor: '#76dbc6'
        },
        headerTintColor: 'white'
      }} />
      
      
    </Stack.Navigator>
  );
};





export { MainStackNavigator };

*/

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from './Login'
import Main from './Main'
import myTenders from './MyTenders'
import myBids from './MyBids'
import tenderDetails from './TenderDetails'
import myTenderBids from './MyTenderBids'
import bidDetails from './BidDetails'


const Stack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName="Main"
    screenOptions={{ gestureEnabled: false }}
    >


      <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
<Stack.Screen  name="myTenders" component={myTenders} options={{
  headerShown: false,
  title: 'My Bids',
  headerStyle: {
    backgroundColor: '#76dbc6'
  },
  headerTintColor: 'white'


}} />
<Stack.Screen name="myBids" component={myBids} options={{
  headerShown: false,
  title: 'My Bids',
  headerStyle: {
    backgroundColor: '#76dbc6'
  },
  headerTintColor: 'white'
}} />
<Stack.Screen name="tenderDetails" component={tenderDetails} options={{
  headerShown: false,
  title: 'Tender DETAIL',
  headerStyle: {
    backgroundColor: 'white'
  },
  headerTintColor: 'white'
}} />
<Stack.Screen name="myTenderBids" component={myTenderBids} options={{ headerShown: false }} />

<Stack.Screen name="bidDetails" component={bidDetails} options={{
  headerShown: false,
  title: 'Bid DETAIL',
  headerStyle: {
    backgroundColor: '#76dbc6'
  },
  headerTintColor: 'white'
}} />

    </Stack.Navigator>
  );
};

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
    
    initialRouteName="Login"
    screenOptions={{ gestureEnabled: false }}
    >
      
      <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
<Stack.Screen  name="myTenders" component={myTenders} options={{
  headerShown: false,
  title: 'My Bids',
  headerStyle: {
    backgroundColor: '#76dbc6'
  },
  headerTintColor: 'white'


}} />
<Stack.Screen name="myBids" component={myBids} options={{
  headerShown: false,
  title: 'My Bids',
  headerStyle: {
    backgroundColor: '#76dbc6'
  },
  headerTintColor: 'white'
}} />
<Stack.Screen name="tenderDetails" component={tenderDetails} options={{
  headerShown: false,
  title: 'Tender DETAIL',
  headerStyle: {
    backgroundColor: 'white'
  },
  headerTintColor: 'white'
}} />
<Stack.Screen name="myTenderBids" component={myTenderBids} options={{ headerShown: false }} />

<Stack.Screen name="bidDetails" component={bidDetails} options={{
  headerShown: false,
  title: 'Bid DETAIL',
  headerStyle: {
    backgroundColor: '#76dbc6'
  },
  headerTintColor: 'white'
}} />


    </Stack.Navigator>
  );
};


export {AppStackNavigator,AuthStackNavigator}