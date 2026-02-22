import React, { useMemo, useRef, useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from "react-native"
import { AnagramPresenter } from "../presenter/AnagramPresenter"

export default function AnagramView() {

  // Create presenter once (avoid recreating on every render)
  const presenter = useMemo(() => new AnagramPresenter(), [])

  // Local UI state (presentation layer concern)
  const [firstAnagram, setFirstAnagram] = useState("")
  const [secondAnagram, setSecondAnagram] = useState("")
  const [result, setResult] = useState<boolean | null>(null)

  const feedbackAnim = useRef(new Animated.Value(0)).current

  const playFeedback = () => {
  feedbackAnim.setValue(0)

  Animated.spring(feedbackAnim, {
    toValue: 1,
    useNativeDriver: true,
    friction: 6,
    tension: 140,
  }).start()
}

  // Delegates business logic to the presenter
  const handleCheck = () => {
    const checkResult = presenter.check(firstAnagram, secondAnagram)
    setResult(checkResult)
    playFeedback()
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Anagram Checker</Text>

      {/* First input controlled by React state */}
      <Text style={styles.label}>First Word</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter first word"
        placeholderTextColor="#888"
        value={firstAnagram}
        onChangeText={setFirstAnagram}
      />

      {/* Second input controlled by React state */}
      <Text style={styles.label}>Second Word</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter second word"
        placeholderTextColor="#888"
        value={secondAnagram}
        onChangeText={setSecondAnagram}
      />

      {/* Triggers presenter logic */}
      <TouchableOpacity style={styles.button} onPress={handleCheck}>
        <Text style={styles.buttonText}>Check</Text>
      </TouchableOpacity>

      {result !== null && (
        <Animated.Text
            style={[
            styles.result,
            {
                opacity: feedbackAnim, // 0 -> 1 fade
                transform: [
                {
                    scale: feedbackAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.98, 1.0], // small pop
                    }),
                },
                ],
            },
            ]}
        >
            {result ? "They are anagrams" : "Not anagrams"}
        </Animated.Text>
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