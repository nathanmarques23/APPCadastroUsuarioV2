/* NATHAN MARQUES DO NASCIMENTO */ 
import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [documento, setDocumento] = useState('');

  const handleCadastro = () => {
    Alert.alert(
      'Cadastro realizado!',
      `Nome: ${nome}\nE-mail: ${email}\nIdade: ${idade}\nDocumento: ${documento}`
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.titulo}>Cadastro de Usuário</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>E-mail:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Idade:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Documento:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu documento"
        value={documento}
        onChangeText={setDocumento}
      />

      <View style={styles.botao}>
        <Button title="Cadastrar" onPress={handleCadastro} color="#0066cc" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1e1d1d',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#ffffff',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#ffffff',
  },
  input: {
    width: '50%', 
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  botao: {
    marginTop: 10,
    width: 100,
    height: 120,
  },
});
