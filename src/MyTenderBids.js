

import React, { useCallback } from "react";
import { View, Text, StyleSheet, Linking, TouchableOpacity,Image } from "react-native";

const OpenURLButton = ({ url}) => {
  const handlePress = useCallback(async () => {

    await Linking.openURL(url);

  }, [url]);

  return <TouchableOpacity onPress={handlePress} style={styles.button}><Text style={styles.text1}>Soft Copy</Text></TouchableOpacity>;
};



const MyTenderBids = (props) => {
  




  return (
    <View style={{backgroundColor:"white"}}>
      <View style={styles.container1}>
        <TouchableOpacity  onPress={() => props.navigation.navigate('myTenders')}><Text style={styles.hello}>back</Text></TouchableOpacity>
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
export default MyTenderBids;




