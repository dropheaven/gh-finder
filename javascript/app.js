// Initialize Github
const github = new Github();
// Initialize UI
const ui = new UI();

// Search input
const searchUser = document.getElementById("search-user");

// Search input event listener
searchUser.addEventListener("keyup", e => {
  // get input text
  const userText = e.target.value;

  if (userText !== "") {
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
  } else {
    ui.clearProfile();
  }
});
