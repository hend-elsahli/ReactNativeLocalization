import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Settings() {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}

export default Settings;
