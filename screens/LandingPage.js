import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

export default function LandingPage({ navigation }) {
  return (
    <ImageBackground source={require('../assets/images/landing-bg.jpg')} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Najda – Emergency Response</Text>
        <Text style={styles.subtitle}>تطبيق الطوارئ الذكي للمسعفين والمتطوعين</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>تسجيل الدخول</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={{color:'#fff'}}>Fares Boubaker – Volunteer Paramedic © 2026 Najda App</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background:{ flex:1, justifyContent:'center', alignItems:'center' },
  overlay:{ backgroundColor:'rgba(0,0,0,0.4)', flex:1, justifyContent:'center', alignItems:'center', width:'100%' },
  title:{ fontSize:36, fontWeight:'bold', color:'#fff', marginBottom:10 },
  subtitle:{ fontSize:18, color:'#fff', marginBottom:20 },
  button:{ backgroundColor:'#ff4d4d', paddingVertical:15, paddingHorizontal:30, borderRadius:10 },
  buttonText:{ color:'#fff', fontSize:18, fontWeight:'bold' },
  footer:{ position:'absolute', bottom:10, alignItems:'center' }
});
