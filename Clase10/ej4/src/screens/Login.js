import React from "react";
import { View, Text, Pressable } from "react-native-web";
import { StyleSheet } from "react-native";

function Login(props){
    return (
        <View style={styles.container}>
        <Text style={styles.title}> Formulario de login </Text>
        <Pressable onPress={() => props.navigation.navigate("Register")}>
            <Text style={styles.buttonBlue}> Ir a Register </Text>
        
        </Pressable>
        <Pressable onPress={() => props.navigation.navigate("HomeMenu")}>
            <Text style={styles.buttonOrange}> Entrar en la app</Text>
        
        </Pressable>

        </View>

    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f6f6f6",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 15,
      color: "#000",
    },
    subtitle: {
      fontSize: 16,
      textAlign: "center",
      color: "#333",
      marginBottom: 15,
    },
    buttonBlue: {
      backgroundColor: "#64B5F6",
      padding: 15,
      borderRadius: 6,
      marginBottom: 25,
      fontWeight:'Bold'
    },
    buttonOrange: {
      backgroundColor: "#FFB74D", 
      padding: 15,
      borderRadius: 6,
      marginBottom: 25,
      fontWeight:'Bold'
    },

  });

export default Login;