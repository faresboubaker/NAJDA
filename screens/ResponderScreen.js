import React from 'react';
import { View, Text, Button, FlatList, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const dummyReports = [
  {id:'1',type:'نزيف / Bleeding',location:{latitude:36.0,longitude:5.0}},
  {id:'2',type:'حريق / Fire',location:{latitude:36.1,longitude:5.1}}
];

export default function ResponderScreen(){
  const handleAccept=(id)=>Alert.alert('تم قبول البلاغ',`ID: ${id}`);
  return(
    <View style={{flex:1}}>
      <MapView style={{flex:1}} initialRegion={{latitude:36.0,longitude:5.0,latitudeDelta:0.2,longitudeDelta:0.2}}>
        {dummyReports.map(r=><Marker key={r.id} coordinate={r.location} title={r.type} />)}
      </MapView>
      <FlatList data={dummyReports} keyExtractor={item=>item.id} renderItem={({item})=>(
        <View style={{padding:10,borderBottomWidth:1,borderColor:'#ccc'}}>
          <Text style={{fontWeight:'bold'}}>{item.type}</Text>
          <Button title='قبول البلاغ' onPress={()=>handleAccept(item.id)} />
        </View>
      )} />
    </View>
  );
}
