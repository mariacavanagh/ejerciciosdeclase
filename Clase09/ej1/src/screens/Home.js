import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import Boton from "../components/Boton";
import Contador from "../components/Contador";


function Home(){
    return(
        <View>
            <Text> Hola Mundo! </Text>
            <Boton/>
            <Contador/>
        </View>
        
    )

}

export default Home;