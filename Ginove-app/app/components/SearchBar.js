import React from 'react';
import { Image, SafeAreaView, View, StyleSheet } from 'react-native';

function SearchBar() {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.arrow} source={require('../assets/Vector.png')}/>
            <View style={styles.right}>
                <Image style={styles.img} source={require('../assets/search.png')}/>
                <Image style={styles.img} source={require('../assets/ellipsis.png')}/>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        height: 50,
        marginHorizontal: 20,
      
    },

    img: {
        width: 20,
        height: 20
        },

        arrow: {
            width: 20,
            height: 15
        },

    right: {
        display: 'flex',
        flexDirection: 'row',
        width: '22%',
        justifyContent: 'space-between'
    }
});

export default SearchBar;