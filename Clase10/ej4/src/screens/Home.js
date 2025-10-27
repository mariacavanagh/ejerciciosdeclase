import React from "react";
import { View, Text } from "react-native-web";
import DynamicForm from "../components/DynamicForm";

function Home(){
    return (
        <View>
        <Text> Formulario de home </Text>
        <DynamicForm/>
        </View>
    )
}

export default Home;