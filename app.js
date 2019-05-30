const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameValue = document.querySelector(".profile-name");
const userValue = document.querySelector(".profile-username");
const reposValue = document.querySelector(".profile-repos");
const urlValue = document.querySelector(".profile-url");
const locationValue = document.querySelector(".profile-location");

const Client_id = "Iv1.eeeaf0a5140791ba";
const client_secret = "086b2d43fe0eba257fb8b2b903c4b3caf782ea49";

var usersData = async (user) => {
    try{
        const api_data = await fetch(`https://api.github.com/users/${user}?client_id=${Client_id}&client_secret=${client_secret}`);
        const data = await api_data.json();
        return { data }

    } catch(err){
        return err;
    }
};

var showData = () => {
    usersData(inputValue.value).then((res) => {
        console.log(res);


    })
}

searchButton.addEventListener("click", () => {
    showData();
})