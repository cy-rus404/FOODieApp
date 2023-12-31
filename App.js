import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
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
function DetailsScreen({ navigation }) {
  return (
    <ScrollView style={styles.details}>
      <Text style={styles.text}>Welcome To FOODieApp</Text>
      <Text style={styles.small}>Order your delicious meal here</Text>
      <Image style={styles.img} source={require('../FOODieApp/assets/food.jpg')} />

      <Text style={styles.spam}>Meals Available Today</Text>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Waakye")}><Image style={styles.pic} source={require('../FOODieApp/assets/waakye.jpeg')}></Image></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Beans")}><Image style={styles.pic} source={require('../FOODieApp/assets/beans.jpeg')}></Image></TouchableOpacity>
      </View>

      <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Banku")}><Image style={styles.pic} source={require('../FOODieApp/assets/banku.jpeg')}></Image></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Okro")}><Image style={styles.pic} source={require('../FOODieApp/assets/okro.jpeg')}></Image></TouchableOpacity>

      </View>
      <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Plantain")}><Image style={styles.pic} source={require('../FOODieApp/assets/plantain.jpeg')}></Image></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Kenkey")}><Image style={styles.pic} source={require('../FOODieApp/assets/kenkey.jpeg')}></Image></TouchableOpacity>

      </View>
      <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Sweet")}><Image style={styles.pic} source={require('../FOODieApp/assets/sweet.jpeg')}></Image></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Rice")}><Image style={styles.pic} source={require('../FOODieApp/assets/rice.jpeg')}></Image></TouchableOpacity>

      </View>
      <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Koko")}><Image style={styles.pic} source={require('../FOODieApp/assets/koko.jpeg')}></Image></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Yam")}><Image style={styles.pic} source={require('../FOODieApp/assets/yam.jpeg')}></Image></TouchableOpacity>

      </View>
      <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Fish")}><Image style={styles.pic} source={require('../FOODieApp/assets/fish.jpeg')}></Image></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Khebab")}><Image style={styles.pic} source={require('../FOODieApp/assets/khebab.jpeg')}></Image></TouchableOpacity>

      </View>
    </ScrollView>
  );
}
                                                          //SCREENS
function WaakyeScreen({ navigation }) {

  return (
    <View style={styles.food}>
      <Image style={styles.waakye} source={require("../FOODieApp/assets/waakye.jpeg")} />
      <Text style={styles.daavi}>DAAVI'S SPECIAL WAAKYE</Text>
      <Text style={styles.lorem}>Aliquip adipisicing veniam esse aliquip anim. Exercitation nostrud irure in aliqua consectetur sit qui cillum. Nisi ullamco labore sit excepteur do veniam id pariatur exercitation id deserunt deserunt ea. Quis proident eiusmod commodo magna sit excepteur tempor esse laboris consectetur aliqua velit deserunt in. Veniam adipisicing eiusmod ut occaecat elit aliqua ut non exercitation ea.

      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { Linking.openURL('tel:0279281332'); }}
      >
        <Text onPress={() => { Linking.openURL('tel:0279281332'); }} style={styles.appText}>CALL TO ORDER</Text>
      </TouchableOpacity>
    </View>
  )
}

function BeansScreen({ navigation }) {

  return (
    <View style={styles.food}>
      <Image style={styles.waakye} source={require("../FOODieApp/assets/beans.jpeg")} />
      <Text style={styles.daavi}>DAAVI'S SPECIAL BEANS</Text>
      <Text style={styles.lorem}>Aliquip adipisicing veniam esse aliquip anim. Exercitation nostrud irure in aliqua consectetur sit qui cillum. Nisi ullamco labore sit excepteur do veniam id pariatur exercitation id deserunt deserunt ea. Quis proident eiusmod commodo magna sit excepteur tempor esse laboris consectetur aliqua velit deserunt in. Veniam adipisicing eiusmod ut occaecat elit aliqua ut non exercitation ea.

      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { Linking.openURL('tel:0279281332'); }}
      >
        <Text onPress={() => { Linking.openURL('tel:0279281332'); }} style={styles.appText}>CALL TO ORDER</Text>
      </TouchableOpacity>
    </View>
  )
}
function BankuScreen({ navigation }) {

  return (
    <View style={styles.food}>
      <Image style={styles.waakye} source={require("../FOODieApp/assets/banku.jpeg")} />
      <Text style={styles.daavi}>DAAVI'S SPECIAL BANKU</Text>
      <Text style={styles.lorem}>Aliquip adipisicing veniam esse aliquip anim. Exercitation nostrud irure in aliqua consectetur sit qui cillum. Nisi ullamco labore sit excepteur do veniam id pariatur exercitation id deserunt deserunt ea. Quis proident eiusmod commodo magna sit excepteur tempor esse laboris consectetur aliqua velit deserunt in. Veniam adipisicing eiusmod ut occaecat elit aliqua ut non exercitation ea.

      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { Linking.openURL('tel:0279281332'); }}
      >
        <Text onPress={() => { Linking.openURL('tel:0279281332'); }} style={styles.appText}>CALL TO ORDER</Text>
      </TouchableOpacity>
    </View>
  )
}
function OkroScreen({ navigation }) {

  return (
    <View style={styles.food}>
      <Image style={styles.waakye} source={require("../FOODieApp/assets/okro.jpeg")} />
      <Text style={styles.daavi}>DAAVI'S SPECIAL OKRO</Text>
      <Text style={styles.lorem}>Aliquip adipisicing veniam esse aliquip anim. Exercitation nostrud irure in aliqua consectetur sit qui cillum. Nisi ullamco labore sit excepteur do veniam id pariatur exercitation id deserunt deserunt ea. Quis proident eiusmod commodo magna sit excepteur tempor esse laboris consectetur aliqua velit deserunt in. Veniam adipisicing eiusmod ut occaecat elit aliqua ut non exercitation ea.

      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { Linking.openURL('tel:0279281332'); }}
      >
        <Text onPress={() => { Linking.openURL('tel:0279281332'); }} style={styles.appText}>CALL TO ORDER</Text>
      </TouchableOpacity>
    </View>
  )
}
function PlantainScreen({ navigation }) {

  return (
    <View style={styles.food}>
      <Image style={styles.waakye} source={require("../FOODieApp/assets/plantain.jpeg")} />
      <Text style={styles.daavi}>DAAVI'S SPECIAL PLANTAIN</Text>
      <Text style={styles.lorem}>Aliquip adipisicing veniam esse aliquip anim. Exercitation nostrud irure in aliqua consectetur sit qui cillum. Nisi ullamco labore sit excepteur do veniam id pariatur exercitation id deserunt deserunt ea. Quis proident eiusmod commodo magna sit excepteur tempor esse laboris consectetur aliqua velit deserunt in. Veniam adipisicing eiusmod ut occaecat elit aliqua ut non exercitation ea.

      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { Linking.openURL('tel:0279281332'); }}
      >
        <Text onPress={() => { Linking.openURL('tel:0279281332'); }} style={styles.appText}>CALL TO ORDER</Text>
      </TouchableOpacity>
    </View>
  )
}
function KenkeyScreen({ navigation }) {

  return (
    <View style={styles.food}>
      <Image style={styles.waakye} source={require("../FOODieApp/assets/kenkey.jpeg")} />
      <Text style={styles.daavi}>DAAVI'S SPECIAL KENKEY</Text>
      <Text style={styles.lorem}>Aliquip adipisicing veniam esse aliquip anim. Exercitation nostrud irure in aliqua consectetur sit qui cillum. Nisi ullamco labore sit excepteur do veniam id pariatur exercitation id deserunt deserunt ea. Quis proident eiusmod commodo magna sit excepteur tempor esse laboris consectetur aliqua velit deserunt in. Veniam adipisicing eiusmod ut occaecat elit aliqua ut non exercitation ea.

      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { Linking.openURL('tel:0279281332'); }}
      >
        <Text onPress={() => { Linking.openURL('tel:0279281332'); }} style={styles.appText}>CALL TO ORDER</Text>
      </TouchableOpacity>
    </View>
  )
}
function SweetScreen({ navigation }) {

  return (
    <View style={styles.food}>
      <Image style={styles.waakye} source={require("../FOODieApp/assets/sweet.jpeg")} />
      <Text style={styles.daavi}>DAAVI'S SPECIAL YOGHURT</Text>
      <Text style={styles.lorem}>Aliquip adipisicing veniam esse aliquip anim. Exercitation nostrud irure in aliqua consectetur sit qui cillum. Nisi ullamco labore sit excepteur do veniam id pariatur exercitation id deserunt deserunt ea. Quis proident eiusmod commodo magna sit excepteur tempor esse laboris consectetur aliqua velit deserunt in. Veniam adipisicing eiusmod ut occaecat elit aliqua ut non exercitation ea.

      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { Linking.openURL('tel:0279281332'); }}
      >
        <Text onPress={() => { Linking.openURL('tel:0279281332'); }} style={styles.appText}>CALL TO ORDER</Text>
      </TouchableOpacity>
    </View>
  )
}
function RiceScreen({ navigation }) {

  return (
    <View style={styles.food}>
      <Image style={styles.waakye} source={require("../FOODieApp/assets/rice.jpeg")} />
      <Text style={styles.daavi}>DAAVI'S SPECIAL FRIED RICE</Text>
      <Text style={styles.lorem}>Aliquip adipisicing veniam esse aliquip anim. Exercitation nostrud irure in aliqua consectetur sit qui cillum. Nisi ullamco labore sit excepteur do veniam id pariatur exercitation id deserunt deserunt ea. Quis proident eiusmod commodo magna sit excepteur tempor esse laboris consectetur aliqua velit deserunt in. Veniam adipisicing eiusmod ut occaecat elit aliqua ut non exercitation ea.

      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { Linking.openURL('tel:0279281332'); }}
      >
        <Text onPress={() => { Linking.openURL('tel:0279281332'); }} style={styles.appText}>CALL TO ORDER</Text>
      </TouchableOpacity>
    </View>
  )
}

function KokoScreen({ navigation }) {

  return (
    <View style={styles.food}>
      <Image style={styles.waakye} source={require("../FOODieApp/assets/koko.jpeg")} />
      <Text style={styles.daavi}>DAAVI'S SPECIAL KOOKO</Text>
      <Text style={styles.lorem}>Aliquip adipisicing veniam esse aliquip anim. Exercitation nostrud irure in aliqua consectetur sit qui cillum. Nisi ullamco labore sit excepteur do veniam id pariatur exercitation id deserunt deserunt ea. Quis proident eiusmod commodo magna sit excepteur tempor esse laboris consectetur aliqua velit deserunt in. Veniam adipisicing eiusmod ut occaecat elit aliqua ut non exercitation ea.

      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { Linking.openURL('tel:0279281332'); }}
      >
        <Text onPress={() => { Linking.openURL('tel:0279281332'); }} style={styles.appText}>CALL TO ORDER</Text>
      </TouchableOpacity>
    </View>
  )
}
function YamScreen({ navigation }) {

  return (
    <View style={styles.food}>
      <Image style={styles.waakye} source={require("../FOODieApp/assets/yam.jpeg")} />
      <Text style={styles.daavi}>DAAVI'S SPECIAL YAM</Text>
      <Text style={styles.lorem}>Aliquip adipisicing veniam esse aliquip anim. Exercitation nostrud irure in aliqua consectetur sit qui cillum. Nisi ullamco labore sit excepteur do veniam id pariatur exercitation id deserunt deserunt ea. Quis proident eiusmod commodo magna sit excepteur tempor esse laboris consectetur aliqua velit deserunt in. Veniam adipisicing eiusmod ut occaecat elit aliqua ut non exercitation ea.

      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { Linking.openURL('tel:0279281332'); }}
      >
        <Text onPress={() => { Linking.openURL('tel:0279281332'); }} style={styles.appText}>CALL TO ORDER</Text>
      </TouchableOpacity>
    </View>
  )
}
function FishScreen({ navigation }) {

  return (
    <View style={styles.food}>
      <Image style={styles.waakye} source={require("../FOODieApp/assets/fish.jpeg")} />
      <Text style={styles.daavi}>DAAVI'S SPECIAL TILAPIA</Text>
      <Text style={styles.lorem}>Aliquip adipisicing veniam esse aliquip anim. Exercitation nostrud irure in aliqua consectetur sit qui cillum. Nisi ullamco labore sit excepteur do veniam id pariatur exercitation id deserunt deserunt ea. Quis proident eiusmod commodo magna sit excepteur tempor esse laboris consectetur aliqua velit deserunt in. Veniam adipisicing eiusmod ut occaecat elit aliqua ut non exercitation ea.

      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { Linking.openURL('tel:0279281332'); }}
      >
        <Text onPress={() => { Linking.openURL('tel:0279281332'); }} style={styles.appText}>CALL TO ORDER</Text>
      </TouchableOpacity>
    </View>
  )
}
function KhebabScreen({ navigation }) {

  return (
    <View style={styles.food}>
      <Image style={styles.waakye} source={require("../FOODieApp/assets/khebab.jpeg")} />
      <Text style={styles.daavi}>ABOTSI'S SPECIAL KHEBAB</Text>
      <Text style={styles.lorem}>Aliquip adipisicing veniam esse aliquip anim. Exercitation nostrud irure in aliqua consectetur sit qui cillum. Nisi ullamco labore sit excepteur do veniam id pariatur exercitation id deserunt deserunt ea. Quis proident eiusmod commodo magna sit excepteur tempor esse laboris consectetur aliqua velit deserunt in. Veniam adipisicing eiusmod ut occaecat elit aliqua ut non exercitation ea.

      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { Linking.openURL('tel:0279281332'); }}
      >
        <Text onPress={() => { Linking.openURL('tel:0279281332'); }} style={styles.appText}>CALL TO ORDER</Text>
      </TouchableOpacity>
    </View>
  )
}

                                                        //STACK SCREEN

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
              color: "#fff"
            },
          }}
        />
        <Stack.Screen name="Details"
          component={DetailsScreen}
          options={
            {
              title: "Main Screen",
              headerStyle: {
                backgroundColor: "#232D3F",
                color: "#fff",
              },
              headerTitleStyle: {
                color: "#fff"
              }
            }
          }
        />
        <Stack.Screen name="Waakye"
          component={WaakyeScreen}
          options={
            {
              title: "WAAKYE",
              color: "#fff",
              headerStyle: {
                backgroundColor: "#232D3F",
              },
              headerTitleStyle: {
                color: "#fff"
              }
            }
          }
        />
        <Stack.Screen name="Beans"
          component={BeansScreen}
          options={
            {
              title: "Beans",
              color: "#fff",
              headerStyle: {
                backgroundColor: "#232D3F",
              },
              headerTitleStyle: {
                color: "#fff"
              }
            }
          }
        />
                <Stack.Screen name="Banku"
          component={BankuScreen}
          options={
            {
              title: "Banku",
              color: "#fff",
              headerStyle: {
                backgroundColor: "#232D3F",
              },
              headerTitleStyle: {
                color: "#fff"
              }
            }
          }
        />
<Stack.Screen name="Okro"
          component={OkroScreen}
          options={
            {
              title: "Okro Stew",
              color: "#fff",
              headerStyle: {
                backgroundColor: "#232D3F",
              },
              headerTitleStyle: {
                color: "#fff"
              }
            }
          }
        />
<Stack.Screen name="Plantain"
          component={PlantainScreen}
          options={
            {
              title: "Plantain",
              color: "#fff",
              headerStyle: {
                backgroundColor: "#232D3F",
              },
              headerTitleStyle: {
                color: "#fff"
              }
            }
          }
        />

<Stack.Screen name="Kenkey"
          component={KenkeyScreen}
          options={
            {
              title: "Plantain",
              color: "#fff",
              headerStyle: {
                backgroundColor: "#232D3F",
              },
              headerTitleStyle: {
                color: "#fff"
              }
            }
          }
        />
<Stack.Screen name="Sweet"
          component={SweetScreen}
          options={
            {
              title: "Sweet",
              color: "#fff",
              headerStyle: {
                backgroundColor: "#232D3F",
              },
              headerTitleStyle: {
                color: "#fff"
              }
            }
          }
        />
<Stack.Screen name="Rice"
          component={RiceScreen}
          options={
            {
              title: "Rice",
              color: "#fff",
              headerStyle: {
                backgroundColor: "#232D3F",
              },
              headerTitleStyle: {
                color: "#fff"
              }
            }
          }
        />
<Stack.Screen name="Koko"
          component={KokoScreen}
          options={
            {
              title: "Koko",
              color: "#fff",
              headerStyle: {
                backgroundColor: "#232D3F",
              },
              headerTitleStyle: {
                color: "#fff"
              }
            }
          }
        />
<Stack.Screen name="Yam"
          component={YamScreen}
          options={
            {
              title: "Yam",
              color: "#fff",
              headerStyle: {
                backgroundColor: "#232D3F",
              },
              headerTitleStyle: {
                color: "#fff"
              }
            }
          }
        />
<Stack.Screen name="Fish"
          component={FishScreen}
          options={
            {
              title: "Yam",
              color: "#fff",
              headerStyle: {
                backgroundColor: "#232D3F",
              },
              headerTitleStyle: {
                color: "#fff"
              }
            }
          }
        />
        <Stack.Screen name="Khebab"
          component={KhebabScreen}
          options={
            {
              title: "Khebab",
              color: "#fff",
              headerStyle: {
                backgroundColor: "#232D3F",
              },
              headerTitleStyle: {
                color: "#fff"
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
    color: "#fff",
    fontWeight: "bold",
  },

  text: {
    top: 50,
  },
  details: {
    flexGrow: 1,
    flex: 1,
    backgroundColor: "#232D3F",
  },

  text: {
    fontSize: 30,
    top: 20,
    fontWeight: 'bold',
    alignSelf: "center",
    color: "#ffff",
  },

  img: {
    width: 340,
    height: 200,
    alignSelf: "center",
    top: 50,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#fff"
  },
  small: {
    alignSelf: "center",
    top: 25,
    color: "#fff",
    fontWeight: "bold",
  },

  spam: {
    alignSelf: "center",
    color: "#fff",
    top: 70,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },

  pic: {
    width: 180,
    height: 130,
    top: 100,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#fff",

  },
  food: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#232D3F"

  },
  waakye: {
    width: 415,
    height: 300,
  },

  daavi: {
    color: "#ffd700",
    alignSelf: "center",
    top: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  lorem: {
    top: 80,
    fontSize: 16,
    color: "#fff",
    justifyContent: "center",
    textAlign: "justify",

  },
  appText: {
    fontSize: 22,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
    top: 6,
    textTransform: "uppercase",
  },
  button: {
    top: 220,
    alignItems: "center",
    alignSelf: "center",
    elevation: 8,
    backgroundColor: "white",
    borderRadius: 20,
    width: 400,
    height: 60,
    paddingVertical: 10,
    paddingHorizontal: 12,
  }
});

export default App;
