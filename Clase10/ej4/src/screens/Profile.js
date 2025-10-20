import React from "react";
import { Text, View, Pressable} from "react-native";
import { StyleSheet } from "react-native";

function Profile(props){
    return (
       <View style={styles.container}>
        <Text style={styles.title}> Mi perfil </Text>
        <Pressable style={styles.button} onPress={() => props.navigation.navigate("Login")}>
            <Text style={styles.buttonText}> Desloguearse</Text>
        
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
      color: "#000",
      marginBottom: 30,
    },
    button: {
      backgroundColor: "#F5A623", 
      paddingVertical: 15,
      paddingHorizontal: 25,
      borderRadius: 8,
      alignItems: "center",
      width: "20%",
    },
    buttonText: {
      color: "#000",
      fontSize: 16,
      textAlign: "center",
      fontWeight: 'bold'
    },
  });

export default Profile;

