import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = useState(''); // Estado para armazenar o texto digitado

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exemplo de TextInput</Text>

      {/* Campo de entrada */}
      <TextInput
        style={styles.input}
        placeholder="Digite algo aqui..." // Placeholder visível quando o campo está vazio
        placeholderTextColor="#888" // Cor do placeholder
        value={text} // Valor do TextInput
        onChangeText={(newText) => setText(newText)} // Atualiza o estado ao digitar
      />

      {/* Texto exibido dinamicamente */}
      <Text style={styles.output}>
        Você digitou: {text || 'Nada ainda...'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  output: {
    fontSize: 18,
    color: '#c6c6c6',
  },
});
