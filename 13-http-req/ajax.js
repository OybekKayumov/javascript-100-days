const btn = document.getElementById('btn');

btn.addEventListener('click', getUsers);

function getUsers(e) {
  e.preventDefault();

  const http = new XMLHttpRequest();

  // asynchronous - true
  http.open('GET', 'users.json', true);

  http.onload = function () {
    if (this.status === 200) {
      console.log(': ', this.responseText);

      const users = JSON.parse(this.responseText);

      // render users to html
      let output = '';

      users.forEach(user => {
        output += `
          <hr>
          <ul>
            <li>ID: ${user.id}</li>
            <li>Name: ${user.name}</li>
            <li>Age: ${user.age}</li>
            <li>Email: ${user.email}</li>
          </ul>
        `;
      })

      document.getElementById('users').innerHTML = output;
    }
  }

  http.send();
}

// btn.addEventListener('click', getUsers);
