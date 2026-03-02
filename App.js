import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  //VARIABLES DE ESTADO
  const [numero1,setNumero1]=useState("");
  const [numero2,setNumero2]=useState("");
  const [resultado, setResultado]=useState(0);  
  
  let convertidor=(dato)=>{
    return parseFloat(dato) || 0; // si es otro valor que no sea numerico toma el valor 0 por defaul
  };

  let sumar=()=>{
    let total=convertidor(numero1)+convertidor(numero2);
    setResultado(total.toFixed(2));
  };

  let restar=()=>{
    let total=convertidor(numero1)-convertidor(numero2);
    setResultado(total.toFixed(2));
  };

  let multiplicar=()=>{
    let total=convertidor(numero1)*convertidor(numero2);
    setResultado(total.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text>Reto 22 : CALCULADORA </Text>
      <TextInput
        style={styles.cajatexto} 
        value={numero1}
        onChangeText={(dato)=>{
          setNumero1(dato);
        }}
      />
      <TextInput
        style={styles.cajatexto}
        value={numero2}
        onChangeText={(dato)=>{
          setNumero2(dato);
        }}
      />
      <Text style={styles.lblResultado} >Resultado: {resultado}</Text>
      <Button
        title='Sumar'
        onPress={sumar}
      />
      <Button
        title='restar'
        onPress={restar}
      />
      <Button
        title='multiplicar'
        onPress={multiplicar}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajatexto:{
    borderColor: 'black',
    borderWidth:2,
    padding:20,
    margin:5,
    fontSize:15
  },
  lblResultado:{
    padding:20,
    margin:5,
    fontSize:20
  }
});
