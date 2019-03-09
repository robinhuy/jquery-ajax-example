function isValidData() {
    let isValid = true;
    $('.error').text('');

    if ($('#name').val() === '') {
        isValid = false;
        $('#name-error').text('Họ tên không được để trống');
    }

    const birthYearRegex = /^\d{4}$/;
    const birthYear = $('#birthYear').val();
    if (birthYear !== '' && birthYearRegex.test(birthYear) === false) {
        isValid = false;
        $('#birthYear-error').text('Năm sinh không đúng định dạng');
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const email = $('#email').val();
    if (emailRegex.test(email) === false) {
        isValid = false;
        $('#email-error').text('Email không đúng định dạng');
    }

    if ($('#phone').val() === '') {
        isValid = false;
        $('#phone-error').text('Số điện thoại không được để trống');
    }

    return isValid;
}