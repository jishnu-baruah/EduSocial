import * as React from "react";
import { StyleSheet, View, Text, Image, ImageBackground, ScrollView,  TouchableOpacity } from "react-native";

const RewardPage = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('@/assets/images/background.png')}
        style={styles.backgroundImage}
      >
        <ScrollView>
        <View style={{ margin: 20, marginTop: 100 }}>
          <View>
            <Text
              style={{
                fontSize: 24,
                color: "white",
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              Rewards
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row", 
              justifyContent: "space-between", 
              marginBottom: 40,
              
            }}
          >
            <View style={{width: 170,
                          height: 110,
                          paddingLeft: 15,
                          paddingTop: 11,
                          borderRadius: 13,
                          borderWidth: 0.5,
                          borderColor: "#ff471a",
                          backgroundColor: "rgba(220, 174, 56, 0.1)",
                          marginRight: 15
                        }}>
              <Image
                source={require('@/assets/images/starLogo.png')}
                style={{ width: 20, height: 20 }}
              />
              <Text
                style={{
                  color: "#808080",
                  marginTop: 20,
                }}
              >
                Total points
              </Text>
              <Text
                style={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: 20,
                }}
              >
                2303
              </Text>
            </View>

            <View style={{width: 130, 
                          height: 110,
                          paddingLeft: 15,
                          paddingTop: 11,
                          borderRadius: 13,
                          borderWidth: 0.5,
                          backgroundColor: "rgba(128, 128, 128, 0.4)"
                        }}>

              <Text
                style={styles.textRefer}
              >
                Refer and
              </Text>
              <Text
               style={styles.textRefer}
              >
                Earn
              </Text>
              <Text style={{color:"#C0C0C0", fontSize: 10, marginTop: 5}}>
              For every successful refer, get 100
              </Text>
            </View>

          </View>

          <Text style={{
            color:"white",
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 10
          }}>
            Daily Reward
          </Text>
          <Text style={{
            color:"#C0C0C0"
          }}>
          Claim reward every day to get a bonus points
          </Text>
          <View style={styles.smallBoxContainer}>
            {days.map((day, index) => (
              <View key={index} style={styles.smallBox}>
                <Text style={{ color: "#E2725B",
                 fontWeight: "bold",
                 textAlign: "center",
                 }}>{day}
                 </Text>
                 <Image source={require('@/assets/images/tick.png')} style={{alignItems: "center",}}/>
              </View>
            ))}
          </View>

          <Text style={{
            color:"white",
            fontSize: 24,
            fontWeight: "bold",
            marginTop: 16,
          }}>
          Redeem Earnings
          </Text>

          <View style={{
            width: "auto",
            height: 110,
            marginTop:20,
            borderRadius: 13,
            borderWidth: 0.5,
            backgroundColor: "black",
            justifyContent: "center", 
            alignItems: "center",
            }}>
           
              <Text style={{color:"#C0C0C0", }}>
              There no Coupons available at the moment
              </Text>

          </View>
          <Text style={{
            color:"white",
            fontSize: 24,
            fontWeight: "bold",
            marginTop: 16,
          }}>
          My Collectibles
          </Text>

          <View style={{
            width: "auto",
            height: 150,
            marginTop:20,
            borderRadius: 13,
            borderWidth: 0.5,
            backgroundColor: "black",
            justifyContent: "center", 
            alignItems: "center",
            }}>
           
              <Text style={{color:"#C0C0C0", }}>
              You don't have any Collectibles yet
              </Text>

          </View>
        </View>
        </ScrollView>
     
      </ImageBackground>
    </View>
  );
};

export default RewardPage;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor:"#fff"
  },
  textRefer: {
    color: "white",
    fontSize: 15,
    
  },
  smallBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  smallBox: {
    width: 47,
    height: 70,
    borderRadius: 5,
    backgroundColor: "rgba(255, 140, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  pointsBox: {
    width: 170,
    height: 110,
    paddingLeft: 15,
    paddingTop: 11,
    borderRadius: 13,
    borderWidth: 0.5,
    borderColor: "#ff471a",
    backgroundColor: "rgba(220, 174, 56, 0.1)",
    marginRight: 15,
  },
  referBox: {
    width: 130,
    height: 110,
    paddingLeft: 15,
    paddingTop: 11,
    borderRadius: 13,
    borderWidth: 0.5,
    backgroundColor: "rgba(128, 123, 128, 0.4)",
  },
  sectionTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 10,
  },
  infoBox: {
    width: "auto",
    height: 110,
    marginTop: 20,
    borderRadius: 13,
    borderWidth: 0.5,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
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
