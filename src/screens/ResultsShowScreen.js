import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, [])

  // Check if result is null
  if (!result) {
    return null;
  }

  // If result not null, return JSX
  return (
    // WARNING: VirtualizedLists should never be nested inside plain
    // ScrollViews with the same orientation - use another
    // VirtualizedList-backed container instead.
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{result.name}</Text>
        <FlatList
          style={styles.list}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return <Image source={{ uri: item }} style={styles.image} />
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10
  },
  list: {
  },
  image: {
    width: Math.round(Dimensions.get('window').width) - 20,
    aspectRatio: 3/2,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 15
  }
});

export default ResultsShowScreen;

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
// or:<ChildComponent prop={text} onPropChange={setText}
// CHILD:
// 4. Destructure props (optional): ({prop, onPropChange}) as parameters
// 5. <TextInput value={prop} onChangeText={(newText) => onPropChange(newText)}>
// or:<TextInput value={prop} onChangeText={onPropChange}>
