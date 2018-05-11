import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
  CheckBox
} from "react-native";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    let pic = {
      uri:
        "https://lh3.googleusercontent.com/GUBajz7c4G-HsEsm0awRlAb8qM0UMhrDK1fW9l15r6Qq6otXPBoisER4oDo2-HkXNEA=s180"
    };
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Not Defteri</Text>
        </View>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={pic} />
        </View>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <TouchableWithoutFeedback
            style={styles.container}
            onPress={Keyboard.dismiss}
          >
            <View style={styles.infoContainer}>
              <TextInput
                style={styles.input}
                placeholder="Kullanıcı adı"
                placeholderTextColor="rgba(255,255,255,0.8)"
                keyboardType="email-address"
                returnKeyType="next"
                onChangeText={userName => this.setState({ userName })}
                value={this.state.userName}
                autoCorrect={false}
                onSubmitEditing={() => this.refs.txtPassword.focus()}
              />
              <TextInput
                style={styles.input}
                placeholder="Şifre"
                placeholderTextColor="rgba(255,255,255,0.8)"
                returnKeyType="go"
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
                secureTextEntry
                autoCorrect={false}
                ref={"txtPassword"}
              />
              <CheckBox
                center
                title="Click Here"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={this.state.checked}
                onPress={() => this.setState({ checked: !this.state.checked })}
              />
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => this.checkEntry()}
              >
                <Text style={styles.buttonText}>Giriş Yap</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    );
  }

  checkEntry() {
    if (this.state.userName == "eky" && this.state.password == 12345) {
      this.props.navigation.navigate("Main");
    } else {
      Alert.alert("Yanlış Kullanıcı Adı / Şifre ", null, [
        { text: "Tamam", onPress: () => this.clean() }
      ]);
    }
  }

  clean() {
    this.state.userName = this.state.password = "";
    this.setState({ userName: this.state.userName });
    this.setState({ password: this.state.password });
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "rgb(32, 53, 70)",
    flexDirection: "column"
    //backgroundColor: "red"
  },
  header: {
    backgroundColor: "#008000",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#32CD32"
  },
  headerText: {
    color: "white",
    fontSize: 18,
    padding: 26
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 180,
    height: 180,
    marginTop: 20
  },
  title: {
    color: "#f7c744",
    fontSize: 18,
    textAlign: "center",
    marginTop: 5,
    opacity: 0.9
  },
  infoContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 100,
    height: 200,
    padding: 20
    // backgroundColor: 'red'
  },
  input: {
    height: 35,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#FFF",
    marginBottom: 5
  },
  buttonContainer: {
    backgroundColor: "#f7c744",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "rgb(32, 53, 70)",
    fontWeight: "bold",
    fontSize: 18
  }
});
