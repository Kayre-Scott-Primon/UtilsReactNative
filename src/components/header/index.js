import React, { Component } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { Icon } from "react-native-elements";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles'

function Header(props){

    return(
        <View style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor={'#fff'}/>
            <View style={styles.containerTitle}>
                <MaterialCommunityIcons name={props.icon} color={'#0a9'} size={25}/>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </View>
    )
}

export default Header