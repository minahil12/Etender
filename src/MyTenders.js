
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, Image, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';
import { ScrollViewBase } from "react-native";


const MyTenders = ({ navigation }) => {

  const [tenders, settenders] = useState([]);
  const [email, setEmail] = useState([]);
  


  useEffect(() => {
    axios.get('https://etender-backend.herokuapp.com/api/publish-tender/').then(
      response => {
         
        settenders(response.data)
        show()
        
        
   
        


      }).catch(
        (err) => {
          console.log(err)
        });
  }, [])

  const show = async () => {

    setEmail(await AsyncStorage.getItem("email"));
  }

  const emptyComponent= () => {
    return(
    <View style={styles.one}>
      <Text style={styles.titleStyle}> You have no Tenders published</Text>
    </View>);
  }

  const Tenders = tenders.filter(x=>x.email===email)
  const renderItem = ({ item }) => {




    //if (item.email === email) 
    {


      return (
        <View style={styles.result}>
          

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('tenderDetails', { item })}>
              <Text style={styles.title}> {item.title}</Text>
              <Text style={styles.text} >Description: {item.description}</Text>
              <Text style={styles.text}> Status: {item.availibility}</Text>
              <Text style={styles.text}> Last Date: {item.last_date}</Text>

            </TouchableOpacity>
          
        </View>

      );

    }

  };


  return (
    <View style={styles.container} >
    <ScrollView>
      <View style={styles.container1}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}><Text style={styles.hello}>back</Text></TouchableOpacity>
        <Image

          source={require('../assets/logo.png')}
          style={styles.ImageIconStyle}

        />
      </View>
      
      <Text style={{marginTop:"10%",textAlign:"center",color:"#050f2f",fontSize:30}}>My Tenders</Text>
      <FlatList
        data={Tenders}
        renderItem={renderItem}

        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={emptyComponent}
      />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
backgroundColor:"white",
    paddingTop: 40,
    paddingHorizontal: 10,

  },
  result: {
    marginTop: 20,
    padding: 30,
    backgroundColor: 'white',
    fontSize: 15,
    borderRadius: 10,


  },
  button:
  {
    backgroundColor: "#050f2f",
    overflow: 'hidden',
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "#050f2f",

    alignContent: "stretch"

  },
  text:
  {
    color: "white",
    fontSize: 20,
    margin: 10
  },

  container1: {
    backgroundColor: "white",
    height: 150,
    textAlign: "center",
    justifyContent: "flex-start",
    alignContent: "flex-start"
  },
  ImageIconStyle: {
    //padding: 25,
    //marginBottom:200,
    height: 120,
    width: 130,
    resizeMode: 'stretch',
    marginBottom: "200%",
    alignSelf: "flex-end"


  },
  hello:
  {
    fontSize: 20,
    marginLeft: "5%",
    marginTop: "10%"
  },
  title:
  {

    color: "#050f2f",
    fontSize: 30,
    textAlign: "center",
    backgroundColor: "white"
},
titleStyle: {
  color: '#050f2f',
  textAlign:"center",
  marginTop:"20%",
  
  fontWeight:"bold"
  
  
  },

})
export default MyTenders;




