import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const LoginForm = (props) => {
return(
    <View style={styles.container}>
        <TextInput placeholder="Username"
        style={styles.input}/>
        <TextInput placeholder="Password"
        style={styles.input}/>
        <Button title="Login"/>
    </View>
)
}

export default LoginForm

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: 300,
        borderColor: 'grey',
        borderRadius: 15,
        backgroundColor: "lightgrey",
        paddingHorizontal:16,
        fontSize: 16,
        color: "#ffffff",
        paddingVertical: 6,
        marginVertical: 10
    }
})