import React, { Component } from "react";
import { View, Text, StyleSheet} from "react-native"

const imgFundo = 'https://super.abril.com.br/tecnologia/sensor-molecular-para-smartphone-mostra-qual-e-a-fruta-mais-doce/'

export default class Nomes extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.texto}>{this.props.titulo} </Text>
        <Text style={styles.texto}>{this.props.subtit} </Text>
      </View>
    )

  }
}



const styles = StyleSheet.create({
  view: {
    padding: 5,
    borderRadius: 10,
    width: 200,
    margin: 5,
    alignItems: 'center',
  },
  texto: {
    marginTop: 10,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 2,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderStartWidth: 1,
    borderEndWidth: 5,
    borderColor: '#08C4F5',
  },
  subtit: {
    color: '#fff',
    backgroundColor: 'black',
    padding: 5,
    fontSize: 15,
    borderRadius: 5,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderStartWidth: 1,
    borderEndWidth: 5,
    borderColor: '#08C4F5',
  },
  input: {
    borderRadius: 5,
    backgroundColor: '#000000',
    color: 'white',
    marginVertical: 10,
    padding: 5,
  }
})