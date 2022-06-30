import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Card } from "../../components/Card/Card";
import { styles } from "./style";
import carta from "../../assets/carta.png"
import mesa from "../../assets/mesa.png"
import trofeu from "../../assets/trofeu.png"
import x from "../../assets/x.png"

export const Tipos = () => {
    return (

        <View style={styles.container}>
            <TouchableOpacity style={styles.fechar}>
                <Image style={styles.foto} source={x} />
            </TouchableOpacity>
            <Text style={styles.texto}>Que tipo de jogo?</Text>
            <Card foto={carta} titulo="Cash Games" descricao="Jogue pelo seu dinheiro nos limites que quiser." />
            <Card foto={mesa} titulo="Sit & Go" descricao="Jogue um torneio de Poker curto que começa sob demanda." />
            <Card foto={trofeu} titulo="Torneios" descricao="Jogue contra diversos jogadores pela chance de grandes prêmios" />
        </View>


    )
}