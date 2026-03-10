function validateAge() {
    const birthdayInput = document.getElementById('birthday').value;
    if (!birthdayInput) return;

    const birthDate = new Date(birthdayInput);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < 18) {
        alert('Bạn phải đủ 18 tuổi để đăng ký!');
        document.getElementById('birthday').value = ''; // Xóa giá trị không hợp lệ
    }
}

function validateForm() {
    const username = document.getElementById('username').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const firstname = document.getElementById('firstname').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    // Kiểm tra các trường bắt buộc (HTML required đã xử lý phần lớn, nhưng JS kiểm tra thêm)
    if (!username || !lastname || !firstname) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return false;
    }

    // Kiểm tra độ dài mật khẩu (minlength=8 đã có trong HTML, nhưng JS có thể bổ sung)
    if (password.length < 8) {
        alert('Mật khẩu phải có ít nhất 8 ký tự!');
        return false;
    }

    // Kiểm tra mật khẩu khớp
    if (password !== confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return false;
    }

    // Nếu tất cả OK, cho phép submit
    return true;
}