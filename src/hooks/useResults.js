import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try{
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          location: 'charlotte, nc',
          limit: 50
        }
      });
      setErrorMessage('');
      setResults(response.data.businesses); // [] of business results
    } catch (err) {
      setErrorMessage('Something went wrong 🤷🏻‍♂️');
      setResults([]);
      console.log(err);
    }
  }

  // useEffect Hook allows for running a function on load just onChangeText
  // Will ignore when screen gets re-rendered.
  // () => {} Arrow function as first argument...
  // [] as second argument will limit to running once.
  // [value] will update again if value changes
  useEffect(() => {
    searchApi('italian');
  }, []);

  // Return elements needed in parent object
  return [searchApi, results, errorMessage];
};
