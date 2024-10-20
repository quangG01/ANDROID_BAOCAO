// src/screens/screen1.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Screen1 = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simple validation before navigating to the next screen
    if (email && password) {
      navigation.navigate('Screen2'); // Navigate to Screen2 (Electronics)
    } else {
      alert('Please enter valid email and password.');
    }
  };

  return (
    <View style={styles.container}>
      {/* App logo */}
      <Image source={require('../assets/Data/icon.png')} style={styles.logo} />
      
      {/* Title */}
      <Text style={styles.title}>Hello Again!</Text>
      <Text style={styles.subtitle}>Log into your account</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        {/* Password visibility toggle */}
        <TouchableOpacity style={styles.eyeIconContainer}>
          <Image source={require('../assets/Data/eye.png')} style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={handleLogin}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Social Login */}
      <Text style={styles.orText}>or</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image source={require('../assets/Data/google.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/Data/face.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/Data/apple.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles for the screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  inputContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  eyeIconContainer: {
    padding: 10,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  continueButton: {
    width: '90%',
    backgroundColor: '#00bcd4',
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#00bcd4',
    fontSize: 14,
    marginBottom: 20,
  },
  orText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});

export default Screen1;
