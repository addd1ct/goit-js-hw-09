const feedbackFormEl = document.querySelector('.feedback-form');

const fillFormFields = () => {
    try {
        const formDataFormLS = JSON.parse(localStorage.getItem('feedback-form-data'));
        if (formDataFormLS === null) {
            return;
        }

        const formData = formDataFormLS;

        for (const key in formData) {
            feedbackFormEl.elements[key].value = formData[key];
        }
    } catch (err) {
        console.log(err);
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