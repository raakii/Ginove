import React from 'react';
import { Dimensions, Text, View, StyleSheet, Image } from "react-native";
import { LineChart } from 'react-native-chart-kit';
import { Icon } from 'react-native-elements';
const screenWidth = Dimensions.get("window").width;

function LineChart2() {

  const data = {
    labels: ['11:00', '12:00', '13:00', '14:00', '14:00', '15:00'],
    datasets: [{
      data: [ 10, 22, 14, 40, 44, 21 ]
    }]
  };

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(92, 55, 74, ${opacity})`
  }

    return (
      <>
      <View>
        <View style={styles.themes}>
          <Text style={styles.theme} >Temperature</Text>
          <Text style={styles.theme}>Pression</Text>
          <Text style={styles.theme}>Salt</Text>
        </View>
        <View style={styles.details} >
        <View style={styles.sun}>
        <Icon 
        name='circle'
        color='#FAFF00'
        size={40}
        />
        <Text style={styles.degree}>26 °C</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.location}>Sine-Saloum-Est</Text>
          <View style={styles.date}>
            <Text style={styles.day} >Tuesday</Text><Text>18:00</Text>
          </View>
        </View>

        </View>
        <LineChart
          data={data}
          width={screenWidth}
          height={160}
          chartConfig={chartConfig}
      />
      </View>
      <Image style={styles.img} source={require('../assets/Ellipse10.png')} />
    </>
    );
}

const styles = StyleSheet.create({
  themes : {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20

  },

  theme : {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#8B72CA',
    color: '#fff',
    borderRadius: 20,
    fontSize: 10,
    fontWeight: 'bold'
  },

  details : {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 10
  },

  date : {
    display: 'flex',
    flexDirection: 'row'
  },

  sun : {
    display : 'flex',
    flexDirection: 'row',
  }, 

  degree : {
    fontSize: 20,
    marginTop: 8,
    marginLeft: 10
  },

  location : {
    fontSize: 20,
    color: 'grey'
  },

  day : {
    fontSize: 22,
  },

  right : {
    alignItems: 'center'
  },

  img : {
    width: 30,
    height: 10
  }
})

export default LineChart2;