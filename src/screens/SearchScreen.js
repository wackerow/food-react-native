import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => result.price === price);
  };

  return (
    // Alternative to: <View style={{ flex: 1 }}>
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi({term})}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsList
          results={filterResultsByPrice('$')}
          title='Cost Effective $'
        />
        <ResultsList
          results={filterResultsByPrice('$$')}
          title='Bit Pricier $$'
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title='Big Spender $$$'
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default SearchScreen;

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
