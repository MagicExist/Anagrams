import React, { useMemo, useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { AnagramPresenter } from "../presenter/AnagramPresenter"

export default function AnagramView() {

    const presenter = useMemo(()=> new AnagramPresenter(),[])

    const [firstAnagram, setFirstAnagram] = useState("")
    const [secondAnagram, setSecondAnagram] = useState("")
    const [result, setResult] = useState<boolean | null>(null)

    const handleCheck = ()=>{
        const checkResult = presenter.check(firstAnagram,secondAnagram)
        setResult(checkResult)
    }
  return (
    <View style={styles.container}>
      
      {/* Title */}
      <Text style={styles.title}>Anagram Checker</Text>

      {/* First Input */}
      <Text style={styles.label}>First Word</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter first word"
        placeholderTextColor="#888"
        onChangeText={(text) => setFirstAnagram(text)}
      />

      {/* Second Input */}
      <Text style={styles.label}>Second Word</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter second word"
        placeholderTextColor="#888"
        onChangeText={(text) => setSecondAnagram(text)}
      />

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handleCheck}>
        <Text style={styles.buttonText}>Check</Text>
      </TouchableOpacity>

      {/* Hidden Result Text (initially not shown) */}
      {result !== null && (
        <Text style={styles.result}>
            {result ?  "They are anagrams" : "Not anagrams"}
        </Text>
      )}   

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 32,
    textAlign: "center",
    color: "#ffffff",
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: "#dddddd",
  },
  input: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    color: "#ffffff",
    backgroundColor: "#1e1e1e",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  result: {
    marginTop: 24,
    fontSize: 18,
    textAlign: "center",
    color: "#ffffff",
  },
})