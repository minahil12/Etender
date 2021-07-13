

import React, { useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, Linking, Image, ScrollView, SafeAreaView } from "react-native";

const OpenURLButton = ({ url }) => {
  const handlePress = useCallback(async () => {

    await Linking.openURL(url);

  }, [url]);

  return <TouchableOpacity onPress={handlePress} style={styles.button}><Text style={styles.text1}>Soft Copy</Text></TouchableOpacity>;
};


import axios from 'axios';



const TenderDetails = (props) => {


  const { state } = props.navigation;

  const itemTitle = props?.route?.params?.item?.title
  const itemId = props?.route?.params?.item?.id
  const [bids, setbids] = useState([]);





  useEffect(() => {
    axios.get('https://etender-backend.herokuapp.com/api/bid/').then(
      response => {
        const data = response.data.filter(x => x.title === itemTitle && x.tenderId === itemId)
        {
          setbids(data)
        }



      }).catch(
        (err) => {
          console.log(err)
        });
  }, [])

  const emptyComponent = () => {
    return (
      <View style={styles.one}>
        <Text style={styles.titleStyle}> There are no Bids on this Tender</Text>
      </View>);
  }








  const renderItem = ({ item }) => {



    {


      return (

        <View style={styles.result}>

          <TouchableOpacity onPress={() => props.navigation.navigate('myTenderBids', { item })} >
            <Text style={styles.text} > Posted By: <Text style={styles.data}>{item.postedBy}</Text></Text>

            <Text style={styles.text}> Amount:  <Text style={styles.data}>{item.bidding_amount}</Text></Text>
            <Text style={styles.text}> Status:  <Text style={styles.data}>{item.status}</Text></Text>



          </TouchableOpacity>

        </View>

      );


    }




  }


  return (

    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container1}>
          <TouchableOpacity onPress={() => props.navigation.navigate('myTenders')}><Image

            source={require('../assets/WArrow.png')}
            style={styles.arrowImage}

          /></TouchableOpacity>
          <Text style={styles.etender}>E-tender</Text>
        </View>
        <View style={styles.result}>

          <Text style={styles.title}>Tender Details</Text>

          <Text style={styles.text}> organization name: <Text style={styles.data}>{props?.route?.params?.item?.organization_name}</Text></Text>
          <Text style={styles.text}> Reigon: <Text style={styles.data}>{props?.route?.params?.item?.region}</Text></Text>
          <Text style={styles.text}> Contact: <Text style={styles.data}>{props?.route?.params?.item?.contact}</Text></Text>
          <Text style={styles.text}> Category: <Text style={styles.data}>{props?.route?.params?.item?.category}</Text></Text>
          <Text style={styles.text}> Availibilty: <Text style={styles.data}>{props?.route?.params?.item?.availibility}</Text></Text>
          <Text style={styles.text}> Opening Date: <Text style={styles.data}>{props?.route?.params?.item?.opening_date}</Text></Text>
          <Text style={styles.text}> Last Date: <Text style={styles.data}>{props?.route?.params?.item?.last_date}</Text></Text>
          <Text style={styles.text}> Description: <Text style={styles.data}>{props?.route?.params?.item?.description}</Text></Text>
          <OpenURLButton url={props?.route?.params?.item?.file_uploaded}></OpenURLButton>
        </View>
        <View style={styles.bids}>

          <Text style={{ color: "white", textAlign: "center" }} >Bids on this Tender</Text>

        </View>

        <FlatList
          data={bids}
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

  button:
  {
    backgroundColor: "white",
    width: 150,
    marginLeft: "30%",
    marginTop: "3%"
  },
  result: {
    marginTop: "10%",
    padding: 30,
    backgroundColor: "#050f2f",
    fontSize: 15,
    marginBottom: "5%",
    borderRadius: 15



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

  titleStyle: {
    color: '#050f2f',
    textAlign: "center",
    marginTop: "20%",
    fontWeight: "bold"


  },

})

export default TenderDetails;




