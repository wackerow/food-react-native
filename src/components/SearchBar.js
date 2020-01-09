import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather
        name='search'
        style={styles.iconStyle}
      />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        clearButtonMode='always'
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 15
  },
  iconStyle: {
    fontSize: 35,
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  inputStyle: {
    fontSize: 20,
    flex: 1
  }

});

export default SearchBar;


// TextInput using state...
// ALWAYS:
// 1. import { useState } from 'react';
// 2. const [text, setText] = useState('initial_text');
// 3. <TextInput value={text} onChangeText={(newText) => setText(newText)}>


// If passing between parent and child:
// PARENT:
// 1. import { useState } from 'react';
// 2. const [text, setText] = useState('initial_text');
// 3. <ChildComponent prop={text} onPropChange={newText => setText(newText)}
// CHILD:
// 4. Destructure props (optional): ({prop, onPropChange}) as parameters
// 5. <TextInput value={prop} onChangeText={(newText) => onPropChange(newText)}>
// or:<TextInput value={prop} onChangeText={onPropChange}>
