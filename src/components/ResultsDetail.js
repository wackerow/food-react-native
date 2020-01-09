import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: result.image_url }}
        style={styles.image}
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.details}>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    width: 250
  },
  image: {
    width: 250,
    aspectRatio: 3/2,
    borderRadius: 10,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  details: {

  }
});

export default ResultsDetail;
