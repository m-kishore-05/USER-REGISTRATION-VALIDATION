document.getElementById("registerBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  // Check for empty fields
  if (!username || !email || !password || !confirmPassword) {
    alert("⚠️ Please fill out all fields before submitting!");
    return;
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    alert("❌ Passwords do not match!");
    return;
  }

  // Save user data
  const user = {
    username,
    email,
    password,
    date: new Date().toLocaleString()
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  // Show success message
  const msg = document.getElementById("message");
  msg.style.display = "block";

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1500);
});
