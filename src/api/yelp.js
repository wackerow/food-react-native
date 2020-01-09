import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses', // No trailing slash
  headers: {
    Authorization: 'Bearer qcCuSx2GtqFw6PMlRuzOWU8f7aK4Gi4U7jayG5AxOhIZCTnZ7W3Z1Z0Kf4aprKLJ8n0OjbaJC_ABruHuhYfroX70ALBIVQrTzJiC_CIH4trmZ7CkN1wzhYQaTFQNXnYx'
  }
});
