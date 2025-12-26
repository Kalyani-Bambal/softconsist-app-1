function handleLogin() {
  const email = prompt("Enter your email");
  if (!email) return;

  const user = localStorage.getItem(email);

  if (user) {
    alert("Welcome back, " + JSON.parse(user).name);
  } else {
    const name = prompt("First time here! Enter your name");
    if (!name) return;

    localStorage.setItem(email, JSON.stringify({ name, email }));
    alert("Signup successful. Welcome " + name);
  }
}

