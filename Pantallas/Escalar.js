import React, {Component} from "react";
import {Text, View, StyleSheet, ScrollView, SafeAreaView, Alert, Platform, TouchableOpacity, ImageBackground, Image} from 'react-native'

var k=0
var j=0
var i=0

export default class Escalar extends Component{

    constructor(props){
        super(props)
        this.state={
            number1: 0,
            number2: 0,
            number3: 0,
            number4: 0,
            number5: 0,
            number6: 0,
            valor: 1,
            operacion: 1,
            resultado1: 0,
            resultado2: 0,
            resultado3: 0,
            panel: true
        }
    }

    numero(num){
        if(this.state.valor===1){
            if(this.state.number1-(Math.floor(this.state.number1))===0){
            if(this.state.number1>=0){
                if(this.state.number1 === 0){
                    this.setState({number1: num})
                }else{
                    this.setState({number1: (this.state.number1*10)+num})
                }
            }else if(this.state.number1<0){
                if(this.state.number1 === 0){
                    this.setState({number1: num})
                }else{
                    this.setState({number1: (this.state.number1*10)-num})
                }
            }
        }else{
            Alert.alert('Alerta', 'No es posible agregar números a un número con decimales')
        }
        }
        if(this.state.valor===2){
            if(this.state.number2-(Math.floor(this.state.number2))===0){
            if(this.state.number2>=0){
                if(this.state.number2 === 0){
                    this.setState({number2: num})
                }else{
                    this.setState({number2: (this.state.number2*10)+num})
                }
            }else if(this.state.number2<0){
                if(this.state.number2 === 0){
                    this.setState({number2: num})
                }else{
                    this.setState({number2: (this.state.number2*10)-num})
                }
            }
        }else{
            Alert.alert('Alerta', 'No es posible agregar números a un número con decimales')
        }
        }
        if(this.state.valor===3){
            if(this.state.number3-(Math.floor(this.state.number3))===0){
            if(this.state.number3>=0){
                if(this.state.number3 === 0){
                    this.setState({number3: num})
                }else{
                    this.setState({number3: (this.state.number3*10)+num})
                }
            }else if(this.state.number3<0){
                if(this.state.number3 === 0){
                    this.setState({number3: num})
                }else{
                    this.setState({number3: (this.state.number3*10)-num})
                }
            }
        }else{
            Alert.alert('Alerta', 'No es posible agregar números a un número con decimales')
        }
        }
        if(this.state.valor===4){
            if(this.state.number4-(Math.floor(this.state.number4))===0){
            if(this.state.number4>=0){
                if(this.state.number4 === 0){
                    this.setState({number4: num})
                }else{
                    this.setState({number4: (this.state.number4*10)+num})
                }
            }else if(this.state.number4<0){
                if(this.state.number4 === 0){
                    this.setState({number4: num})
                }else{
                    this.setState({number4: (this.state.number4*10)-num})
                }
            }
        }else{
            Alert.alert('Alerta', 'No es posible agregar números a un número con decimales')
        }
        }
        if(this.state.valor===5){
            if(this.state.number5-(Math.floor(this.state.number5))===0){
            if(this.state.number5>=0){
                if(this.state.number5 === 0){
                    this.setState({number5: num})
                }else{
                    this.setState({number5: (this.state.number5*10)+num})
                }
            }else if(this.state.number5<0){
                if(this.state.number5 === 0){
                    this.setState({number5: num})
                }else{
                    this.setState({number5: (this.state.number5*10)-num})
                }
            }
        }else{
            Alert.alert('Alerta', 'No es posible agregar números a un número con decimales')
        }
        }
        if(this.state.valor===6){
            if(this.state.number6-(Math.floor(this.state.number6))===0){
            if(this.state.number6>=0){
                if(this.state.number6 === 0){
                    this.setState({number6: num})
                }else{
                    this.setState({number6: (this.state.number6*10)+num})
                }
            }else if(this.state.number6<0){
                if(this.state.number6 === 0){
                    this.setState({number6: num})
                }else{
                    this.setState({number6: (this.state.number6*10)-num})
                }
            }
        }else{
            Alert.alert('Alerta', 'No es posible agregar números a un número con decimales')
        }
        }

    }

    delet(){
        if(this.state.valor===1){
            if(this.state.number1-(Math.floor(this.state.number1))===0){
                this.setState({number1: (this.state.number1-(this.state.number1%10))/10})
            }else{
                Alert.alert('Alerta', 'No es posible eliminar números a un número con decimales, prueba utilizando C')
            }
        }
        if(this.state.valor===2){
            if(this.state.number2-(Math.floor(this.state.number2))===0){
                this.setState({number2: (this.state.number2-(this.state.number2%10))/10})
            }else{
                Alert.alert('Alerta', 'No es posible eliminar números a un número con decimales, prueba utilizando C')
            }
        }
        if(this.state.valor===3){
            if(this.state.number3-(Math.floor(this.state.number3))===0){
                this.setState({number3: (this.state.number3-(this.state.number3%10))/10})
            }else{
                Alert.alert('Alerta', 'No es posible eliminar números a un número con decimales, prueba utilizando C')
            }
        }
        if(this.state.valor===4){
            if(this.state.number4-(Math.floor(this.state.number4))===0){
                this.setState({number4: (this.state.number4-(this.state.number4%10))/10})
            }else{
                Alert.alert('Alerta', 'No es posible eliminar números a un número con decimales, prueba utilizando C')
            }
        }
        if(this.state.valor===5){
            if(this.state.number5-(Math.floor(this.state.number5))===0){
                this.setState({number5: (this.state.number5-(this.state.number5%10))/10})
            }else{
                Alert.alert('Alerta', 'No es posible eliminar números a un número con decimales, prueba utilizando C')
            }
        }
        if(this.state.valor===6){
            if(this.state.number6-(Math.floor(this.state.number6))===0){
                this.setState({number6: (this.state.number6-(this.state.number6%10))/10})
            }else{
                Alert.alert('Alerta', 'No es posible eliminar números a un número con decimales, prueba utilizando C')
            }
        }
    }

    CE(){
        if(this.state.valor===1){
            this.setState({number1: 0})
        }
        if(this.state.valor===2){
            this.setState({number2: 0})
        }
        if(this.state.valor===3){
            this.setState({number3: 0})
        }
        if(this.state.valor===4){
            this.setState({number4: 0})
        }
        if(this.state.valor===5){
            this.setState({number5: 0})
        }
        if(this.state.valor===6){
            this.setState({number6: 0})
        }
    }

    simbolo(s){
        if(this.state.valor===1){
            if(s==='mas'){
                if(this.state.number1<=0){
                    this.setState({number1: this.state.number1*-1})
                }
            }else if (s==='menos'){
                if(this.state.number1>=0){
                    this.setState({number1: this.state.number1*-1})
                }
            }
        }
        if(this.state.valor===2){
            if(s==='mas'){
                if(this.state.number2<=0){
                    this.setState({number2: this.state.number2*-1})
                }
            }else if (s==='menos'){
                if(this.state.number2>=0){
                    this.setState({number2: this.state.number2*-1})
                }
            }
        }
        if(this.state.valor===3){
            if(s==='mas'){
                if(this.state.number3<=0){
                    this.setState({number3: this.state.number3*-1})
                }
            }else if (s==='menos'){
                if(this.state.number3>=0){
                    this.setState({number3: this.state.number3*-1})
                }
            }
        }
        if(this.state.valor===4){
            if(s==='mas'){
                if(this.state.number4<=0){
                    this.setState({number4: this.state.number4*-1})
                }
            }else if (s==='menos'){
                if(this.state.number4>=0){
                    this.setState({number4: this.state.number4*-1})
                }
            }
        }
        if(this.state.valor===5){
            if(s==='mas'){
                if(this.state.number5<=0){
                    this.setState({number5: this.state.number5*-1})
                }
            }else if (s==='menos'){
                if(this.state.number5>=0){
                    this.setState({number5: this.state.number5*-1})
                }
            }
        }
        if(this.state.valor===6){
            if(s==='mas'){
                if(this.state.number6<=0){
                    this.setState({number6: this.state.number6*-1})
                }
            }else if (s==='menos'){
                if(this.state.number6>=0){
                    this.setState({number6: this.state.number6*-1})
                }
            }
        }
        
    }

    
    cero(){
        if(this.state.valor===1){
            this.setState({number1: this.state.number1*10})
        }
        if(this.state.valor===2){
            this.setState({number2: this.state.number2*10})
        }
        if(this.state.valor===3){
            this.setState({number3: this.state.number3*10})
        }
        if(this.state.valor===4){
            this.setState({number4: this.state.number4*10})
        }
        if(this.state.valor===5){
            this.setState({number5: this.state.number5*10})
        }
        if(this.state.valor===6){
            this.setState({number6: this.state.number6*10})
        }
    }

    cero1(){
        if(this.state.valor===1){
            this.setState({number1: this.state.number1/10})
        }
        if(this.state.valor===2){
            this.setState({number2: this.state.number2/10})
        }
        if(this.state.valor===3){
            this.setState({number3: this.state.number3/10})
        }
        if(this.state.valor===4){
            this.setState({number4: this.state.number4/10})
        }
        if(this.state.valor===5){
            this.setState({number5: this.state.number5/10})
        }
        if(this.state.valor===6){
            this.setState({number6: this.state.number6/10})
        }
    }


    igual(){
        const{number1,number2,number3,number4,number5,number6,operacion}=this.state

        if(operacion===1){
            this.setState({resultado1:number1+number4, resultado2:number2+number5,resultado3:number3+number6})
        }else if(operacion===2){
            this.setState({resultado1:number1-number4, resultado2:number2-number5,resultado3:number3-number6})
        }else if(operacion===3){
            k=(number3*number5)-(number2*number6)
            j=(number1*number6)-(number3*number4)
            i=(number2*number4)-(number1*number5)
            this.setState({resultado1:k,resultado2:j,resultado3:i})
        }
    }
    decimal(){
        if(this.state.valor===1){
            this.setState({number1: this.state.number1/10})
        }
        if(this.state.valor===2){
            this.setState({number2: this.state.number2/10})
        }
        if(this.state.valor===3){
            this.setState({number3: this.state.number3/10})
        }
        if(this.state.valor===4){
            this.setState({number4: this.state.number4/10})
        }
        if(this.state.valor===5){
            this.setState({number5: this.state.number5/10})
        }
        if(this.state.valor===6){
            this.setState({number6: this.state.number6/10})
        }
    }

    render(){
        return(
            
            <View style={{flex: 1, justifyContent: 'flex-end', backgroundColor: 'black'}}>
                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 50,  borderBottomWidth: 3, borderColor: 'white'}}>
                    <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
                        Calculadora vectorial
                    </Text>
                </View>
                
                <ScrollView style={{flex: 1, borderBottomWidth: 3, borderColor: 'white'}}>
                    <View style={{justifyContent: 'center', marginTop: 40, margin: 10}}>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                            + = suma de vectores
                        </Text>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                            - = resta de vectores
                        </Text>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                            x = multiplicación vector-vector vectorial
                        </Text>
                        <View style={{flexDirection: 'row', marginTop: 40, backgroundColor: '#676767'}}>
                        <TouchableOpacity style={[styles.numeros,{backgroundColor: '#F193EA'}]} onPress={()=>this.cero1()}>
                            <Text>
                                ÷10
                            </Text>
                            
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.numeros,{backgroundColor: '#F193EA'}]} onPress={()=>this.cero()}>
                            <Text>
                                x10
                            </Text>
                        </TouchableOpacity>
                        
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 40, backgroundColor: '#676767'}}>
                        <TouchableOpacity style={[styles.numeros,{backgroundColor: this.state.valor===1?'#8ED671':'#348aff'}]} onPress={()=>this.setState({valor: 1})}>
                            <Text>
                                {this.state.number1}k
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.numeros,{backgroundColor: this.state.valor===2?'#8ED671':'#348aff'}]} onPress={()=>this.setState({valor: 2})}>
                            <Text>
                                {this.state.number2}j
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.numeros,{backgroundColor: this.state.valor===3?'#8ED671':'#348aff'}]} onPress={()=>this.setState({valor: 3})}>
                            <Text>
                                {this.state.number3}i
                            </Text>
                        </TouchableOpacity>
                        
                    </View>

                    <View style={{flexDirection: 'row', marginTop: 40, backgroundColor: '#676767', alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity style={[styles.oper,{backgroundColor: this.state.operacion===1?'#F76C4D':'#F7F74D'}]} onPress={()=>this.setState({operacion: 1})}>
                            <Text>
                                +
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.oper,{backgroundColor: this.state.operacion===2?'#F76C4D':'#F7F74D'}]} onPress={()=>this.setState({operacion: 2})}>
                            <Text>
                                -
                            </Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={[styles.oper,{backgroundColor: this.state.operacion===3?'#F76C4D':'#F7F74D'}]} onPress={()=>this.setState({operacion: 3})}>
                            <Text>
                                x
                            </Text>
                        </TouchableOpacity>
                        
                    </View>

                    <View style={{flexDirection: 'row', marginTop: 40, backgroundColor: '#676767'}}>
                        <TouchableOpacity style={[styles.numeros,{backgroundColor: this.state.valor===4?'#8ED671':'#348aff'}]} onPress={()=>this.setState({valor: 4})}>
                            <Text>
                                {this.state.number4}k
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.numeros,{backgroundColor: this.state.valor===5?'#8ED671':'#348aff'}]} onPress={()=>this.setState({valor: 5})}>
                            <Text>
                                {this.state.number5}j
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.numeros,{backgroundColor: this.state.valor===6?'#8ED671':'#348aff'}]} onPress={()=>this.setState({valor: 6})}>
                            <Text>
                                {this.state.number6}i
                            </Text>
                        </TouchableOpacity>
                        
                    </View>
                        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 35}}>
                            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                                Resultado:
                            </Text>
                            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                                ({this.state.resultado1})k + ({this.state.resultado2})j + ({this.state.resultado3})i
                            </Text>
                        </View>

                    <TouchableOpacity style={styles.regresar} onPress={()=>this.props.navigation.navigate('Inicio')}>
                        <Text style={styles.texto}>
                            Regresar
                        </Text>
                    </TouchableOpacity>
                    
                </ScrollView>
                <View style={{backgroundColor: '#676767', margin: 20, borderWidth: 3, borderColor: 'white'}}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={styles.EscalarT} onPress={()=>this.numero(7)}>
                            <Text style={styles.texto}>
                                7
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.EscalarT} onPress={()=>this.numero(8)}>
                            <Text style={styles.texto}>
                                8
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.EscalarT} onPress={()=>this.numero(9)}>
                            <Text style={styles.texto}>
                                9
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.EscalarT3} onPress={()=>this.simbolo('mas')}>
                            <Text style={styles.texto}>
                                +
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={styles.EscalarT} onPress={()=>this.numero(4)}>
                            <Text style={styles.texto}>
                                4
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.EscalarT} onPress={()=>this.numero(5)}>
                            <Text style={styles.texto}>
                                5
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.EscalarT} onPress={()=>this.numero(6)}>
                            <Text style={styles.texto}>
                                6
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.EscalarT3} onPress={()=>this.simbolo('menos')}>
                            <Text style={styles.texto}>
                                -
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={styles.EscalarT} onPress={()=>this.numero(1)}>
                            <Text style={styles.texto}>
                                1
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.EscalarT} onPress={()=>this.numero(2)}>
                            <Text style={styles.texto}>
                                2
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.EscalarT} onPress={()=>this.numero(3)}>
                            <Text style={styles.texto}>
                                3
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.EscalarT5} onPress={()=>this.igual()}>
                            <Text style={styles.texto}>
                                =
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={[styles.EscalarT, {paddingHorizontal: 31}]} onPress={()=>this.decimal()}>
                            <Text style={styles.texto}>
                                .
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.EscalarT} onPress={()=>this.numero(0)}>
                            <Text style={styles.texto}>
                                0
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.EscalarT6} onPress={()=>this.CE()}>
                            <Text style={styles.texto}>
                                C
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.EscalarT2} onPress={()=>this.delet()}>
                            <Text style={styles.texto}>
                                D
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
}
}

const styles = StyleSheet.create({
    EscalarT:{
        padding: 30,
        margin: 5,
        backgroundColor: '#A7A7A7'
    },
    EscalarT2:{
        padding: 30,
        margin: 5,
        backgroundColor: 'orange'
    },
    EscalarT3:{
        padding: 30,
        margin: 5,
        backgroundColor: '#9ACFE1'
    },
    EscalarT4:{
        padding: 30,
        margin: 5,
        backgroundColor: '#FB8989'
    },
    EscalarT5:{
        padding: 30,
        margin: 5,
        backgroundColor: '#A8D671'
    },
    EscalarT6:{
        padding: 30,
        margin: 5,
        backgroundColor: '#C071D6'
    },
    texto:{
        fontWeight: 'bold',
    },
    numeros:{
        margin: 5,  
        padding: 5, 
        borderWidth: 3,
        flex: 1
    },
    oper:{
        margin: 5,  
        padding: 5, 
        alignItems: 'center',
        borderWidth: 3,
        flex: 1
    },



    regresar:{
        padding: 5,
        marginVertical: 20,
        backgroundColor: 'orange',
        width: '33%',
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: 'white'
    },

})