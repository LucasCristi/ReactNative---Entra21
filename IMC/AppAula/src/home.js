import { Component } from "react";
import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView} from "react-native";

const StatusBarHeight = StatusBar.currentHeight;

export default class Home extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container} >

                <ScrollView>

                    <View style={styles.content}>
                        <Text style={styles.texto}>{this.props.imc}</Text>
                        <Text style={styles.texto}>{this.props.msg}</Text>
                    </View>

                </ScrollView>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    content: {
        alignSelf: 'center',
        padding: 2,
        width: '200px',
        height: 60,
        marginTop: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
        backgroundColor: '#000',
        borderStyle: 'solid',
        borderColor: '#08C4F5',
        borderWidth: '1px'
    },
    texto: {
        color: '#4BE3C2'
    },
    textodois: {
        color: '#F5D851'
    },
    textotres: {
        color: '#FA0400'
    }
})