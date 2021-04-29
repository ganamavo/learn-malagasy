import React from 'react';
import {StyleSheet, View} from 'react-native';
import ToolButton from '../components/ToolButton/ToolButton';
import LanguageSwitcherButton from '../components/LanguageSwitcherButton/LanguageSwitcherButton';
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: 290,
    marginTop: 35,
    marginBottom: 56,
  },
  buttonContainer: {
    width: 40,
    height: 40,
  },
});

export default ({switchLanguage = () => {}}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ToolButton
          icon="plusIcon"
          onPress={() => alert('You pressed tool button')}
        />
      </View>
      <View>
        <LanguageSwitcherButton
          onPress={switchLanguage}
          textForEnglish="EN"
          textForMalagasy="MA"
        />
      </View>
      <View style={styles.buttonContainer}>
        <ToolButton
          icon="tickedIcon"
          onPress={() => alert('You pressed tool button')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ToolButton
          icon="doubleTickedIcon"
          onPress={() => alert('You pressed tool button')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ToolButton
          icon="settingIcon"
          onPress={() => alert('You pressed tool button')}
        />
      </View>
    </View>
  );
};
