var forms = document.querySelectorAll('.validate');
for (var i = 0; i < forms.length; i++) {
    forms[i].setAttribute("novalidate", true);
}

document.addEventListener("blur", function(event) {
    if (!event.target.form.classList.contains('validate')) return;
    var field = event.target;
    var formControl = field.parentNode.parentNode;
    var error = hasError(field);

    if (error) {
        var errorSpan = formControl.querySelector('.error-message');
        errorSpan.innerHTML = error;
        formControl.classList.add('error');
    } else {
        formControl.classList.remove('error');
    }
}, true);

function hasError(field) {
    var validity = field.validity;
    if (validity.valid) return;

    if (validity.valueMissing) return "Please fill this field";

    if (validity.typeMismatch) return "Please enter a valid email address";

}