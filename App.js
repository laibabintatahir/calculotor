import React from 'react';
import { View, StyleSheet } from 'react-native';
import Calculator from './components/Calculotor';

const App = () => {
  return (
    <View style={styles.container}>
      <Calculator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

