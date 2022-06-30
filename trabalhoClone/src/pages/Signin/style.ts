import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#161616",
        //alignItems: "center",
        alignContent: "center",
        flex: 1,
    },
    texto: {
        color: "#7c7c7c",
        fontSize: 19,
        marginBottom: -8,

    },
    logoPoker: {
        width:411,
        height:110,
    },
    login: {        
        margin: 30,
        marginTop: 50,


    },
    user: {
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        fontSize: 16,
        color: '#fff',
        
    },
    senha: {
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        fontSize: 16,
        color: '#fff',
    },
    icone: {
        width: 30,
        height: 20,
        alignSelf:'flex-end',
        position: 'relative',
        marginTop: 20,
        marginBottom: -35,
    },
    buttonText: {
        marginTop: 25,
        alignSelf: 'center',
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
        backgroundColor: '#01bd9c',
        padding: 15,
        paddingRight: 140,
        paddingLeft: 140,
        borderRadius: 50,
        
    },
    anotacao:{
        color: '#01bd9c',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10,
    }
})