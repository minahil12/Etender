

import React, { useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, Linking,Image } from "react-native";

import axios from 'axios';
import { ScrollView } from "react-native";
const OpenURLButton = ({ url }) => {
  const handlePress = useCallback(async () => {

    await Linking.openURL(url);

  }, [url]);

  return <TouchableOpacity onPress={handlePress} style={styles.button}><Text style={styles.text1}>Soft Copy</Text></TouchableOpacity>;
};


const BidDetails = (props) => {
  const { state } = props.navigation;

  const [tenders, settenders] = useState([]);



  useEffect(() => {
    axios.get('https://etender-backend.herokuapp.com/api/publish-tender/').then(
      response => {
        settenders(response.data)
        //show()


      }).catch(
        (err) => {
          console.log(err)
        });
  }, [])


  const renderItem = ({ item }) => {







    if (props?.route?.params?.item?.tenderId === item.id)
      return (
        <View style={styles.result}>



          <Text style={styles.text}> Posted by: <Text style={styles.data}>{item.title}</Text></Text>
          <Text style={styles.text} > Category: <Text style={styles.data}>{item.category}</Text></Text>
          <Text style={styles.text}> Reigon: <Text style={styles.data}>{item.region}</Text></Text>
          <Text style={styles.text}> Status: <Text style={styles.data}>{item.availibility}</Text></Text>
          <Text style={styles.text}> Last Date: <Text style={styles.data}>{item.last_date}</Text></Text>



        </View>

      );



  };





  return (
    <View style={{backgroundColor:"white"}}>
      <ScrollView>
      <View style={styles.container1}>
        <TouchableOpacity  onPress={() => props.navigation.navigate('myBids')}><Text style={styles.hello}>back</Text></TouchableOpacity>
      <Image
     
     source={require('../assets/logo.png')}
style={styles.ImageIconStyle}
           
      />
      </View>
      <View style={styles.result}>

        <Text style={styles.title}>Biding Details</Text>
        <Text style={styles.text}> organization name: <Text style={styles.data}>{props?.route?.params?.item?.postedBy}</Text></Text>
        <Text style={styles.text}> No. Of Days: <Text style={styles.data}>{props?.route?.params?.item?.no_of_days}</Text></Text>
        <Text style={styles.text}> Contact: <Text style={styles.data}>{props?.route?.params?.item?.contact}</Text></Text>
        <Text style={styles.text}> Status: <Text style={styles.data}>{props?.route?.params?.item?.status}</Text></Text>
        <OpenURLButton url={props?.route?.params?.item?.file_uploaded}></OpenURLButton>



      </View>


      <View style={styles.bids}>

        <Text style={{ color: "white", textAlign: "center" }} >Tender details on which this bid is placed</Text>

      </View>
      <FlatList style={styles}

        data={tenders}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />

</ScrollView>
    </View>
  );




};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 40,
    paddingHorizontal: 10,

  },

  button:
  {
    backgroundColor: "white",
    width: 150,
    marginLeft: "30%",
    marginTop:"3%"
  },
  result: {
    marginTop: 35,
    padding: 30,
    backgroundColor: "#050f2f",
    fontSize: 15,



  },
  text: {

    color: "white",
    marginLeft: 20,
    marginRight: 20,


    fontWeight: "bold",
    fontSize: 16,
  },
  text1: {

    color: "#050f2f",
    marginLeft: 20,
    marginRight: 20,


    fontWeight: "bold",
    fontSize: 16,
  },
  title:
  {
    backgroundColor: "white",
    color: "#050f2f",
    padding: 3,
    fontWeight: "600",
    borderRadius: 20,
    textAlign: "center"
  },

  data:
  {
    color: "white",
    marginLeft: 20,
    marginRight: 20,
    fontWeight: "300"

  },
  bids:
  {
    backgroundColor: "gray",
    textAlign: "center",
    borderRadius: 15,
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "#737373",
    marginTop: 20,

  },
  container1: {
    backgroundColor: "white",
    height: 150,
    textAlign: "center",
    justifyContent: "flex-start",
    alignContent: "flex-start"
  },
  header:
  {
    color: "white",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 30
  }
  ,
  ImageIconStyle: {
    //padding: 25,
    //marginBottom:200,
    height: 120,
    width: 130,
    resizeMode: 'stretch',
   marginTop:"1%",
   alignSelf:"flex-end"
   


  },
  hello:
  {
    fontSize:20,
    marginLeft:"5%",
    marginTop:"10%"
  },
})
export default BidDetails;




