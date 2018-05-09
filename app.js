const getJokesBtn = document.getElementById('get-jokes-btn');

getJokesBtn.addEventListener('click', (e) => {
 getJokes()
   .then(printJokes)
   .catch(err => console.log(err));
  e.preventDefault();
});

const getJokes = async () => {
  const number = document.querySelector('input[type="number"]').value;
  const url = `http://api.icndb.com/jokes/random/${number}`
  const response = await fetch(url);
  const data = await response.json();
  document.querySelector('input[type="number"]').value = '';
  return data;
}

const printJokes = (jokes) => {
  let output = '';
  if(jokes.type === 'success') {
    jokes.value.forEach(joke => {
      output += `<li class="list-group-item">${joke.joke}</li>`;
    });
  }
  else {
    output += '<li class="list-group-item>Something went wrong!</li>'
  }
  document.querySelector('.jokes').innerHTML = output;
}