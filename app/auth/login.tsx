import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function LoginView() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>

     { <Image

     source={require("../../assets/images/vertical-shot-leopard-its-habitat-safari-okavanga-delta-botswana.jpg")}
      style={styles.cornerImage}
     /> }
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Please sign in to continue.</Text>

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

      <TouchableOpacity onPress={() => console.log("Forgot password clicked")}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => console.log("Logging in")}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Don’t have an account?{" "}
        <Text style={styles.link} onPress={() => router.push("/auth/signup")}>Sign up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff" },

 
  cornerImage: {
    position: "absolute",
    top: -30, 
    right: -30, 
    width: 130,
    height: 130,
    resizeMode: "contain", 
  },

  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#666", marginBottom: 20 },

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
    shadowColor: "#000", // shadow
    shadowOpacity: 0.1, 
    shadowRadius: 20, 
    elevation: 5,
  },
  

  icon: { marginRight: 10 },

  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },

  forgotPassword: { color: "#f7931e", textAlign: "right", marginBottom: 20 },
  button: { backgroundColor: "#f7931e", padding: 15, borderRadius: 8, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  footerText: { marginTop: 20, textAlign: "center" },
  link: { color: "#f7931e", fontWeight: "bold" },
});
