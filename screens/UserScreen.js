import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { sendEmergencyReport } from '../services/AIService';

export default function UserScreen() {
  const [description,setDescription]=useState('');
  const [image,setImage]=useState(null);

  const pickImage=async()=>{
    let result=await ImagePicker.launchImageLibraryAsync({base64:true});
    if(!result.canceled) setImage(result.assets[0].base64);
  };

  const handleSend=async()=>{
    if(!description){ Alert.alert('أدخل وصف الطارئ'); return; }
    const response = await sendEmergencyReport({description,image});
    Alert.alert('تم إرسال البلاغ', `تم تصنيفه كـ: ${response.type}`);
  };

  return (
    <View style={{padding:20}}>
      <Text style={{fontSize:18,fontWeight:'bold',marginBottom:10}}>إرسال بلاغ طارئ</Text>
      <TextInput placeholder='صف الحالة...' multiline value={description} onChangeText={setDescription} style={{borderWidth:1,borderColor:'#ccc',padding:10,marginBottom:10}} />
      <Button title='اختر صورة' onPress={pickImage} />
      {image && <Image source={{uri:`data:image/jpeg;base64,${image}`}} style={{width:200,height:200,marginVertical:10}} />}
      <Button title='إرسال البلاغ' onPress={handleSend} />
    </View>
  );
}
