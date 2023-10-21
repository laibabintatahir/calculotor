import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [operation, setOperation] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
        setOperation('');
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setOperation('');
    } else {
      setInput(input + value);
      setOperation(operation + value);
    }
  };

  const buttons = [
    ['C', '(', ')', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '%', '='],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.operationContainer}>
        <Text style={styles.operationText}>{operation}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>{input}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonRow}>
            {row.map((button) => (
              <TouchableOpacity
                key={button}
                style={[
                  styles.button,
                  button === '=' ? styles.equalsButton : null,
                  button === 'C' ? styles.clearButton : null,
                ]}
                onPress={() => handlePress(button)}>
                <Text
                  style={[
                    styles.buttonText,
                    button === '=' ? styles.equalsButtonText : null,
                    button === 'C' ? styles.clearButtonText : null,
                  ]}>
                  {button}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  operationContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
    backgroundColor: '#ffffff',
  },
  operationText: {
    fontSize: 24,
    color: '#777',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
    backgroundColor: '#ffffff',
  },
  inputText: {
    fontSize: 36,
    color: '#333',
  },
  buttonsContainer: {
    flex: 3,
    padding: 10,
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  buttonText: {
    fontSize: 24,
    color: '#333',
  },
  equalsButton: {
    backgroundColor: '#7E6CCA',
  },
  equalsButtonText: {
    color: '#fff',
  },
  clearButton: {
    backgroundColor: '#7E6CCA',
  },
  clearButtonText: {
    color: '#fff',
  },
});

export default Calculator;
