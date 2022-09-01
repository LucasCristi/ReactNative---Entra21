import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';

const MeuApp = () => {
  const [text, setText] = useState('');
  const [frutas, setFrutas] = useState([]);

  const [msg, setMsg] = useState('');

  const addFruta = () => {
    setFrutas((f) => [...f, text]);
  };

  const vazio = () => {
    if (text == '') {
      setMsg('Insira uma fruta'); //Alert.alert('insira uma fruta') é para usar para gerar no celular o alert
    } else {
      addFruta();
      setMsg('');
      setText('');
    }
  };

  const limpar = () => {
    setFrutas([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>FRUTAS</Text>
      <TextInput
        placeholder="Adicionar fruta"
        placeholderTextColor="#fff"
        style={styles.input}
        value={text}
        onChangeText={setText}
      />

      <Text style={styles.tabela}>{msg}</Text>

      <TouchableHighlight onPress={(addFruta, vazio)} style={styles.button}>
        <Text style={styles.buttonTitle}>Gravar</Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={limpar} style={styles.button}>
        <Text style={styles.buttonTitle}>Limpar</Text>
      </TouchableHighlight>

      <View>
        {frutas.map((f, i) => (
          <Text style={styles.tabela} key={i}>
            {f}
          </Text>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default MeuApp;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#DFF6FF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex',
    flexGrow: 1,
  },
  title: {
    textAlign: 'center',
    color: '#000',
    fontSize: 25,
  },
  input: {
    backgroundColor: '#f38995',
    marginVertical: 10,
    padding: 8,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    fontFamily: 'verdana',
    textAlign: 'center',
    letterSpacing: 3,
    width: 200,
  },
  button: {
    backgroundColor: '#000',
    padding: 2,
    width: 100,
    textAlign: 'center',
    letterSpacing: 2,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonTitle: {
    color: '#FFF',
    fontSize: 20,
  },
  tabela: {
    fontSize: 20,
    backgroundColor: '#f38995',
    color: '#fff'

  },
});
