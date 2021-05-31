import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default Home;
