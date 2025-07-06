// Hàm xử lý khi người dùng nhấn "Đăng nhập"
function login() {
  // Lấy dữ liệu người dùng nhập từ các ô input
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Kiểm tra tên đăng nhập và mật khẩu đúng không
  if (username === "zklnb" && password === "1234") {
    // ✅ Nếu đúng -> chuyển đến trang chính nằm trong thư mục /home/
   window.location.href = "https://zklnb.github.io/xzklnb/";
  } else {
    // ❌ Nếu sai -> hiển thị thông báo lỗi
    alert("Sai tài khoản hoặc mật khẩu!");
  }

  // Trả về false để không reload lại trang khi submit form
  return false;
}
