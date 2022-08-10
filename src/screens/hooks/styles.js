import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#0a9',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#fff',
        borderColor: '#000',
        borderRadius: 10,
        borderWidth: 2,
        paddingHorizontal: 25,
        paddingVertical: 10,
        marginVertical: 20
    },
    buttonLabel: {
        color: '#000',
        fontSize: 20
    },  
    label: {
        fontSize: 22,
        color: '#fff',
        margin: 10
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderColor: '#000',
        borderWidth: 2,
    },
    containerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 100,
        width: '100%'
    }
})