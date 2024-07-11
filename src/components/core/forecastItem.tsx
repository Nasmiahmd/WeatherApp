import { WeatherForecast } from "@/app/index";
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import dayjs from "dayjs";
import { BlurView } from 'expo-blur';


export default function forecastItem({ forecast }: { forecast: WeatherForecast }) {
  return (
    <BlurView intensity={5} style={styles.container}>
      <Text style={styles.temp}>{Math.round(forecast.main.temp)}°</Text>
      <Text style={styles.date}>{dayjs(forecast.dt*1000).format('ddd ha')}</Text>
    </BlurView>
  );
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        aspectRatio: 9 / 16,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderColor: 'grainsboro',
        borderWidth: StyleSheet.hairlineWidth,
    },
    temp:{
        fontFamily: 'Oswald_Bold',
        fontSize: 25,
        color: 'ghostwhite',
    },
    date:{
        fontFamily: 'Oswald',
        color: 'snow',
        fontSize: 20,
        
    },

});
