import * as React from "react";
import { StyleSheet, View, Text, Image, ImageBackground, ScrollView,  TouchableOpacity } from "react-native";


const HomePage = () =>{
    
      
    return(
        <View style={{ flex: 1 }}>
            <ImageBackground  source={require('@/assets/images/background.png')} style={styles.backgroundImage}>
            <ScrollView>
                <View style={{margin: 20, marginTop: 10}}>
                <View style={{ marginTop: 50, flexDirection: "row", justifyContent:"space-between" }}>
                <Image source={require('@/assets/imagesHP/Subtract.png')}/>
                <Image source={require('@/assets/imagesHP/mail.png')}/>
                </View>

                <View style={{
            width: "auto",
            height: 35,
            marginTop:50,
            borderRadius: 20,
            borderWidth: 0.5,
            backgroundColor: "#202327",
            justifyContent: "center", 
            alignItems: "center",
            }}>
           
              <Text style={{color:"#C0C0C0", fontWeight: "bold" }}>
             Search  for  creators
              </Text>

          </View>

          <View style={{margin:16}}>
          <Text style={{
            color:"white",
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 4,
          }}>
          Redeem Earnings
          </Text>
          <Text style={{
            color:"#C0C0C0", marginBottom: 50
          }}>
          People you follow are tunning in now
          </Text>
          
          <View style={{ flexDirection: "row", }}>
            <Image source={require('@/assets/imagesHP/mic-fill.png')}/>
            <Text style={{color:"white",fontSize: 15,fontWeight: "bold",}}>You follow the Host</Text>
          </View>


   
<View style={{ position: "relative", width: "auto", height: 200, marginTop: 20 }}>
  <Image
    source={require("@/assets/imagesHP/boxGrdnt.png")}
    style={{ width: "100%", height: "100%", borderRadius: 13 }}
  />

  <View
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      paddingHorizontal: 10,
      flexDirection: "column",
      justifyContent: "flex-start",
      height: "auto",
    }}
  >
    <View style={{
        flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 11
      }}>
    <Text style={{ color: "white", fontSize: 23 }}>LIVE</Text>
    <Image source={require("@/assets/imagesHP/infoDots.png")} />
    </View>
   
    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Are You Ready?</Text>
    <Text style={{ color: "white",}}>20 listening</Text>
  </View>

  {/* Box for Speaker */}
  <View
    style={{
      position: "absolute",
      bottom: 10,
      left: 10,
      backgroundColor: "rgba(255, 255, 255, 0.5)", // Example background color
      padding: 5, // Padding around the text
      borderRadius: 5, // Rounded corners
    }}
  >
    <Text style={{ color: "black", fontSize: 16 }}>Speaker</Text>
  </View>
</View>
<View style={{ position: "relative", width: "auto", height: 200, marginTop: 20 }}>
  <Image
    source={require("@/assets/imagesHP/boxGrdnt.png")}
    style={{ width: "100%", height: "100%", borderRadius: 13 }}
  />

  <View
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      paddingHorizontal: 10,
      flexDirection: "column",
      justifyContent: "flex-start",
      height: "auto",
    }}
  >
    <View style={{
        flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 11
      }}>
    <Text style={{ color: "white", fontSize: 23 }}>LIVE</Text>
    <Image source={require("@/assets/imagesHP/infoDots.png")} />
    </View>
   
    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Are You Ready?</Text>
    <Text style={{ color: "white",}}>20 listening</Text>
  </View>

  {/* Box for Speaker */}
  <View
    style={{
      position: "absolute",
      bottom: 10,
      left: 10,
      backgroundColor: "rgba(255, 255, 255, 0.5)", // Example background color
      padding: 5, // Padding around the text
      borderRadius: 5, // Rounded corners
    }}
  >
    <Text style={{ color: "black", fontSize: 16 }}>Speaker</Text>
  </View>
</View>
<View style={{ position: "relative", width: "auto", height: 200, marginTop: 20 }}>
  <Image
    source={require("@/assets/imagesHP/boxGrdnt.png")}
    style={{ width: "100%", height: "100%", borderRadius: 13 }}
  />

  <View
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      paddingHorizontal: 10,
      flexDirection: "column",
      justifyContent: "flex-start",
      height: "auto",
    }}
  >
    <View style={{
        flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 11
      }}>
    <Text style={{ color: "white", fontSize: 23 }}>LIVE</Text>
    <Image source={require("@/assets/imagesHP/infoDots.png")} />
    </View>
   
    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Are You Ready?</Text>
    <Text style={{ color: "white",}}>20 listening</Text>
  </View>

  <View
    style={{
      position: "absolute",
      bottom: 10,
      left: 10,
      backgroundColor: "rgba(255, 255, 255, 0.5)", 
      padding: 5, // Padding around the text
      borderRadius: 5, // Rounded corners
    }}
  >
    <Text style={{ color: "black", fontSize: 16 }}>Speaker</Text>
  </View>
</View>
       
          </View>
     
        </View>
             </ScrollView>
  
            </ImageBackground>
        </View>

    );
};

export default HomePage;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        
    backgroundColor:"#fff"
      },
      navBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 60,
        borderTopWidth: 0.5,
        backgroundColor: "#000",
      },
      navItem: {
        alignItems: "center",
      },
      navIcon: {
        width: 24,
        height: 24,
        marginBottom: 4,
      },
      navText: {
        color: "#C0C0C0",
        fontSize: 12,
      },
    
});