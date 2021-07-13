

import React, { useCallback } from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, Linking, TouchableOpacity,Image } from "react-native";

const OpenURLButton = ({ url}) => {
  const handlePress = useCallback(async () => {

    await Linking.openURL(url);

  }, [url]);

  return <TouchableOpacity onPress={handlePress} style={styles.button}><Text style={styles.text1}>Soft Copy</Text></TouchableOpacity>;
};



const MyTenderBids = (props) => {
  




  return (
    <View style={styles.container}>
     
      <View style={styles.container1}>
          <TouchableOpacity onPress={() => props.navigation.navigate('tenderDetails')}><Image

            source={require('../assets/WArrow.png')}
            style={styles.arrowImage}

          /></TouchableOpacity>
          <Text style={styles.etender}>E-tender</Text>
        </View>
    
    <View style={styles.result}>

      <Text style={styles.title}>Biding Details</Text>
      <Text style={styles.text}> organization name: <Text style={styles.data}>{props?.route?.params?.item?.postedBy}</Text></Text>
      <Text style={styles.text}> No. Of Days: <Text style={styles.data}>{props?.route?.params?.item?.no_of_days}</Text></Text>
      <Text style={styles.text}> Contact: <Text style={styles.data}>{props?.route?.params?.item?.contact}</Text></Text>
      <Text style={styles.text}> Status: <Text style={styles.data}>{props?.route?.params?.item?.status}</Text></Text>

      <OpenURLButton url={props?.route?.params?.item?.file_uploaded}></OpenURLButton>


    </View>
    
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
    backgroundColor: "#050f2f",
    height: 80,
    textAlign: "center",
    justifyContent: "flex-start",
    alignContent: "flex-start",


  },
 
  etender: {

    alignSelf: "center",
    color: "#FFFFFF",
    marginTop: "-9%",
    fontSize: 30,
    fontWeight: "bold"

  },
  arrowImage: {

    height: 40,
    width: 40,
    resizeMode: 'stretch',


    marginLeft: "2%",
    marginTop: "5%",


  },
})
export default MyTenderBids;




