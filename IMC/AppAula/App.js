import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, ImageBackground } from 'react-native';
import Nomes from './componente';
import Home from './src/home';

export default function App() {
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [strimc, setImc] = React.useState('');

  const [recebe, setRecebe] = React.useState('');

  

  const calculaIMC = () => {

    const imc = peso / (altura * altura);

    setRecebe(`Seu IMC é: ${imc.toFixed(2)}`)
    if (imc < 18.5) {
      setImc('Abaixo do peso');
    } else if (imc >= 18.5 && imc <= 24.9) {
      setImc('Peso normal');
    } else if (imc >= 25 && imc <= 29.9) {
      setImc('Sobrepeso');
    } else if (imc >= 30) {
      setImc('Sobre peso II');
    }
  };

  const vazio = () => {
    if (peso === '' || altura === '') {
      setImc('Insira os dados corretos'); //Alert.alert('insira uma fruta') é para usar para gerar no celular o alert
    } else {
      setImc('');
    }
  };

  return (
    <View style={styles.view}>
      {/* <Image source={{ uri: 'https://blog.damamaefitness.com.br/wp-content/uploads/2020/09/Conhe%C3%A7a-os-maiores-inimigos-da-boa-alimenta%C3%A7%C3%A3o.jpg' }}
        style={{ width: 300, height: 100 }} /> */}
      

      <ImageBackground style={styles.imagemFundo} source={{ uri: 'https://super.abril.com.br/tecnologia/sensor-molecular-para-smartphone-mostra-qual-e-a-fruta-mais-doce/'}}>

        <Nomes
          titulo='CALCULO IMC'
          subtit='Informe seus dados'
          />

      <TextInput style={styles.input}
        placeholder="Informe seu peso"
        onChangeText={setPeso}
        value={peso}
        />

      <TextInput style={styles.input}
        placeholder="Informe sua altura"
        onChangeText={setAltura}
        value={altura}
        />

      <Button
        title="Calcular"
        onPress={() => {
          calculaIMC(), vazio();
        }}
        />

      {/* OPERACAO TERNARIA
      {(imcnum != '') ? <Text style={styles.infos}>{imcnum}{strimc}{} </Text> : ''} */}

      <Home
        imc={recebe}
        msg={strimc}
        />

        </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 10,
    borderRadius: 15,
    margin: 5,

    alignItems: 'center',
    // backgroundImage: 'linear-gradient(to top, black, darkblue, black)',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#08C4F5',
    padding: 50,

  },
  input: {
    borderRadius: 5,
    backgroundColor: '#000000',
    color: 'white',
    marginVertical: 5,
    padding: 5,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderStartWidth: 1,
    borderEndWidth: 5,
    borderColor: '#08C4F5',
  },
  infos: {
    backgroundColor: '#000',
    color: '#fff',
    marginTop: '10px',
    borderRadius: '3px',
    padding: '10px',
    fontSize: '12px',
    borderStyle: 'solid',
    borderColor: '#FAF705',
    borderWidth: '1px',
  },
  imagemFundo: {
    flex: 1,
    resizeMode: 'cover'
  }

});

