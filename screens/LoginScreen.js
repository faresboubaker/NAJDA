import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleLogin = () => {
    if(!email||!password){ Alert.alert('أدخل البريد الإلكتروني وكلمة المرور'); return; }
    if(email.includes('responder')) navigation.replace('Responder');
    else if(email.includes('admin')) navigation.replace('Admin');
    else navigation.replace('User');
  };

  return (
    <View style={{flex:1,justifyContent:'center',padding:20}}>
      <Text style={{fontSize:24,fontWeight:'bold',marginBottom:20}}>تسجيل الدخول</Text>
      <TextInput placeholder='البريد الإلكتروني' value={email} onChangeText={setEmail} style={{borderWidth:1,borderColor:'#ccc',padding:10,marginBottom:10}} />
      <TextInput placeholder='كلمة المرور' secureTextEntry value={password} onChangeText={setPassword} style={{borderWidth:1,borderColor:'#ccc',padding:10,marginBottom:20}} />
      <Button title='تسجيل الدخول' onPress={handleLogin} />
    </View>
  );
}
