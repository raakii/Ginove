import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

function Images() {
    return (
        <View style={styles.container}>
            <Image style={styles.left} source={require('../assets/left.png')}/>
            <View style={styles.right}>
                <Image style={styles.rightChild} source={require('../assets/top.png')} />
                <Image style={styles.rightChild} source={require('../assets/bottom.png')}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection:'row',
        margin: 8,
        marginTop: 20
        
    },

    right: {
        width: '30%',
        justifyContent: 'space-between',
    },

    rightChild: {
        resizeMode: 'contain',
        width: '139%'
    },


    left: {
        width: '50%',
        height: '100%',
        resizeMode: 'contain'
    }
})

export default Images;