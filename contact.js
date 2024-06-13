document.addEventListener('DOMContentLoaded', function() {
    var contactMethodSelect = document.getElementById('contact-method');
    var emailInputDiv = document.getElementById('email-input');
    var phoneInputDiv = document.getElementById('phone-input');

    contactMethodSelect.addEventListener('change', function() {
        var selectedValue = contactMethodSelect.value;
        emailInputDiv.classList.add('hidden');
        phoneInputDiv.classList.add('hidden');

        if (selectedValue === 'email') {
            emailInputDiv.classList.remove('hidden');
        } else if (selectedValue === 'phone') {
            phoneInputDiv.classList.remove('hidden');
        }
    });
});
