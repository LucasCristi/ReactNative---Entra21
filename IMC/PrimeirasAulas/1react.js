import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';

const MeuApp = () => {
  const [nome, setNome] = React.useState('');
  const [sobreNome, setSobreNome] = React.useState('');
  const [nomeCompleto, setNomeCompleto] = React.useState('');
  const [idadeUsuario, setIdadeUsuario] = React.useState('');

  function maiorIdade () {
  if(idadeUsuario >= 18){
    return ('maior de idade')
  } else {
     return('menor de idade')
  }
  }
  
  return (
    <View style={styles.view}>
      <Text style={styles.titulo}>Contato</Text>
      <Text style={styles.subtit}>Insira seus dados abaixo:</Text>

      <TextInput
        style={styles.input}
        placeholder="Informe seu nome"
        onChangeText={setNome}
        value={nome}
      />

      <TextInput
        style={styles.input}
        placeholder="Informe sobrenome"
        onChangeText={setSobreNome}
        value={sobreNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Informe sua idade"
        onChangeText={setIdadeUsuario}
        value={idadeUsuario}
      />

      <Button
        title="Gravar"
        onPress={() => {
         maiorIdade(), setNomeCompleto(`${nome} ${sobreNome} `);
        }} 
      />

      {(nomeCompleto != '') ? <Text>Olá {nomeCompleto}, você tem {idadeUsuario} anos e é {maiorIdade()}  </Text> : ''} 
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 10,
    borderRadius: 15,
    width: 300,
    margin: 20,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  titulo: {
    marginTop: 30,
    fontSize: 30,
    color: 'white',
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 5,
  },
  subtit: {
    color: 'black',
    padding: 10,
  },
  input: {
    borderRadius: 5,
    backgroundColor: '#000000',
    color: 'white',
    marginVertical: 10,
    padding: 5,
  },
});

export default MeuApp;
