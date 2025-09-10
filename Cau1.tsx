import { Text, SafeAreaView, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{width: 300, border: "1px solid #000", padding: 10}}>Ket qua</Text>
      <TextInput style={styles.input} placeholder="Nhap so A" />
      <TextInput  style={styles.input}  placeholder="Nhap so B" />

      <View style={styles.flexRow}> 
        <TouchableOpacity style={styles.button}>0 </TouchableOpacity>
        <TouchableOpacity style={styles.button}>1 </TouchableOpacity>
        <TouchableOpacity style={styles.button}>2 </TouchableOpacity>
        <TouchableOpacity style={styles.button}>3 </TouchableOpacity>
        <TouchableOpacity style={styles.button}>4 </TouchableOpacity>
        <TouchableOpacity style={styles.button}>5 </TouchableOpacity>
        <TouchableOpacity style={styles.button}>6 </TouchableOpacity>
        <TouchableOpacity style={styles.button}>7 </TouchableOpacity>
        <TouchableOpacity style={styles.button}>8 </TouchableOpacity>
        <TouchableOpacity style={styles.button}>9 </TouchableOpacity>
      </ View>
       <View style={styles.flexRow}> 
        <TouchableOpacity style={styles.button}>+ </TouchableOpacity>
        <TouchableOpacity style={styles.button}>- </TouchableOpacity>
        <TouchableOpacity style={styles.button}>* </TouchableOpacity>
        <TouchableOpacity style={styles.button}>: </TouchableOpacity>
        <TouchableOpacity style={styles.button}>Xoa</TouchableOpacity>
      </ View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#ecf0f1',
    padding: 10,
    gap: 10
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap"
  },
  input: {
    border: "1px solid #000",
    padding: "2px 6px"
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #000",
    padding: "10px 20px"
  }
});
