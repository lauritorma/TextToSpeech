
import React, { useState } from 'react';
import { StyleSheet,View, TextInput, Button } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const [text, setText] = useState('');

  const speak = () => {
    Speech.speak(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 50, width: 300, borderColor: 'black', borderWidth: 2, margin: 100, textAlign: "center" }}
        onChangeText={text => setText(text)}
        value={text}
      />
      <Button title="Press to hear text!" onPress={speak} />
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
  
});



