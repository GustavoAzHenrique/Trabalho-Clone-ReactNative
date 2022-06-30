import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style'
import seta from "../../assets/seta.png"

interface Card {
  foto?: any;
  titulo?: string;
  descricao?: string;
}

export const Card = ({ foto, titulo, descricao }: Card) => {
  return (
    <View>

      <TouchableOpacity style={styles.container}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
        <Image style={styles.foto} source={foto}/>
        <Image style={styles.foto2} source={seta}/>
      </TouchableOpacity>

    </View>
  );
};