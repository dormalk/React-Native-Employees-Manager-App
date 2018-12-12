import React from 'react';
import  { Text,View } from 'react-native';

const Header = ({text}) => {
    const { textStyle,viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{text}</Text>
        </View>
    ); 
};

 
const styles = {
    viewStyle:{
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        paddingBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height:200 },
        shadowOpacity: 0.9,
        position: 'relative'
    },
    textStyle:{
        fontSize: 30,
        fontWeight: '800',
        color: '#000'
    }
}

export { Header };