const uri = "/rest/users";
let users = [];

function getUsers() {
    fetch(uri)
        .then(response => response.json())
        .then(data => displayItems(data))
        .catch(error => console.error("Unable to get users.", error));
}

function addUser() {
    const fullNameInputText = document.getElementById("add-full-name");
    const emailInputText = document.getElementById("add-email");
    const addressInputText = document.getElementById("add-address");

    const item = {
        name: fullNameInputText.value.trim(),
        email: emailInputText.value.trim(),
        address: addressInputText.value.trim(),
    };
    console.log(JSON.stringify(item));
    fetch(uri, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
    })
        .then(response => response.json())
        .then(() => {
            getUsers();
            fullNameInputText.value = "";
            emailInputText.value = "";
            addressInputText.value = "";
        })
        .catch(error => console.error("Unable to add User.", error));
}

function deleteUser() {
    const itemId = document.getElementById("delete-id").value.trim();
    fetch(`${uri}/${itemId}`, {
        method: "DELETE"
    })
        .then(() => getUsers())
        .catch(error => console.error("Unable to delete User.", error));
}

function displayDeleteForm(id) {
    const item = users.find(item => item.id === id);
    document.getElementById("delete-id").value = item.id;
}

function displayEditForm(id) {
    const item = users.find(item => item.id === id);
    document.getElementById("edit-id").value = item.id;
    document.getElementById("edit-full-name").value = item.name;
    document.getElementById("edit-email").value = item.email;
    document.getElementById("edit-address").value = item.address;
}

function updateUser() {
    const itemId = document.getElementById("edit-id").value.trim();
    const item = {
        id: parseInt(itemId, 10),
        name: document.getElementById("edit-full-name").value.trim(),
        email: document.getElementById("edit-email").value.trim(),
        address: document.getElementById("edit-address").value.trim(),
        edited: Date.now()
    };

    fetch(`${uri}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
    })
        .then(() => getUsers())
        .catch(error => console.error("Unable to update User.", error));

    return false;
}

function displayCount(itemCount) {
    const name = itemCount === 1 ? "entry" : "entries";
    document.getElementById(
        "counter"
    ).innerHTML = `Showing <b>${itemCount}</b> ${name}`;
}

function displayItems(data) {
    const tBody = document.getElementById("users");
    tBody.innerHTML = "";
    displayCount(data.length);
    const button = document.createElement("button");

    data.forEach(item => {
        let editButton = document.createElement("a");
        editButton.href = "#editUser";
        editButton.className = "edit";
        editButton.setAttribute("onclick", `displayEditForm(${item.id})`);
        editButton.setAttribute("data-toggle", "modal");
        editButton.innerHTML =
            "<i class='material-icons' data-toggle='tooltip' title='Edit'>&#xE254;</i>";

        let deleteButton = document.createElement("a");
        deleteButton.href = "#deleteUser";
        deleteButton.className = "delete";
        deleteButton.setAttribute("onclick", `displayDeleteForm(${item.id})`);
        deleteButton.setAttribute("data-toggle", "modal");
        deleteButton.innerHTML =
            "<i class='material-icons' data-toggle='tooltip' title='Delete'>&#xE872;</i>";

        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        let textFullName = document.createTextNode(item.name);

        td1.appendChild(textFullName);

        let td2 = tr.insertCell(1);
        let textEmail = document.createTextNode(item.email);
        td2.appendChild(textEmail);

        let td3 = tr.insertCell(2);
        let textAddress = document.createTextNode(item.address);
        td3.appendChild(textAddress);

        let td4 = tr.insertCell(3);
        let textRegistered = document.createTextNode(item.registered);
        td4.appendChild(textRegistered);

        let td5 = tr.insertCell(4);
        let textEdited = document.createTextNode(item.edited);
        td5.appendChild(textEdited);

        let td6 = tr.insertCell(5);
        td6.appendChild(editButton);
        td6.appendChild(deleteButton);
    });

    users = data;
}