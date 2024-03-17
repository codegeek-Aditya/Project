// Button Declarations --
const clearButton = document.querySelector(".clear");
const searchButton = document.querySelector(".search");

// Element Declarations --
var username = document.querySelector(".Usernameinput");
var profileImg = document.querySelector(".profileImage");
var profileName = document.querySelector(".profileName");
let idCount = document.querySelector(".idCount");
let follower = document.querySelector(".followerCount");
let following = document.querySelector(".followingCount");
let repo = document.querySelector(".repoCount");
let gist = document.querySelector(".gistCount");
let locationIs = document.querySelector(".locationInfo");
let createdRepo = document.querySelector(".createdInfo");
let updatedRepo = document.querySelector(".updatedInfo");
let url = document.querySelector(".urlLinkInfo");

// FUNCTION DECLARATION
// search button declaration --
searchButton.addEventListener("click", searchUser);

async function searchUser() {
  const username = document.getElementById("inputUsername").value;

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const UserData = await response.json();

    profileImg.outerHTML = `<img src='${UserData.avatar_url}' class='profileImage' />`;
    profileName.textContent = UserData.name;
    idCount.textContent = UserData.id;
    follower.textContent = UserData.followers;
    following.textContent = UserData.following;
    repo.textContent = UserData.public_repos;
    gist.textContent = UserData.public_gists;
    locationIs.textContent = UserData.location;
    createdRepo.textContent = UserData.created_at;
    updatedRepo.textContent = UserData.updated_at;
    url.textContent = UserData.url;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

// clear button function declaration --

clearButton.addEventListener("click", function () {
  username.innerText = "";
  profileImg.textContent = "";
  profileName.textContent = "";
  idCount.textContent = "";
  follower.textContent = "";
  following.textContent = "";
  repo.textContent = "";
  gist.textContent = "";
  locationIs.textContent = "";
  createdRepo.textContent = "";
  updatedRepo.textContent = "";
  url.textContent = "";
});
