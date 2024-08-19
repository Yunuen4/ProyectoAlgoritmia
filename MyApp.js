import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground } from 'react-native';

const MyApp = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handlePress = () => {
    if (name.trim()) {
      setGreeting(`¡Hola, ${name}!`);
    } else {
      Alert.alert('Error', 'Por favor ingresa tu nombre.');
    }
  };

  return (
    <ImageBackground
      source={require('./assets/fondo.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido a MyApp</Text>
        
        <Text style={styles.label}>Ingresa tu nombre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Tu nombre"
          placeholderTextColor="#b0c4de" // Azul claro para el texto de placeholder
          value={name}
          onChangeText={setName}
          color="#000000" // Texto negro
        />
        
        <Button title="Saludar" color="#4682b4" onPress={handlePress} />
        
        {greeting ? <Text style={styles.greeting}>{greeting}</Text> : null}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ajusta la imagen al tamaño de la pantalla
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(230, 240, 250, 0.6)', // Fondo semitransparente sobre la imagen
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4682b4', // Azul acero
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#5f9ea0', // Azul cadete
  },
  input: {
    height: 40,
    borderColor: '#87cefa', // Azul cielo claro
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f0f8ff', // Azul Alice
    color: '#000000', // Texto negro
  },
  greeting: {
    fontSize: 20,
    color: '#4682b4', // Azul acero
    marginTop: 20,
  },
});

export default MyApp;
