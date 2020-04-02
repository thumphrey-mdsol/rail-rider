import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const LoginForm = (props) => {
return(
    <View>
        <TextInput/>
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
        border: 'grey' 2
    }
})