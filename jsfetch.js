
const url = 'https://api.github.com/users/Anubhav93111';
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Fetched data:', data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
