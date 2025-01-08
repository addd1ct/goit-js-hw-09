const feedbackFormEl = document.querySelector('.feedback-form');

const fillFormFields = () => {
    const feedbackFormEl = document.querySelector('.feedback-form');
    const formDataFormLS = localStorage.getItem('feedback-form-data');
    const formData = JSON.parse(formDataFormLS);

    for (const key in formData) {
        feedbackFormEl.elements[key].value = formData[key];
    }
};

fillFormFields();

const onFormInput = event => {
    const { target: formFieldEl } = event;

    const fieldValue = formFieldEl.value;
    const fieldName = formFieldEl.name;

    formData[fieldName] = fieldValue;

    localStorage.setItem('feedback-form-data', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
    event.preventDefault();

    console.log(formData);

    event.currentTarget.reset();

    localStorage.removeItem('feedback-form-data');
    formData = {
        email: '',
        message: '',
    };
};

feedbackFormEl.addEventListener('input', onFormInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);