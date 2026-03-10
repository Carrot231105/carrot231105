function calculate(operation) {
    const form = document.forms['Calculator'];
    const a = parseFloat(form['numberA'].value);
    const b = parseFloat(form['numberB'].value);
    let result;

    if (isNaN(a) || isNaN(b)) {
        alert('Vui lòng nhập một số hợp lệ!');
        return;
    }

    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            // Bạn có thể thêm kiểm tra chia cho 0 ở đây nếu cần
            result = a / b;
            break;
    }
    
    // Đừng quên gán kết quả ngược lại vào ô input result nhé:
    form['result'].value = result;
}
function calculate(operation) {
    const form = document.forms['Calculator'];
    const a = parseFloat(form['numberA'].value);
    const b = parseFloat(form['numberB'].value);
    let result;

    if (isNaN(a) || isNaN(b)) {
        alert('Vui lòng nhập một số hợp lệ!');
        return;
    }

    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b === 0) {
                alert('Không thể thực hiện phép chia với 0!');
                return;
            }
            result = a / b;
            break;
        default:
            alert('Lệnh không hợp lệ!');
            return;
    }

    form['result'].value = result;
}