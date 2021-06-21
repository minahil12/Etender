
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, Image, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';



const MyBids = ({ navigation }) => {


  const [bids, setbids] = useState([]);
  const [organization, setOrganization] = useState([]);


  const show = async () => {

    setOrganization(await AsyncStorage.getItem("organization"));
  }

  useEffect(() => {
    axios.get('https://etender-backend.herokuapp.com/api/bid/').then(
      response => {
        setbids(response.data)
        show()



      }).catch(
        (err) => {
          console.log(err)
        });
  }, [])



  const emptyComponent = () => {
    return (
      <View style={styles.one}>
        <Text style={styles.titleStyle}> You have no bids placed</Text>
      </View>);
  }

  const Bids = bids.filter(x => x.postedBy === organization)

  const renderItem = ({ item }) => {

    /* let mystr = organization
     console.log(mystr)
     var someStr = mystr;
     let testOrganization = (someStr.toString().replace(/['"]+/g, ''));
 */


    //if (item.postedBy === organization) 
    {
      return (
        <View style={styles.result}>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('bidDetails', { item })} >
            <Text style={styles.title}> {item.title}</Text>
            <Text style={styles.text}> Tender Id: {item.tenderId}</Text>
            <Text style={styles.text}> Biding amount: {item.bidding_amount}</Text>
            <Text style={styles.text}> Status: {item.status}</Text>



          </TouchableOpacity>

        </View>

      );
    };
  }


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

        <Text style={{ marginTop: "10%", textAlign: "center", color: "#050f2f", fontSize: 30 }}>My Bids</Text>
        <FlatList style={styles}

          data={Bids}
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
    backgroundColor: "white",
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
    textAlign: "center",
    marginTop: "20%",

    fontWeight: "bold"


  },
})
export default MyBids;




