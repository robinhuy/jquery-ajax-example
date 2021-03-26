function isValidData() {
    let isValid = true;
    
    const openDiv = '<div id="name-error" class="error text-danger font-weight-light font-italic mt-1">';
    const closeDiv = '</div>';

    $('.error').remove();

    const nameElement = $('#name')
    if (nameElement.val() === '') {
        isValid = false;
        nameElement.after(openDiv + 'Họ tên không được để trống' + closeDiv)
    }

    const emailElement = $('#email');
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (emailRegex.test(emailElement.val()) === false) {
        isValid = false;
        emailElement.after(openDiv + 'Email không đúng định dạng' + closeDiv)
    }

    const phoneElement = $('#phone');
    if (phoneElement.val() === '') {
        isValid = false;
        phoneElement.after(openDiv + 'Số điện thoại không được để trống' + closeDiv)
    }

    return isValid;
}