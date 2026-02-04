import React from 'react';
import { View, Text, FlatList } from 'react-native';

const dummyUsers = [
  {id:'1',name:'Fares Boubaker',role:'Responder'},
  {id:'2',name:'Ali Ahmed',role:'User'}
];

export default function AdminScreen(){
  return(
    <View style={{padding:20}}>
      <Text style={{fontSize:22,fontWeight:'bold',marginBottom:10}}>إدارة المستخدمين</Text>
      <FlatList data={dummyUsers} keyExtractor={item=>item.id} renderItem={({item})=><Text>{item.name} - {item.role}</Text>} />
    </View>
  );
}
