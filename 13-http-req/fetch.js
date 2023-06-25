btn.addEventListener('click', getUsers);

function getUsers(e) {
  e.preventDefault(e);
  // fetch().then(cb-fn-res).then(cb-fn-data)

  fetch('users.json')
    .then(response => response.json())
    .then(data => {
      console.log('data: ', data)
      
      let output = '';

      data.forEach(user => {
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
    })
}
