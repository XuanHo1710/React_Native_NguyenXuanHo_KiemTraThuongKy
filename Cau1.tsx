import { Text, SafeAreaView, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import {useState} from 'react'

export default function App() {
  const [inputA, setInputA] = useState("");
  const [inputKQ, setInputKQ] = useState("0");
   const handleClick = (value) => {
    switch (value){
      case "Enter":
        {
          if (inputA.includes("+")){
            setInputKQ("A")
            const kq = parseInt( inputA.split("+")[0]) + parseInt( inputA.split("+")[1])
            setInputKQ(kq + "");
          }  else if (inputA.includes("-")){
            const kq = parseInt( inputA.split("-")[0]) - parseInt( inputA.split("-")[1])
             setInputKQ(kq + "");
          } else if (inputA.includes("*")){
            const kq = parseInt( inputA.split("*")[0]) * parseInt( inputA.split("*")[1])
             setInputKQ(kq + "");
          } else if (inputA.includes(":")){
            const kq = parseInt( inputA.split(":")[0])/parseInt( inputA.split(":")[1])
             setInputKQ(kq + "");
          }
          break;
        }
      case "Xoa": 
      {
        setInputA(inputA.substring(0, inputA.length - 1))
        break;
      }
      default: 
        {
          setInputA(inputA + value);
          break;
        }
    }
    
  }


  return ( 
    <SafeAreaView style={styles.container}>
      <Text style={{width: 300, border: "1px solid #000", padding: 10}}>{inputKQ}</Text>
      <TextInput value={inputA} onChangeText={setInputA} style={styles.input} placeholder="Nhap o day" />
      <View style={styles.flexRow}> 
        <TouchableOpacity onPress={() => handleClick("0")} style={styles.button}>0 </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClick("1")} style={styles.button}>1 </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClick("2")} style={styles.button}>2 </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClick("3")} style={styles.button}>3 </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClick("4")} style={styles.button}>4 </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClick("5")} style={styles.button}>5 </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClick("6")} style={styles.button}>6 </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClick("7")} style={styles.button}>7 </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClick("8")} style={styles.button}>8 </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClick("9")} style={styles.button}>9 </TouchableOpacity>
      </ View>
       <View style={styles.flexRow}> 
        <TouchableOpacity  onPress={() => handleClick("+")} style={styles.button}>+ </TouchableOpacity>
        <TouchableOpacity  onPress={() => handleClick("-")} style={styles.button}>- </TouchableOpacity>
        <TouchableOpacity  onPress={() => handleClick("*")} style={styles.button}>* </TouchableOpacity>
        <TouchableOpacity  onPress={() => handleClick(":")} style={styles.button}>: </TouchableOpacity>
        <TouchableOpacity  onPress={() => handleClick("Xoa")} style={styles.button}>Xoa</TouchableOpacity>
        <TouchableOpacity  onPress={() => handleClick("Enter")} style={styles.button}>Enter</TouchableOpacity>

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
