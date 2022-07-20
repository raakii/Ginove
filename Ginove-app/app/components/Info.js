import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Info() {
    const [hydrophone, sethydrophone] = useState({
        ref: 'NC186',
        state: 'active',
        location: 'Sine Saloum Est'
    })
    return (
        <View style={styles.container}>
            <Text style={styles.title} >Hydrophone {hydrophone.ref}</Text>
            <Text style={styles.state}>{hydrophone.state}</Text>
            <Text style={styles.location}>{hydrophone.location}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        marginBottom: 0
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 5
    },
    state: {
        color: 'grey',
        fontSize: 15,
        fontWeight: "300",
        marginBottom: 2
    },
    location: {
        color: 'grey',
        fontWeight: '200'
    }
})

export default Info;