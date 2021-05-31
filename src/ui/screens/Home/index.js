import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { withNamespaces } from 'react-i18next';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Home({ t }) {
  return (
    <View style={styles.container}>
      <Text>{t('COMMON:HOME_TITLE')}</Text>
    </View>
  );
}

export default withNamespaces(['COMMON'], { wait: true })(Home);
