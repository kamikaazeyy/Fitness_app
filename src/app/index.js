import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import excercises from '../../assets/Workouts Assets/data/exercises.json';
import ExcerciseListItem from '../../src/components/ExerciseListItem';



export default function App() {
  return (
    <View style={styles.container}>

      <FlatList 
        data={excercises}
        contentContainerStyle={{gap:5}}
        keyExtractor={(item, index)=>item.name + index} // taking in account that the names will be unique
        renderItem={({item}) => <ExcerciseListItem item={item}/> }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent:'center',
    padding: 10,
    paddingTop:70,
  },
});