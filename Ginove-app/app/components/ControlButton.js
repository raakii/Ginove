import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

function ControlButton() {
    return (
        <View style={styles.container}> 
            <Text style={styles.button}>Control Panel</Text>
            <Icon
            style={styles.icon}
                name='star'
                color='#fff'
                size={20} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00C8F4',
        width: '30%',
        height: 25,
        borderRadius: 50,
        marginTop: 10,
        marginHorizontal: 20,
        marginBottom: -10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
       
       
    },

    button : {
        color: '#fff',
    },

    icon : {
        marginLeft: 3
    }
})

export default ControlButton;