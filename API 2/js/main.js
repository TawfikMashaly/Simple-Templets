// Get Users from API

async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await res.json();
    return users
}

async function displayUsers() {
    const users = await getUsers(),
          tbody = document.querySelector('tbody')

    for(let user of users) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.userName}</td>
            <td>${user.email}</td>
            <td>${user.address.city}</td>
            <td>${user.phone}</td>
        `;

        tbody.appendChild(tr);
    }
}

document.addEventListener('DOMContentLoaded' , displayUsers)