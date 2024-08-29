import * as React from "react";
import { useRef, useState, ChangeEvent } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, NativeSyntheticEvent, TextInputKeyPressEventData } from "react-native";

const Verification: React.FC = () => {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const inputs = useRef<TextInput[]>([]);

  const handleChangeText = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (event: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    if (event.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleResendCode = () => {
    console.log("Resend Code pressed");
  };

  const handleLogin = () => {
    console.log("Login Button is pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Verification Code</Text>
        <Text style={styles.descriptionText}>
          Search for your favourite Content Creators on the app and connect with them. You can also invite your friends who are not on the app yet to join you.
        </Text>
      </View>

      <View style={styles.inputContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={digit}
            onChangeText={(text) => handleChangeText(text, index)}
            onKeyPress={(event) => handleKeyPress(event, index)}
            keyboardType="number-pad"
            maxLength={1}
            ref={(el) => el && (inputs.current[index] = el)}
            textAlign="center"
          />
        ))}
      </View>

      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>
          Didn’t receive code?{" "}
          <TouchableOpacity onPress={handleResendCode}>
            <Text style={styles.resendLink}>Resend Code</Text>
          </TouchableOpacity>
        </Text>
      </View>
      
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    marginTop: 30,
    justifyContent: "center",
  },
  textContainer: {
    margin: 22,
  },
  titleText: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "600",
  },
  descriptionText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 22,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    width: 40,
    marginTop: 20,
    height: 40,
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 5,
  },
  resendContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  resendText: {
    fontSize: 16,
  },
  resendLink: {
    color: "#007bff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginButton: {
    marginTop: 100,
    margin: 20,
    backgroundColor: "#ff471a",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
