function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username === "zklnb" && password === "1234") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "/xzklnb/home/index.html";
  } else {
    alert("Sai tài khoản hoặc mật khẩu!");
  }

  return false;
}
