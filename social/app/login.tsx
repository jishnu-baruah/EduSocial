import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";


// const auth = getAuth();

const Login: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'createAccount'>('login');
  const router=useRouter()
  // const [email,setEmail] = useState("")
  // const [password,setPassword] = useState("")
  

  const handleTabChange = (tab: 'login' | 'createAccount') => {
    setActiveTab(tab);
  };

  const handleLogin = () => {
    console.log('Login button pressed');
    router.push('./interests')
    // signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{

    // })
  };

  const handleGoogleLogin = () => {
    console.log('Connect with Google pressed');
  };

  const handleMetaMaskLogin = () => {
    console.log('Connect with MetaMask pressed');
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.content}>
        <View>
        <Image 
        source={require('@/assets/images/loginScreenPc.png')} 
        style={styles.image}
      />
        <Text style={styles.text}>Stay engaged</Text>
        <Text style={styles.subtitle}>
          The best way to get the most out of our app is to participate actively.
        </Text>
        </View>
       
        <View style={styles.tabs}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'login' && styles.activeTab]} 
            onPress={() => handleTabChange('login')}
          >
            <Text style={[styles.tabText, activeTab === 'login' && styles.activeTabText]}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'createAccount' && styles.activeTab]} 
            onPress={() => handleTabChange('createAccount')}
          >
            <Text style={[styles.tabText, activeTab === 'createAccount' && styles.activeTabText]}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
        {activeTab === 'login' ? (
          <View style={styles.form}>
            <TextInput 
              style={styles.input} 
              placeholder="Email ID" 
              keyboardType="email-address"
            />
            <TextInput 
              style={styles.input} 
              placeholder="Password" 
              secureTextEntry
            />
            <TouchableOpacity 
              style={styles.loginButton} 
              onPress={handleLogin}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>or</Text>
            <View style={styles.socialButtons}>
              <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
                <Text style={styles.socialButtonText}>Connect with Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton} onPress={handleMetaMaskLogin}>
                <Text style={styles.socialButtonText}>Connect with MetaMask</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.form}>
            <TextInput 
              style={styles.input} 
              placeholder="Email ID" 
              keyboardType="email-address"
            />
            <TextInput 
              style={styles.input} 
              placeholder="Password" 
              secureTextEntry
            />
            <TouchableOpacity 
              style={styles.createAccountButton} 
              onPress={() => {
                console.log('Create Account button pressed')
                handleTabChange('login')
              }}
            >
              <Text style={styles.createAccountButtonText}>Create Account</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>or</Text>
            <View style={styles.socialButtons}>
              <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
                <Text style={styles.socialButtonText}>Connect with Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton} onPress={handleMetaMaskLogin}>
                <Text style={styles.socialButtonText}>Connect with MetaMask</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: 78,
    height: 79.24,
  },
  content: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    // textAlign: 'center',
    marginBottom: 20,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    width:150,
  },
  activeTab: {
    borderBottomColor: '#ff471a',
  },
  tabText: {
    fontSize: 16,
    color: '#000',
    alignSelf:"center"
  },
  activeTabText: {
    color: '#ff471a',
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: '#ff471a',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    marginVertical: 10,
  },
  socialButtons: {
    width: '100%',
    alignItems: 'center',
  },
  socialButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
    width: '100%',
  },
  socialButtonText: {
    fontSize: 16,
    color: '#007bff',
  },
  createAccountButton: {
    backgroundColor: '#ff471a',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  createAccountButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
