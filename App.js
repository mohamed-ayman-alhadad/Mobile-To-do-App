import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TextInput } from 'react-native';


export default function App() {
  
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar backgroundColor='white'  barStyle=' dark-content' hidden={false} translucent={false}  />
      <Text style={styles.text}>to do app</Text>
      <TextInput style={styles.textInput} placeholder='Enter your name' />
      <TextInput style={styles.textInput} placeholder='Enter your age' />
      <TouchableOpacity style={styles.TouchableOpacity}>
        <Text style={{ color: 'white', }}>Submit</Text>
      </TouchableOpacity>
      <Text style={styles.breakLine}></Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' , width: '90%', marginBottom: 10 , marginTop: 10}}>
        <TouchableOpacity style={styles.pressed}>
          <Text style={{ color: 'white' }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.unpressed}>
          <Text>In progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.unpressed}>
          <Text >Done</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <Text>First Item</Text>
      </View>
      <View style={styles.item}>
        <Text>Second Item</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  text: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20
  },
  textInput: {
    width: '90%',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15
  },
  TouchableOpacity: {
    width: '45%',
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
  },
  breakLine: {
    width: '90%',
    height: 0.5,
    backgroundColor: 'gray',
    marginVertical: 10
  },
  pressed: {
    width: '30%',
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1
  },
  unpressed:{
    width: '30%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1
  },
  item:{
    width: '90%',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 15,
    marginBottom: 10
  }

});
