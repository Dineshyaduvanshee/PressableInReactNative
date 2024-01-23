import { StyleSheet, Text, View,Pressable } from "react-native";

const App = ()=>{
  return(
    <View style={styles.main}>
      {/* <Text style={{fontSize:26,backgroundColor:'purple',textAlign:'center',color:'cyan'}}>!!Pressable in React Native!!</Text> */}
      <Pressable
      onPress={()=>console.warn("Normap on press")}
      onLongPress={()=>console.warn("long press")}
      onPressIn={()=>console.warn("OnPressIn")}
      onPressOut={()=>console.warn("OnPressOut")}
      >
      <Text style={styles.pressableBtn}>Pressable</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent: 'center',
  },
  pressableBtn:{
    backgroundColor:'blue',
    color:'#fff',
    padding:10,
    borderRadius:10,
    fontSize:20,
    textAlign: 'center',
    shadowColor:'#000',
    elevation:5
  }
})

export default App;
