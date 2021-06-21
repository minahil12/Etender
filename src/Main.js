/*




import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity,Alert,Image,ScrollView} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';



const Main = ({ navigation }) => {
  const [organization, setOrganization] = useState([]);
  
  const[tenders,settenders]=useState([]);
  const [bids, setbids] = useState([]);
      
      
        
      useEffect(()=>{
        axios.get('https://etender-backend.herokuapp.com/api/publish-tender/').then(
          response =>{
           settenders(response.data)
            show()

           
        }).catch(
          (err)=>
        {
          console.log(err)
        });
          },[])

          
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
        
         
          const show = async () => {

            setOrganization(await AsyncStorage.getItem("organization"));
          }
        
          const activeTenders = tenders.filter(x=>x.organization_name===organization && x.availibility==="Active")
          const inactiveTenders = tenders.filter(x=>x.organization_name===organization && x.availibility==="Inactive")
          const acceptedBids = bids.filter(x=>x.postedBy===organization && x.status==="Approved")
          const reviewBids = bids.filter(x=>x.postedBy===organization && x.status==="Under Review")
          const rejectBids = bids.filter(x=>x.postedBy===organization && x.status==="Rejected")
          
  
  return (
    <View style={{backgroundColor:"white"}}>

<ScrollView>
      <View style={styles.container1}>
      <Image
     
     source={require('../assets/j.png')}
style={styles.ImageIconStyle}
           
      />
        <TouchableOpacity  onPress={() => {
           
            Alert.alert(
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {

                   
                    AsyncStorage.clear();
                   
                    navigation.replace('Login');
                  },
                },
              ],
              {cancelable: false},
            );
          }}><Image
     
          source={require('../assets/logout.jpg')}
     
          style={styles.logout}
           /></TouchableOpacity>
      </View>
      <View style={styles.welcome}>

<Text style={{ color: "white", textAlign: "center", fontSize:18 }} >Welcome, {organization}</Text>

</View>
<View style={styles.borderConBot1}>
   <Text style={styles.tenderInfo}>{activeTenders.length}</Text>
   <Text style={styles.tenderInfo1}>Active Tenders</Text>

   <Text style={styles.tenderInfo}>{acceptedBids.length}</Text>
   <Text style={styles.tenderInfo1}>Accepted Bids</Text>


   <Text style={styles.tenderInfo}>{reviewBids.length}</Text>
   <Text style={styles.tenderInfo1}>Bids Under Review</Text>
        </View>
      <View style={styles.container}>

        
        
        <TouchableOpacity style={{ marginTop: "2%",marginBottom:"2%" }} onPress={() => { navigation.navigate('myTenders') }} ><Text style={styles.text}> My Tender</Text></TouchableOpacity>
        <TouchableOpacity style={{ marginTop: "5%",marginBottom:"5%" }} onPress={() => { navigation.navigate('myBids') }} ><Text style={styles.text}>  My Bids</Text></TouchableOpacity>


      </View>
</ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    color: "white"
  },

  text: {
    
    overflow: 'hidden',
    borderRadius: 10,
    paddingTop: "5%",
    //paddingBottom: 10,
    //paddingRight: 20,
    //paddingLeft: 20,
    backgroundColor: "#050f2f",
    color: "white",
    height: 70,
    width: 300,
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 25






  },
  container1: {
    backgroundColor: "white",
    height: 140,
    //textAlign: "center",
   flexDirection:"row",
    justifyContent:"space-around"
  },
  
  header:
  {
    color: "white",
    marginTop: 70,
    fontWeight: "bold",
    fontSize: 30
  },
  logout:
  {
    
    height: 40,
    width: 30,
    marginTop:50,
    marginLeft:150,
    
   
  },
  welcome:
  {
    backgroundColor: "gray",
    textAlign: "center",
    borderRadius: 15,
    justifyContent: "space-around",
   // borderWidth: 1,
  borderColor: "#737373",
    marginTop: 50,
    fontSize:18,
    padding:"1%",
    
  },
  ImageIconStyle: {
    //padding: 25,
    //marginBottom:200,
    height: 120,
    width: 130,
    resizeMode: 'stretch',
   marginTop:30,
   
    
    },
    borderCon:
    {
      marginTop:50,
      borderColor:"red",
      width:200,
      height:430,
      //borderRightWidth:10,
      borderWidth:10
      
    },
    borderConBot1:
    {
      marginTop:50,
      
    },
    tenderInfo:
    {
      fontSize:50,
      //marginTop:20,
      color:"#050f2f",
      //marginLeft:175
      textAlign: "center"
    },
    tenderInfo1:
    {
      fontSize:20,
      //marginTop:20,
      color:"#050f2f",
     // marginLeft:125
     textAlign: "center",
     paddingBottom:40
    }
    
});

export default Main;



*/

/*
*/



import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity,Alert,Image,ScrollView} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';



const Main = ({ navigation }) => {
  const [organization, setOrganization] = useState([]);
  
  const[tenders,settenders]=useState([]);
  const [bids, setbids] = useState([]);
      
      
        
      useEffect(()=>{

        const CancelToken = axios.CancelToken;
    const source = CancelToken.source();


    const loadData = () =>{
    try{
        axios.get('https://etender-backend.herokuapp.com/api/publish-tender/',{ cancelToken: source.token }).then(
          response =>{
           settenders(response.data)
            show()

           
        })} 
        catch (error) {
          if (axios.isCancel(error)) {
            console.log("cancelled");
          } else {
            throw error;
          }
        }
      }

        loadData();
        return () => {
          source.cancel();
        };
          },[])

          
          useEffect(() => {


            const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const loadData = () =>{
    try{
            axios.get('https://etender-backend.herokuapp.com/api/bid/',{ cancelToken: source.token }).then(
              response => {
                setbids(response.data)
                show()
        
              })}
              catch (error) {
                if (axios.isCancel(error)) {
                  console.log("cancelled");
                } else {
                  throw error;
                }
              }
            }

            loadData();
            return () => {
              source.cancel();
            };
          }, [])
        
         
          const show = async () => {

            setOrganization(await AsyncStorage.getItem("organization"));
          }
        
          const activeTenders = tenders.filter(x=>x.organization_name===organization && x.availibility==="Active")
          
          const acceptedBids = bids.filter(x=>x.postedBy===organization && x.status==="Approved")
          const reviewBids = bids.filter(x=>x.postedBy===organization && x.status==="Under Review")
         
          
  
  return (
    <View style={{backgroundColor:"white"}}>

<ScrollView>
      <View style={styles.container1}>
      <Image
     
     source={require('../assets/logo.png')}
style={styles.ImageIconStyle}
           
      />
        <TouchableOpacity  onPress={() => {
           
            Alert.alert(
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {

                   
                    AsyncStorage.clear();
                   
                    navigation.replace('Login');
                  },
                },
              ],
              {cancelable: false},
            );
          }}><Image
     
          source={require('../assets/logout.jpg')}
     
          style={styles.logout}
           /></TouchableOpacity>
      </View>
      <View style={styles.welcome}>

<Text style={{ color: "white", textAlign: "center", fontSize:18 }} >Welcome, {organization}</Text>

</View>
<View style={styles.borderConBot1}>
   <Text style={styles.tenderInfo}>{activeTenders.length}</Text>
   <Text style={styles.tenderInfo1}>Active Tenders</Text>

   <Text style={styles.tenderInfo}>{acceptedBids.length}</Text>
   <Text style={styles.tenderInfo1}>Accepted Bids</Text>


   <Text style={styles.tenderInfo}>{reviewBids.length}</Text>
   <Text style={styles.tenderInfo1}>Bids Under Review</Text>
        </View>
      <View style={styles.container}>

        
        
        <TouchableOpacity style={{ marginTop: "2%",marginBottom:"2%" }} onPress={() => { navigation.navigate('myTenders') }} ><Text style={styles.text}> My Tender</Text></TouchableOpacity>
        <TouchableOpacity style={{ marginTop: "5%",marginBottom:"5%" }} onPress={() => { navigation.navigate('myBids') }} ><Text style={styles.text}>  My Bids</Text></TouchableOpacity>


      </View>
</ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    color: "white"
  },

  text: {
    
    overflow: 'hidden',
    borderRadius: 10,
    paddingTop: "5%",
    //paddingBottom: 10,
    //paddingRight: 20,
    //paddingLeft: 20,
    backgroundColor: "#050f2f",
    color: "white",
    height: 70,
    width: 300,
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 25






  },
  container1: {
    backgroundColor: "white",
    height: 140,
    //textAlign: "center",
   flexDirection:"row",
    justifyContent:"space-around"
  },
  
  header:
  {
    color: "white",
    marginTop: 70,
    fontWeight: "bold",
    fontSize: 30
  },
  logout:
  {
    
    height: 40,
    width: 30,
    marginTop:50,
    marginLeft:150,
    
   
  },
  welcome:
  {
    backgroundColor: "gray",
    textAlign: "center",
    borderRadius: 15,
    justifyContent: "space-around",
   // borderWidth: 1,
  borderColor: "#737373",
    marginTop: 50,
    fontSize:18,
    padding:"1%",
    
  },
  ImageIconStyle: {
    //padding: 25,
    //marginBottom:200,
    height: 120,
    width: 130,
    resizeMode: 'stretch',
   marginTop:30,
   
    
    },
    borderCon:
    {
      marginTop:50,
      borderColor:"red",
      width:200,
      height:430,
      //borderRightWidth:10,
      borderWidth:10
      
    },
    borderConBot1:
    {
      marginTop:50,
      
    },
    tenderInfo:
    {
      fontSize:50,
      //marginTop:20,
      color:"#050f2f",
      //marginLeft:175
      textAlign: "center"
    },
    tenderInfo1:
    {
      fontSize:20,
      //marginTop:20,
      color:"#050f2f",
     // marginLeft:125
     textAlign: "center",
     paddingBottom:40
    }
    
});

export default Main;











