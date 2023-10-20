
//Escalar es vector-vector y multi escalar-vector, aunque suene contradictorio
//Desarrollado por Diego Arce Larios
import React, {Component} from "react";
import {Text, View, StyleSheet, SafeAreaView, Platform, TouchableOpacity, ImageBackground, Image} from 'react-native'



export default class Inicio extends Component{

    constructor(props){
        super(props)
        this.state = {
            texto: 'Elige una opción...'
        }
    }

    cambiarTexto(name){
        this.setState({texto: name})
    }

    translado(pantalla){
        if(pantalla === 'Vector-vector = vector'){
            this.props.navigation.navigate('Escalar')
        }else if(pantalla === 'Vector-escalar = vector'){
            this.props.navigation.navigate('Multi')
        }else if(pantalla === 'Vector-vector = escalar'){
            this.props.navigation.navigate('EscalarV')
        }
    }

    render(){

        return(
            <ImageBackground source={require('../assets/fisica.png')} style={{flex: 1, padding: 20}}>
                <SafeAreaView>
                    <View style={styles.textV}>
                        <Text style={styles.titulaT}>
                            Calculadora Vectorial
                        </Text>
                    </View>
                    <View style={styles.tituloV}>
                        <Text style={{fontWeight: 'bold'}}>
                            {this.state.texto}
                        </Text>
                    </View>
                    <View style={styles.color}>

                            
                            <TouchableOpacity style={styles.botones} onPress={()=>this.cambiarTexto('Vector-vector = vector')}>
                                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                                    Vector-vector = vector
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.botones} onPress={()=>this.cambiarTexto('Vector-escalar = vector')}>
                                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                                    Vector-escalar = vector 
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.botones} onPress={()=>this.cambiarTexto('Vector-vector = escalar')}>
                                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                                    Vector-vector = escalar
                                </Text>
                            </TouchableOpacity>
                            
                    </View> 
                    <TouchableOpacity onPress={()=>this.translado(this.state.texto)}>
                        <ImageBackground source={require('../assets/apple.png')} style={styles.apple}>
                            
                                <Text style={{alignSelf: 'center', fontSize: 15, fontWeight: 'bold'}}>
                                    Siguiente
                                </Text>
                                <Text style={{alignSelf: 'center', fontSize: 15, fontWeight: 'bold'}}>
                                    -------D
                                </Text> 
                            {/* ignora este error*/}
                        </ImageBackground>
                    </TouchableOpacity>
                    
                </SafeAreaView>
            </ImageBackground>
        )
    }

}
const appleSize = 100
const styles = StyleSheet.create({
    tituloV:{
        alignItems: 'center',
        top: 20, 
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#C8E16C',
        borderColor: '#767676',
        borderWidth: 25,
        borderRadius: 10
    },
    apple:{
        width: (appleSize*5)/6,
        height: appleSize,
        margin: 10,
        alignSelf: 'center',
        justifyContent: 'center'
        
    },
    titulaT:{
        fontWeight: 'bold',
        fontSize: 30, 
        backgroundColor: '#FF8E8E',
        borderColor: 'black',
        borderWidth: 4,
        padding: 10,
        color: 'black'
    },
    textV:{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 60
    },
    color:{
        backgroundColor: '#767676',
        padding: 40,
        borderRadius: 10,
    },
    botones:{
        backgroundColor: '#E8980A',
        padding: 10,
        margin: 5,
        justifyContent: "center",
        borderWidth: 3,
        flexDirection: 'row'
    },

})