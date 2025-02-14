function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then (res => res.json())
    .then (data => displayuser(data))
}

function displayuser(data) {
    // console.log(data);
    // for(const user of data) {
    //     console.log(user);
    //     console.log(user.mail);
    //     console.log(user.phone);
    // }
    const ul = document.getElementById('user-list');
    for(const user of data) {
        const li = document.createElement('li');
        // li.innerText = 'user';
        li.innerText = user.name;
        ul.appendChild(li);

    }

}