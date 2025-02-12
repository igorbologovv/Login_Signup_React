import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function SignupView() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>

{ <Image

source={require("../../assets/images/vertical-shot-leopard-its-habitat-safari-okavanga-delta-botswana.jpg")}
 style={styles.cornerImage}
/> }
      {/* Arrow back */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Create Account</Text>

      {/*  Full Name field */}
      <View style={styles.inputContainer}>
        <Ionicons name="person" size={24} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#aaa"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      {/*  Email field */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={24} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Поле Password */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={24} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/*  Confirm Password field*/}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={24} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      {/*  Sign Up  button*/}
      <TouchableOpacity style={styles.button} onPress={() => console.log("Signing up")}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>

      {/* ref to Login */}
      <Text style={styles.footerText}>
        Already have an account?{" "}
        <Text style={styles.link} onPress={() => router.push("/auth/login")}>Sign in</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff" },
  backButton: { position: "absolute", top: 50, left: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  
  cornerImage: {
    position: "absolute",
    top: -30, 
    right: -30, 
    width: 130,
    height: 130,
    resizeMode: "contain", 
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
        // shadow
        shadowColor: "#000", 
        shadowOpacity: 0.1, 
        shadowRadius: 20, 
        elevation: 5,
  },
  
  icon: { marginRight: 10 },
  
  input: {
    flex: 1,
    height: 50,
    fontSize: 18,
    fontWeight: "bold", // 
    color: "#333", 
  },

  button: { backgroundColor: "#f7931e", padding: 15, borderRadius: 8, alignItems: "center", marginTop: 20 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  
  footerText: { marginTop: 20, textAlign: "center" },
  link: { color: "#f7931e", fontWeight: "bold" },
});
