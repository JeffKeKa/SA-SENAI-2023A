import React from "react";
import { StyleSheet, Text, View,TouchableOpacity,Image,TextInput,SafeAreaView,ScrollView} from 'react-native';



export default function perfil1(){
    
  return (
    <View style={styles.container}>
      
        <View style={styles.titulo}>
            <Text style={styles.t1}>PERFIL</Text>
        </View>

        <View style={styles.meio}>

            <SafeAreaView>
                <ScrollView>

                    <View style={styles.espacamento}> 
                    </View>

                    <View style={styles.parte1}>
                            <TouchableOpacity style={styles.btn1}> 
                                <Text style={styles.t2}>DADOS GERAIS</Text>
                            </TouchableOpacity>
                    </View>

                    <View style={styles.parte2}>
                            <TouchableOpacity style={styles.btn2}> 
                                <Text style={styles.t3}>CONTATO</Text>
                            </TouchableOpacity>
                    </View>

                    <View style={styles.parte3}>
                            <TouchableOpacity style={styles.btn3}> 
                                <Text style={styles.t4}>SENHA E EMAIL</Text>
                            </TouchableOpacity>
                    </View>

                    <View style={styles.espacamento1}> 
                    </View>

                            <View style={styles.porcao1}>
                                <View style={styles.espacamento2}>
                                </View>
                                <View style={styles.subtitulo}>
                                    <Text style={styles.t5}>CPF</Text>
                                </View>
                            </View>

                            <View style={styles.parte4}>
                                    <TextInput style={styles.input1}> 
                                    </TextInput>
                            </View>

                    <View style={styles.espacamento3}> 
                    </View>
                    
                    
                            <View style={styles.porcao1}>
                                <View style={styles.espacamento2}>
                                </View>
                                <View style={styles.subtitulo}>
                                    <Text style={styles.t5}>RG</Text>
                                </View>
                            </View>

                            <View style={styles.parte4}>
                                    <TextInput style={styles.input1}> 
                                    </TextInput>
                            </View>

                    <View style={styles.espacamento3}> 
                    </View>
                    
                    
                            <View style={styles.porcao1}>
                                <View style={styles.espacamento2}>
                                </View>
                                <View style={styles.subtitulo}>
                                    <Text style={styles.t5}>Nascimento</Text>
                                </View>
                            </View>

                            <View style={styles.parte4}>
                                    <TextInput style={styles.input1}> 
                                    </TextInput>
                            </View>

                    <View style={styles.espacamento3}> 
                    </View>

                            <View style={styles.parte3}>
                                    <TouchableOpacity style={styles.btn3}> 
                                        <Text style={styles.t8}> EDITAR</Text>
                                    </TouchableOpacity>
                            </View>

                    <View style={styles.espacamento3}> 
                    </View>

                </ScrollView>
            </SafeAreaView>

        </View>

        <View style={styles.fim}>

        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    width:'100%'
  },

  titulo:{
    flex:1,
    backgroundColor:'#004361',
    alignItems:'center',
    justifyContent:'center'
  },

  t1:{
    fontSize:42,
    color:'#FCE8CF'
  },

  meio:{
    flex:8,
    backgroundColor:'#BDD2DC'
  },

  espacamento:{
    height:40,
    width:'100%',
  },

  parte1:{

    height:100,
    width:'100%',
    alignItems:'center',
    justifyContent:'flex-end'
  },

  btn1:{

    height:'66%',
    width:'63%',
    backgroundColor:'#F8A83E',
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center'
  },

  t2:{
    fontSize:22,
    textDecorationLine:'underline',
  },

  parte2:{
    height:100,
    width:'100%',
    alignItems:'center',
    justifyContent:'flex-end'
  },

  btn2:{
    height:'66%',
    width:'63%',
    backgroundColor:'#F8A83E',
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center'
  },

  t3:{
    fontSize:22,
  },

  parte3:{
    height:100,
    width:'100%',
    alignItems:'center',
    justifyContent:'flex-end'
  },

  btn3:{
    height:'66%',
    width:'63%',
    backgroundColor:'#F8A83E',
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center'
  },

  t4:{

    fontSize:22,
  },

  espacamento1:{
    height:50,
    width:'100%',

  },

  porcao1:{
    height:40,
    width:'100%',
    flexDirection:'row'
  },

  espacamento2:{
    height:'100%',
    width:'19%',
  },

  subtitulo:{
    height:'100%',
    width:'50%',
    justifyContent:'center'
  },

  t5:{
    fontSize:20
  },

  parte4:{
    height:60,
    width:'100%',
    alignItems:'center',
    justifyContent:'center'

  },

  input1:{

    height:'100%',
    width:'63%',
    backgroundColor:'#FCE8CF',
    borderRadius:40,
    textAlign:'center'
  },

  espacamento3:{

    height:20,
    width:'100%'
  },

  t8:{
    fontSize:20
  },

  fim:{
    flex:1,
    backgroundColor:'#004361',
  }
});