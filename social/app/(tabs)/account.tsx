import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";

const AccountsPage: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);
  
    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
    };
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("@/assets/imagesAcc/background3.png")}
        style={styles.backgroundImage}
      >
        <ScrollView>
          <View style={{ margin: 20, marginTop: 60 }}>
            <View style={styles.container}>
            <TouchableOpacity onPress={toggleDrawer}>
        <Image
            source={require("@/assets/imagesAcc/Settings.png")}
        />
    </TouchableOpacity>
</View>

            <View  style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('@/assets/imagesAcc/profile.png')}/>
                <View  style={{margin: 20 }}>
                <Text style={styles.text}>Hacker House</Text>
                <Text style={{color: "white", fontSize: 14, }}> @HHG_24</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around',marginTop: 10,}}>
                <View style={{alignItems: 'center', marginRight: 23}}>
                    <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold',}}>0</Text>
                    <Text style={{fontSize: 14, color: 'white',}}>Following</Text>
                </View>
            <View style={{alignItems: 'center', marginRight: 16}}>
                <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold',}}>0</Text>
                <Text style={{fontSize: 14, color: 'white',}}>Followers</Text>
            </View>
            <TouchableOpacity onPress={() => {
        console.log('Edit Profile ');}}
        style={{  backgroundColor: 'grey', padding: 5, alignItems: 'center', marginTop: 10,borderRadius:10, width: 80}}>
                <Text style={{ color: 'white', fontSize: 14,}}>Edit Profile</Text>
            </TouchableOpacity>
      
                </View >
                </View>    
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
    <View style={{ backgroundColor: 'grey', padding: 5, alignItems: 'center', marginTop: 10, borderRadius: 10, width: 80 }}>
        <Text style={{ color: 'white', fontSize: 14, }}>Creator</Text>
    </View>
    <View style={{ backgroundColor: 'grey', padding: 5, alignItems: 'center', marginTop: 10, borderRadius: 10, width: 80 }}>
        <Image/>
        <Text style={{ color: 'white', fontSize: 14, }}>2.28k</Text>
    </View>
    <View style={{ backgroundColor: 'grey', padding: 5, alignItems: 'center', marginTop: 10, borderRadius: 10, width: 80 }}>
        <Text style={{ color: 'white', fontSize: 14, }}>Kolkata</Text>
    </View>
</View>
<View style={{ flexDirection: 'row',  justifyContent: 'space-between',marginTop: 20 }}>
  {[...Array(2)].map((_, index) => (
    <View key={index} style={[styles.Box, { backgroundColor: 'rgba(50,50,50,0.68)'}]} />
  ))}
</View>

{/* New medium-sized boxes section */}
<View style={{ flexDirection: 'row',  justifyContent: 'space-between',marginTop: 10 }}>
  {[...Array(2)].map((_, index) => (
    <View key={`medium-${index}`} style={[styles.Box, { backgroundColor: 'rgba(50,50,50,0.68)' }]} />
  ))}
</View>

<View style={{ backgroundColor: 'rgba(50,50,50,0.68)', height: 140, width:"auto", marginTop: 10, borderRadius:10, justifyContent: "center",}}>
    <View style={{ marginLeft:20}}>
    <View style={{  flexDirection: 'row',
    alignItems: 'center', marginBottom: 20}}>
    <Image source={require('@/assets/imagesAcc/PieChart.png')} style={{ marginRight: 10,}}/>
    <Text style={styles.text}>Points earned</Text>
    </View>
    <View style={styles.checkPoints}>
    <Image source={require('@/assets/imagesAcc/yellowPnt.png')} style={styles.CpointsColor} />
    <Text style={styles.textin}>Posts</Text>
    </View>
    <View style={styles.checkPoints}>
        <Image source={require('@/assets/imagesAcc/orngPnt.png')}style={styles.CpointsColor}/>
        <Text style={styles.textin}>Likes</Text>
    </View>
    <View style={styles.checkPoints}>
        <Image source={require('@/assets/imagesAcc/redPnt.png')} style={styles.CpointsColor}/>
        <Text style={styles.textin}>Reposts</Text>
    </View>
    <View style={{  flexDirection: 'row', // Align children horizontally
    alignItems: 'center',}}>
        <Image source={require('@/assets/imagesAcc/whitePnt.png')} style={styles.CpointsColor}/>
        <Text style={styles.textin}>Referrals</Text>
    </View>
    </View>
    
</View>

        </View>
        </ScrollView>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isDrawerOpen}
          onRequestClose={toggleDrawer}
        >
          <TouchableWithoutFeedback onPress={toggleDrawer}>
            <View style={{ flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',}} />
          </TouchableWithoutFeedback>
          <View style={{ position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#171717",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,}}>
           
           <View style={{}}>
            <View style={{flex: 1,justifyContent: 'center'}}>
            <TouchableOpacity  onPress={() => console.log('Scheduled Content')} style={{ flexDirection: 'row', 
            alignItems: 'center',
            padding: 5,
            }}>
                <Image source={require('@/assets/imagesAcc/modimg01.png')} style={{marginRight:10}}/>
                <Text style={{color:"white", fontSize: 20}}>Scheduled Content</Text>
            </TouchableOpacity>
            </View>
            
            <View style={{flex: 1,justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => console.log('Insight')} style={{ flexDirection: 'row', 
            alignItems: 'center',
            padding: 5,
            }}>
                <Image source={require('@/assets/imagesAcc/modimg02.png')} style={{marginRight:10}}/>
                <Text style={{color:"white", fontSize: 20}}>Insight</Text>
            </TouchableOpacity>
            </View>
           
           <View style={{flex: 1,justifyContent: 'center'}}>
           <TouchableOpacity  onPress={() => console.log('Your Activity')} style={{ flexDirection: 'row', 
            alignItems: 'center',
            padding: 5,
            }}>
                <Image source={require('@/assets/imagesAcc/modimg03.png')} style={{marginRight:10}}/>
                <Text style={{color:"white", fontSize: 20}}>Your Activity</Text>
            </TouchableOpacity>
           </View>
            
           <View style={{flex: 1,justifyContent: 'center'}}>
           <TouchableOpacity  onPress={() => console.log('Archive')} style={{ flexDirection: 'row', 
            alignItems: 'center',
            padding: 5,
            }}>
                <Image source={require('@/assets/imagesAcc/modimg04.png')} style={{marginRight:10}}/>
                <Text style={{color:"white", fontSize: 20}}>Archive</Text>
            </TouchableOpacity>
           </View>
           <View style={{flex: 1,justifyContent: 'center'}}>
           <TouchableOpacity  onPress={() => console.log('Saved')} style={{ flexDirection: 'row', 
            alignItems: 'center',
            padding: 5,
            }}>
                <Image source={require('@/assets/imagesAcc/modimg05.png')} style={{marginRight:10}}/>
                <Text style={{color:"white", fontSize: 20}}>Saved</Text>
            </TouchableOpacity>
           </View>
           <View style={{flex: 1,justifyContent: 'center'}}>
           <TouchableOpacity  onPress={() => console.log('Help and Support')} style={{ flexDirection: 'row', 
            alignItems: 'center',
            padding: 5,
            }}>
                <Image source={require('@/assets/imagesAcc/modimg06.png')} style={{marginRight:10}}/>
                <Text style={{color:"white", fontSize: 20}}>Help and Support</Text>
            </TouchableOpacity>
           </View>
           <View style={{flex: 1,justifyContent: 'center'}}>
           <TouchableOpacity  onPress={() => console.log('Supervision')} style={{ flexDirection: 'row', 
            alignItems: 'center',
            padding: 5,
            }}>
                <Image source={require('@/assets/imagesAcc/modimg7.png')} style={{marginRight:10}}/>
                <Text style={{color:"white", fontSize: 20}}>Supervision</Text>
            </TouchableOpacity>
           </View>
           <View style={{flex: 1,justifyContent: 'center'}}>
           <TouchableOpacity  onPress={() => console.log('Favourite')} style={{ flexDirection: 'row', 
            alignItems: 'center',
            padding: 5,
            }}>
                <Image source={require('@/assets/imagesAcc/modimg08.png')} style={{marginRight:10}}/>
                <Text style={{color:"white", fontSize: 20}}>Favourites</Text>
            </TouchableOpacity>
           </View>
           <View style={{flex: 1,justifyContent: 'center'}}>
           <TouchableOpacity  onPress={() => console.log('Discover People')} style={{ flexDirection: 'row', 
            alignItems: 'center',
            padding: 5,
            }}>
                <Image source={require('@/assets/imagesAcc/modimg09.png')} style={{marginRight:10}}/>
                <Text style={{color:"white", fontSize: 20}}>Discover People</Text>
            </TouchableOpacity>
           </View>

            
           </View>
            
          </View>
        </Modal>

      </ImageBackground>
    </View>



  );
};

export default AccountsPage;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flexDirection: "row", 
    alignItems: "center",
   justifyContent: 'flex-end'
  },

  text: {
    fontSize: 18, 
    color: "white", 
  },
  textin: {
    color: "white", 
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
  Box: {
    width: 150, 
    height: 150, 
    borderRadius: 8,
  },
  checkPoints:{
    flexDirection: 'row',
    alignItems: 'center',marginBottom: 4
  },
  CpointsColor:{
    marginRight: 10,
     marginLeft:10,
      height: 9,
       width: 20
  }
});
