// Hàm xử lý khi người dùng nhấn "Đăng nhập"
function login() {
  // Lấy dữ liệu người dùng nhập từ các ô input
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Kiểm tra tên đăng nhập và mật khẩu đúng không
  if (username === "zklnb" && password === "1234") {
    // ✅ Nếu đúng -> lưu trạng thái đăng nhập
    localStorage.setItem("loggedIn", "true");

    // ✅ Chuyển đến trang chính đúng theo đường dẫn GitHub Pages
    window.location.href = "/xzklnb/home/index.html";
  } else {
    // ❌ Nếu sai -> hiển thị thông báo lỗi
    alert("Sai tài khoản hoặc mật khẩu!");
  }

  // Ngăn form reload lại trang khi submit
  return false;
}
