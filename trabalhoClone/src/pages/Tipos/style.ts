import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#161616",
        //alignItems: "center",
        alignContent: "center",
        flex: 1,
    },
    texto: {
        fontSize: 25,
        color: "#FFFFFF",
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 160,
    },
    foto: {
        position: 'absolute',
        width: 20,
        height: 20,
        marginTop: 11,
    },
    fechar:{
        alignItems:'flex-end',
        marginRight: 10,
    }
})