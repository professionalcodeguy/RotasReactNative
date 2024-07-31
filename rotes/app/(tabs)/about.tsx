import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function AboutScreen() {
    const router = useRouter();
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Screen</Text>
      <Text style={styles.description}>
        Página Sobre
      </Text>
      <Button title="Ir para Home" onPress={() => router.push('/home')} color="#000" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F511E', // Verde escuro
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#86FF84', // Verde neon
    marginBottom: 20,
    fontFamily: 'Inter', // Fonte 'Inter'
  },
  description: {
    fontSize: 16,
    color: '#FFF', // Branco
    textAlign: 'center',
    fontFamily: 'Love Light', // Fonte 'Love Light',
    paddingBottom: 10,
  },
});