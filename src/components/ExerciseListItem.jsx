import { Link } from 'expo-router';
import { StyleSheet,Text, View } from 'react-native';


function CapitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function ExcerciseListItem({item}) {
    return(
      <View style={styles.excercisecontainer}>
              <Link href ={'/excercise'}style={styles.excesciseName}>{item.name}</Link>
              <Text style={styles.excerciseSubtitle}>
                {CapitalizeFirstLetter(item.muscle)} | {CapitalizeFirstLetter(item.equipment)}
              </Text>
      </View>
    )
  
  }

  const styles = StyleSheet.create({
    
    excercisecontainer: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10,
      marginHorizontal:2,
          // shadow
      shadowColor: "#000",
      shadowOffset: {
	      width: 0,
	      height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,

      elevation: 15,
    },
    excesciseName: {
      fontSize: 25, 
      fontWeight: '500',
    },
    excerciseSubtitle: {
      color: 'dimgray',
    }
  });