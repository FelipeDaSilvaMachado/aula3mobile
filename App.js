import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './css/styles';

const App = () => {
  const [vlr, setVlr] = useState('');
  const [faixaEtaria, setFaixaEtaria] = useState('');

  const idade = parseInt(vlr);
  
  const verIdade = () => {
    if (idade < 18) {
      setFaixaEtaria('Menor de idade').toString();
    } else if (idade > 17) {
      setFaixaEtaria('Maior de idade').toString();
    } else {
      setFaixaEtaria('Digite um valor válido!').toString();
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        keyboardType="numeric"
        value={vlr}
        onChangeText={setVlr}
      />
      <Button
        style = {styles.button}
        title = "Faixa Etária" 
        onPress={verIdade}
      />
      <TextInput
        style={styles.input}
        placeholder="Faixa Etária"
        keyboardType="text"
        value={faixaEtaria}
        onChangeText={setFaixaEtaria}
        editable={false}
      />
    </View>
  );
};
export default App;
