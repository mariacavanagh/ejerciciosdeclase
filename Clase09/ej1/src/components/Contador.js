import React, { Component } from "react";
import { Pressable } from "react-native";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

class Contador extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0
        }

    }
        
        contar(){
            this.setState({
                contador: this.state.contador + 1
            })

            
        }
        render(){
            return(
                <View style= {styles.container}>
                <Text> Cantidad de clicks: {this.state.contador}</Text>
                <Pressable style={styles.click} onPress={() => this.contar()}>
                    <Text style={styles.texto}> Click aqui para contar</Text>
                </Pressable>
                </View>

            )
        }
    }
    const styles = StyleSheet.create({
        container: {
            marginTop:5,
            marginBottom:5
        },
        click: {
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            padding: 7,
            marginBottom:10,
            borderRadius: 4,
            textAlign: 'center',
        },
        texto: {
            fontWeight: 'bold',
            textAlign: 'center'
        }
    });
    

export default Contador