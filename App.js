import React,{useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppStackNavigator,AuthStackNavigator } from "./src/StackNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {


  const [organization, setOrganization] = useState([]);
  
  const show = async () => {

    setOrganization(await AsyncStorage.getItem("id_token"));
  }


  show()

  
  
  


  show()

  return (
    
    <NavigationContainer>
      {
      organization === null ? <AuthStackNavigator/>:<AppStackNavigator/>

    }
    </NavigationContainer>
  );
  
  
};
export default App;