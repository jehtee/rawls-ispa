(function () {
  const storedUsername = "admin";
  const storedPassword = "admin";

  // Create the authentication blocker
  const authBlocker = document.createElement("div");
  authBlocker.id = "auth-blocker";
  authBlocker.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
    font-size: 1.5em;
  `;
  authBlocker.textContent = "Please authenticate...";
  document.body.appendChild(authBlocker);

  function authenticate() {
    let username = prompt("Username:");
    let password = prompt("Password:");

    // Keep prompting until valid input is provided
    while (!username || !password) {
      alert("Username and password are required.");
      username = prompt("Username:");
      password = prompt("Password:");
    }

    if (username === storedUsername && password === storedPassword) {
      sessionStorage.setItem("authenticated", "true");
      authBlocker.remove();
      document.dispatchEvent(new Event("authSuccessful"));
    } else {
      alert("Invalid username or password");
      authenticate();
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("authenticated") === "true") {
      authBlocker.remove();
      // Trigger content loading for authenticated users
      document.dispatchEvent(new Event("authSuccessful"));
    } else {
      authenticate();
    }
  });

  // Listen for the authentication success event
  document.addEventListener("authSuccessful", () => {
    // Load your page content here
    // For example:
    // document.getElementById('page-content').style.display = 'block';
  });
})();
