import React, { useEffect, useState } from 'react'
import { Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Header from '../../components/header'
import useCirclePerimeter from '../../hooks/useCirclePerimeter'
import styles from './styles'

function Hooks(){

    const [first, setFirst] = useState('')
    const [secound, setSecound] = useState(0)
    const [value, setValue] = useState(0)
    const [perimeter, setRadius] = useCirclePerimeter()
    

    useEffect(() => {
        console.log('useEffect')
        setFirst('component mouted')
    },[])

    function anyFunction(){
        setRadius(value)
        Keyboard.dismiss()
    }

    return(
        <View style={styles.container}>
            <Header title={'Hooks'} icon={'hook'}/>
            <Text style={[styles.label, {marginBottom: 50}]}>This page show with used hooks</Text>
            <Text style={[styles.label, {marginBottom: 75}]}>Will did mount: {first}</Text>
            <TouchableOpacity style={styles.button} onPress={() => setSecound(secound + 1)}>
                <Text style={styles.buttonLabel}>Click here</Text>
            </TouchableOpacity>
            <Text style={styles.label}>State changed: {secound}</Text>

            <View style={styles.containerButton}>
                <TextInput placeholder='Put here an value' onChangeText={(value) => setValue(value)} value={value} style={styles.input} keyboardType={'numeric'}/>
                <TouchableOpacity style={styles.button} onPress={() => anyFunction()}>
                    <Text style={styles.buttonLabel}>Click here</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.label}>Used customing : {perimeter}</Text>
        </View>
    )
}

export default Hooks