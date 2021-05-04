import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

//import axios from "axios";

const Registro = () => {

    const [username,  setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmit, setIsSubmit ] = useState(false);

    /*
    useEffect(()=> {
        const authenticate = sync () => {
            axios 
            .post(
                ""
            )
        }
    })
    */
    const usernameHandler = (text) => 
    {
        //* VALIDACIONES 

        setUsername(text);
    }

    return(
        <View style={StyleSheet.container}>
            <Text>Registro</Text>
            <TextInput 
                placeholder="Username" 
                style={style.input} 
                onChangeText={usernameHandler}
            />
            <TextInput 
                placeholder="Email" 
                style={style.input} 
                onChangeText={(text) => setEmail(text)} 
            />
            <TextInput 
                placeholder="Password" 
                style={style.input} 
                secureTextEntry={true} 
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)} 
            />
            <View style={StyleSheet.buttonContainer}>
                <Button title="Registro" onPress={() => setIsSubmit(true)}/>
            </View>
        </View>
    );
};

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

export default Registro;