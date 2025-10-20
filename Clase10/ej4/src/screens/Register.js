import React from "react";
import { Pressable, Text, View} from "react-native";
import { StyleSheet } from "react-native";




function Register(props){
    return (
        <View style= {styles.container}>
        <Text style= {styles.title}> Formulario de register </Text>
        <Pressable style={styles.button} onPress={() => props.navigation.navigate("Login")}>
            <Text style={styles.buttonText}> Ir a Login </Text>
        
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
      textAlign: "center",
    },
    button: {
      backgroundColor: "#64B5F6", // azul suave
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 6,
    },
    buttonText: {
      color: "#000",
      fontSize: 16,
      fontWeight: "500",
      textAlign: "center",
    },
});

export default Register;