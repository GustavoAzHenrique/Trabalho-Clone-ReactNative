import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import logoPoker from '../../assets/logo.png'
import icone from '../../assets/icon.png'

export function Signin() {
    return (

        <View style={styles.container}>
            <Image style={styles.logoPoker} source={logoPoker} />

            <View style={styles.login}>
                <Text style={styles.texto}>Nome de Usuário/Email</Text>
                <TextInput style={styles.user} value="GustavoAzHenri" />

                <TouchableOpacity>
                    <Image style={styles.icone} source={icone} />
                </TouchableOpacity>

                <TextInput style={styles.senha} placeholder="Senha" placeholderTextColor="#7c7c7c" secureTextEntry={true} />

                <TouchableOpacity>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.anotacao}>Novo no PokerStars? Participe Agora</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.anotacao}>Esqueceu a senha?</Text>
                </TouchableOpacity>

            </View>

        </View>


    )
}