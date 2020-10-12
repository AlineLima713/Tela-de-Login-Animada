import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Animated } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
          source={require('./assets/logo.png')} />
        <StatusBar style="auto" />
      </View>

      <Animated.View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <RectButton style={styles.btnSubmit}>
          <Text style={styles.submitText}>Acessar</Text>
        </RectButton>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Criar conta</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    marginTop: '30%',
    
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 30,
  },

  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },

  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 50,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  submitText: {
    color: '#FFF',
    fontSize: 18,
  },

  btnRegister: {
    marginTop: 10,
  },

  registerText: {
    color: '#FFF'
  }
});
