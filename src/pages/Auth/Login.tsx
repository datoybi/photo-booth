import axios from 'axios';
import { useEffect } from 'react';

function Login() {
  useEffect(() => {
    const fetchTodo = async () => {
      console.log('fetch run');
      const data = await axios
        // .get('http://api.unsplash.com/photos/random', {
        //   params: { client_id: 'nZbJKwsynDty_NmYhzy-fSqT0miezU-hv5rKZNLOuuU', count: 10 },
        // })
        .get('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.data);
      console.log(data);
    };

    fetchTodo();
  }, []);
  return <>Login</>;
}

export default Login;
