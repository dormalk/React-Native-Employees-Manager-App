import React from 'react';
import { TextInput,View,Text } from 'react-native';

const Input = ({ label,value,onChangeText,placeholder,secureTextEntry }) => {
    const { inputStyle,containerStyle,labelStyle } = styles;
    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry = {secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color:'#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        height: 50,
        width: 100
    },
    labelStyle: {
        fontSize: 20,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}


export { Input };

