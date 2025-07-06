// ✅ Khi người dùng bấm nút → thay đổi nội dung đoạn văn có id="demo"
function thayDoiNoiDung() {
  document.getElementById("demo").innerText = "Bạn vừa bấm nút thành công!";
}

// ✅ Khi form gửi → kiểm tra tên có trống không
function kiemTraForm() {
  const ten = document.getElementById("ten").value.trim(); // Lấy tên và loại bỏ khoảng trắng
  if (ten === "") {
    alert("Bạn chưa nhập tên!"); // Thông báo nếu chưa nhập
    return false; // Ngăn không cho form gửi đi
  }
  document.getElementById("thongbao").innerText = "Chào bạn, " + ten + "!";
  return false; // Ngăn form gửi đi thật sự
}

// ✅ Hàm bật/tắt chế độ nền tối
function chuyenCheDo() {
  document.body.classList.toggle("dark"); // Thêm hoặc gỡ class 'dark'
}

// ✅ Hàm chào theo giờ
function chaoTheoGio() {
  const gio = new Date().getHours(); // Lấy giờ hiện tại
  let chao = "Xin chào";

  if (gio < 12) {
    chao = "☀️ Chào buổi sáng!";
  } else if (gio < 18) {
    chao = "🌤️ Chào buổi chiều!";
  } else {
    chao = "🌙 Chào buổi tối!";
  }

  alert(chao);
}

// ✅ Lưu tên vào localStorage và chào người dùng
function luuTen() {
  const ten = document.getElementById("ten").value.trim();
  if (ten !== "") {
    localStorage.setItem("tenNguoiDung", ten);
    document.getElementById("thongbao").innerText = "🌟 Xin chào, " + ten + "!";
  }
}

// ✅ Khi tải trang → chào lại nếu đã lưu tên
window.addEventListener("load", function () {
  const ten = localStorage.getItem("tenNguoiDung");
  if (ten) {
    document.getElementById("thongbao").innerText = "👋 Chào mừng trở lại, " + ten + "!";
  }

  // ✅ Đồng hồ cập nhật mỗi giây
  const clook = document.getElementById("clook");
  if (clook) {
    setInterval(() => {
      clook.innerText = new Date().toLocaleTimeString();
    }, 1000);
  }
});

// ✅ Xử lý mở/đóng danh sách mạng xã hội
document.addEventListener("DOMContentLoaded", function () {
  const buttonsCompoent = document.querySelector(".buttons");
  const buttonsToggle = document.querySelector(".buttons__toggle");

  if (buttonsToggle && buttonsCompoent) {
    buttonsToggle.addEventListener("click", function () {
      buttonsToggle.classList.toggle("buttons__toggle--active");
      buttonsCompoent.classList.toggle("buttons--active");
      document.activeElement.blur(); // Bỏ focus nút
    });
  }
});
