import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#212121",
        //alignItems: "center",
        alignContent: "center",
        marginTop: 25,
        margin: 10,
        borderRadius: 10,
        marginBottom: -20,
    },
    titulo: {

        color: '#ffffff',
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 20,
        margin: 8,
        marginBottom: 0,
    },
    descricao: {

        color: '#ffffff',
        alignSelf: "center",
        fontSize: 15,
        margin: 5,
        marginBottom: 15,
        paddingRight: 60,
        paddingLeft: 60,
        textAlign: "center",
    },
    foto: {
        position: 'absolute',
        width: 70,
        height: 70,
        marginTop: 11,
    },
    foto2: {
        position: 'absolute',
        alignSelf:'flex-end',
        width: 20,
        height: 20,
        marginTop: 40,
    }
})