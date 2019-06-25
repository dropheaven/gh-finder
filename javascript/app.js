// Initialize Github
const github = new Github();

// Search input
const searchUser = document.getElementById("search-user");

// Search input event listener
searchUser.addEventListener("keyup", e => {
  // get input text
  const userText = e.target.value;

  if (userText !== "") {
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        // show alert
      } else {
        // show profile
      }
    });
  } else {
    // clear profile
  }
});