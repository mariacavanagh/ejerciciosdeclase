import React, { Component } from "react";
import { Text, View } from "react-native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";

class Boton extends Component{

    saludar(){
        console.log("me clickearon")

    }

    render(){
        return(
            <View style={styles.container}>
            <Pressable style={styles.boton} onPress={() => this.saludar()} >
                <Text style= {styles.texto}> Clickeame </Text>
            </Pressable>
            </View>
        )
    }
    

}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        display: 'flex',
        alignItems: 'center',
    },
    texto: {
      backgroundColor: "red",
      padding: 20
    },
    boton:{
        backgroundColor: "#ccc",
        padding: 4,  
        marginBottom:10,
        borderRadius: 4,
        textAlign: 'center',
      },
    texto: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
    });


export default Boton