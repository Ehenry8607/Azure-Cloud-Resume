fetch('https://ehenry-resume-func.azurewebsites.net/api/counter')
  .then(response => response.json())
  .then(data => {
    document.getElementById('counter').innerText = data.count;
  });