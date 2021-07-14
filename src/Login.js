

import React, { useState } from 'react';
import { CommonActions } from '@react-navigation/native';
import axios from 'axios';
import { Formik } from 'formik';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from './Loader';
import { useHeaderHeight } from '@react-navigation/stack';



axios.defaults.baseURL = "https://etender-backend.herokuapp.com/api/"


  ;
const Login = ({ navigation }) => {
  var STORAGE_KEY = 'id_token';

  const headerHeight = useHeaderHeight()
  const [loading, setLoading] = useState(false);



  const LoginHandler = async ({ email, password }) => {



    setLoading(true);
    try {
      const response = await axios.post('/login/', {
        email,
        password,
      })



      const responseData = (response.data);
      

      if (responseData) {

        await AsyncStorage.setItem("email", responseData.email);
        await AsyncStorage.setItem("organization", responseData.organization_name);
        await AsyncStorage.setItem(STORAGE_KEY, responseData.tokens);
        setLoading(false);
        navigation.dispatch(
          CommonActions.reset({

            index: 0,
            routes: [
              { name: 'Main' },

            ],
          }


          )
        );
      }
    } catch (error) {
      setLoading(false);
      alert("invalid email or password")
      console.log(error)
    }
  }
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, formikActions) => {
        LoginHandler(values);
      }}>
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,

      }) => (

        <View style={styles.container}>
          <Loader loading={loading} />
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <View >
              <Image

                source={require('../assets/logo.png')}
                style={styles.ImageIconStyle}

              />


            </View>


            <KeyboardAvoidingView
              keyboardVerticalOffset={headerHeight + 20}
              style={{ flex: 0 }}
              behavior="padding" >
              <View style={styles.action}>

                <TextInput
                  value={values.email}
                  onBlur={handleBlur('email')}
                  onChangeText={handleChange('email')}
                  placeholder="Enter Email"
                  placeholderTextColor="#050f2f"
                  style={styles.input}
                  autoCapitalize="none"

                />

              </View>

              <View style={styles.action}>

                <TextInput
                  placeholder="Enter Password"
                  placeholderTextColor="#050f2f"
                  style={styles.input}
                  autoCapitalize="none"
                  value={values.password}
                  onBlur={handleBlur('password')}
                  onChangeText={handleChange('password')}
                  secureTextEntry

                />
              </View>

              <View >
                <TouchableOpacity

                  onPress={handleSubmit}

                >

                  <Text style={styles.button}>Login</Text>

                </TouchableOpacity>

              </View>






            </KeyboardAvoidingView>


          </ScrollView>
        </View>
      )
      }
    </Formik>

  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: "flex-start",


  },


  input: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 0.3,
    textAlign: "center",



  },
  button: {
    fontSize: 20,
    fontSize: 20,
    color: 'white',
    backgroundColor: "#050f2f",
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "#16c79a",
    marginTop: 20,
    padding: 10,
    width: 90,
    height: 45,
    textAlign: "center",
    marginLeft: 100,
    borderRadius: 10,
    overflow: 'hidden'




  },
  ImageIconStyle: {
    
    marginBottom: 200,
    height: 250,
    width: 250,
    resizeMode: 'stretch',
    marginTop: 80

  }
});