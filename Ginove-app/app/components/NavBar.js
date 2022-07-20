import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

function NavBar() {
    const [Nav, setNav] = useState([
        {name: 'Overview', key :1},
        {name: 'Species', key: 2},
        {name: 'Photos', key: 3},
        {name: 'Diversity', key: 4}
    ]);

    const [SelectedItem, setSelectedItem] = useState(1);

    

    return (
        <View style={styles.container}>
           {
            Nav.map(item => (
                <Text
                onPress={() => {setSelectedItem(item.key)}}
                style={[styles.item, (SelectedItem==item.key) && styles.selected]} key={item.key}>{item.name}</Text>
            ))
           }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
        paddingHorizontal: 20
    },
    
    item : {
        borderBottomColor: "grey",
        borderBottomWidth: 3,
    },

    selected : {
        color: '#6392E6',
        borderBottomColor: "#6392E6",
        borderBottomWidth: 5,
    }
})

export default NavBar;