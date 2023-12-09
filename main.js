$(document).ready(function () {
    $('#add-contact').click(function () {
        var name = prompt('Enter Name:');
        var surname = prompt('Enter Surname:');
        var phoneNumber = prompt('Enter Phone Number:');
        var address = prompt('Enter Address:');
        var houseNumber = prompt('Enter House Number:');

        if (name && surname && phoneNumber && address && houseNumber) {
            var contact = {
                name: name,
                surname: surname,
                phoneNumber: phoneNumber,
                address: address,
                houseNumber: houseNumber,

            };

            $('#contacts-list').append('<div class="contact">' +
                '<strong>Name:</strong> ' + contact.name + ' ' + contact.surname +
                '<br><strong>Phone Number:</strong> ' + contact.phoneNumber +
                '<br><strong>Address:</strong> ' + contact.address +
                '<br><strong>House Number:</strong> ' + contact.houseNumber +
                '<br><button class="delete-contact">Delete</button></div>');

            $('.delete-contact').click(function () {
                $(this).parent('.contact').remove();
            });
        } else {
            alert('All fields are required!');
        }
    });

    $('#search').keyup(function () {
        var query = $(this).val().toLowerCase();
        $('.contact').each(function () {
            var text = $(this).text().toLowerCase();
            if (text.indexOf(query) === -1) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });
});

