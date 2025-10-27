import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

class DynamicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comentario: ""
    };
  }

  onSubmit() {
    console.log('Comentario enviado:', this.state.comentario);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Formulario de Comentarios</Text>

        <TextInput
          style={styles.input}
          placeholder="Escribí tu comentario..."
          value={this.state.comentario}
          onChangeText={(text) => this.setState({ comentario: text })}
        />

        <Pressable style={styles.button} onPress={() => this.onSubmit()}>
          <Text style={styles.buttonText}>Enviar</Text>
        </Pressable>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginTop: 20,
  
      },
      title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 15,
        color: "#000",
        textAlign: "center",
      },
      button: {
          backgroundColor: '#28a745',
          paddingHorizontal: 10,
          paddingVertical: 6,
          alignItems: 'center',
          borderRadius: 4,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#28a745',
          marginTop: 5,
        
      },
      input: {
      height: 20,
      paddingVertical: 15,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderStyle: 'solid',
      marginVertical: 10,
        },
  
      buttonText: {
          color: '#fff'
      }
        },
      
  
  );

export default DynamicForm;