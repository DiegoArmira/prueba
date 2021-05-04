import React from 'react';
import { AppLoading } from 'expo';
//import { Container, Button, Header, Item, Input, Footer, Content, Form, Text} from 'react-native';
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
//import * as Font from 'expo-font';
//import { Ionicons } from '@expo/vector-icons';
//import { AsynStorage, Alert } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            isReady: false,
            correo:'',
            clave:''
        };
    }
    Login= () =>{
        const { correo } = this.state; 
        const { clave } = this.state;
        //alert(correo);
        fetch('http://192.168.0.10:8012/pruebas/login.php',{
            
            method: 'POST',
            header: {
                'Accept' : 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                correo : correo,
                clave : clave,
            })
        })
        .then((respuesta) => respuesta.json())
        .then((responseJson) => {
            if(responseJson == "1")
            {
                alert("Bienvenido");
            }else
            {
                alert(responseJson);
            }
        }).catch((error)=>{
            alert("Error");
            console.log(error);
        })

    }

    async componentDidMount(){
        /*await Font.loadAsync({
            Robot0: require('react-native/Fonts/Roboto.ttf'),
            Roboto_medium: require('react-native/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });*/
        this.setState({isReady: true});
    }
    


    render(){
        if (!this.state.isReady){
            //return <AppLoading/>;
            alert("Inicio");
        }


        return(
            <View style={StyleSheet.container}>
            <Text>Registro</Text>
            <TextInput 
                placeholder="Username" 
                style={style.input} 
                onChangeText={correo => this.setState({correo})}
            />
            <TextInput 
                placeholder="Password" 
                style={style.input} 
                secureTextEntry={true} 
                autoCapitalize="none"
                onChangeText={clave => this.setState({clave})} 
            />
            <View style={StyleSheet.buttonContainer}>
                <Button title="Registro" onPress={this.Login}/>
            </View>
        </View>
        );
    }
    
}
const style = StyleSheet.create (
    {
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        },
        input: {
            paddingVertical: 5,
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            width: "55%",
        },
        buttonContainer: {
            marginTop: 20,
        }
    }
);