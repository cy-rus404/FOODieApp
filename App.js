import * as React from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//NAVIGATION SCREEN

function HomeScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <TouchableOpacity
        style={styles.appButtonContainer}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={styles.appButtonText}>Continue</Text>

      </TouchableOpacity>
      <Image style={styles.image} source={require("../FOODieApp/assets/burger.png")} />
      <Text style={styles.txt1}>Feast Your Senses With FOODie APP</Text>

    </View>

  );
}
  //DETAILS SCREEN
function DetailsScreen({navigation}) {
  return (
    <ScrollView style={styles.details}>
      <Text style={styles.text}>Welcome To FOODieApp</Text>
      <Text style={styles.small}>Order your delicious meal here</Text>
      <Image style={styles.img} source={require('../FOODieApp/assets/food.jpg')}/>

      <Text style={styles.spam}>Meals Available Today</Text>
      <Pressable onPress={() => navigation.navigate("Details")} >
        <Image 
          source={require("../FOODieApp/assets/burger.png")}
          style={styles.image}
        />
      </Pressable>
        <View style={styles.container}>
        <Image style={styles.pic} source={require('../FOODieApp/assets/waakye.jpeg')}></Image>
        <Image style={styles.pic} source={require('../FOODieApp/assets/beans.jpeg')}></Image>

        </View>

        <View style={styles.container}>
        <Image style={styles.pic} source={require('../FOODieApp/assets/banku.jpeg')}></Image>
        <Image style={styles.pic} source={require('../FOODieApp/assets/okro.jpeg')}></Image>

        </View>
        <View style={styles.container}>
        <Image style={styles.pic} source={require('../FOODieApp/assets/plantain.jpeg')}></Image>
        <Image style={styles.pic} source={require('../FOODieApp/assets/kenkey.jpeg')}></Image>

        </View>
        <View style={styles.container}>
        <Image style={styles.pic} source={require('../FOODieApp/assets/sweet.jpeg')} onPress={()=>console.log("hi")}></Image>
        <Image style={styles.pic} source={require('../FOODieApp/assets/rice.jpeg')}></Image>

        </View>
        <View style={styles.container}>
        <Image style={styles.pic} source={require('../FOODieApp/assets/koko.jpeg')}></Image>
        <Image style={styles.pic} source={require('../FOODieApp/assets/yam.jpeg')}></Image>

        </View>
        <View style={styles.container}>
        <Image style={styles.pic} source={require('../FOODieApp/assets/fish.jpeg')}></Image>
        <Image style={styles.pic} source={require('../FOODieApp/assets/khebab.jpeg')}></Image>

        </View>


    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="FOODie APP"
          component={HomeScreen}
          options={{
            title: "FOODie APP",
            headerStyle: {
              backgroundColor: "#232D3F",
            },
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen name="Details"
          component={DetailsScreen}
          options={
            {
              title: "Main Screen",
              color:"#fff",
              headerStyle:{
                backgroundColor:"#232D3F",
              }
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



//STYLES
const styles = StyleSheet.create({
  txt: {
    width: 360,
    height: 60,
    borderRadius: 30,
    backgroundColor: "red",
    top: 50,
  },
  appButtonContainer: {
    top: 690,
    alignItems: "center",
    alignSelf: "center",
    elevation: 8,
    backgroundColor: "red",
    borderRadius: 20,
    width: 400,
    height: 60,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    top: 7,
    textTransform: "uppercase",
  },
  image: {
    width: 400,
    height: 300,
    alignSelf: "center",
    top: 80
  },
  background: {
    flex: 1,
    width: 600,
    height: 720,
    backgroundColor: "#232D3F",
    alignSelf: "center"
  },
  txt1: {
    alignSelf: "center",
    top: 150,
    fontSize: 20,
    color:"#fff",
    fontWeight: "bold",
  },

  text:{
    top:50,
  },
  details:{
    flex:1,
    backgroundColor:"#232D3F",
  },

  text:{
    fontSize:30,
    top:20,
    fontWeight:'bold',
    alignSelf:"center",
    color:"#ffff",
  },

  img:{
    width:340,
    height:200,
    alignSelf:"center",
    top:50,
    borderRadius:20,
    borderWidth:3,
    borderColor:"#fff"
  },
  small:{
    alignSelf:"center",
    top:25,
    color:"#fff",
    fontWeight:"bold",
  },

  spam:{
    alignSelf:"center",
    color:"#fff",
    top:70,
  },
  container:{
    flexDirection:"row",
    justifyContent:"space-around",
marginBottom:30,    
  },

  pic:{
    width:170,
    height:120,
    top:100,
    borderRadius:10,
    borderWidth:3,
    borderColor:"#fff",

  }
});

export default App;
