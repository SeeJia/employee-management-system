const passwordInput = document.getElementById('employeeInputPassword');
const password_check = document.getElementById('password_check');
const passwordToggle = document.getElementById('passwordToggle');

passwordToggle.addEventListener('click', function () {
    // 切换输入框类型
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';  // 显示密码
        password_check.classList.remove('bi-eye-slash-fill');  // 移除锁定图标
        password_check.classList.add('bi-eye-fill');  // 添加解锁图标
    } else {
        passwordInput.type = 'password';  // 隐藏密码
        password_check.classList.remove('bi-eye-fill');  // 移除解锁图标
        password_check.classList.add('bi-eye-slash-fill');  // 添加锁定图标
    }
});