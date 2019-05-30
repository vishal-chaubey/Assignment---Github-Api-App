const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameValue = document.querySelector(".profile-name");
const userValue = document.querySelector(".profile-username");
const reposValue = document.querySelector(".profile-repos");
const urlValue = document.querySelector(".profile-url");
const locationValue = document.querySelector(".profile-location");
const Ifnotfound = document.querySelector("#demo");

const Client_id = "Iv1.eeeaf0a5140791ba";
const client_secret = "086b2d43fe0eba257fb8b2b903c4b3caf782ea49";

var usersData = async (user) => {
        
        const api_data = await fetch(`https://api.github.com/users/${user}?client_id=${Client_id}&client_secret=${client_secret}`);
        const data = await api_data.json();
        if(data.login == inputValue.value){
        return { data }
        }else{
            Ifnotfound.innerHTML = "Description: <span>Enter the Valid User name to fatch the data, Given username does not correct.</span>";
        }
};

var showData = () => {
    usersData(inputValue.value).then(res => {
        nameValue.innerHTML = `Name: <span> ${res.data.name}</span><hr>`;
        reposValue.innerHTML = `Reposetory: <span> ${res.data.public_repos}</span><hr>`;
        userValue.innerHTML = `Username: <span> ${res.data.login}</span><hr>`;
        urlValue.innerHTML = `URL: <span> ${res.data.html_url}</span><hr>`;
        locationValue.innerHTML = `Location: <span> ${res.data.location}</span>`;

    })
}

searchButton.addEventListener("click", () => {
    showData();
})