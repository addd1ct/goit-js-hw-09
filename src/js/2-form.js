let formDataFormLS;

const fillFormFields = () => {
    try {
        const formDataFormLS = JSON.parse(localStorage.getItem('feedback-form-data'));

        if (formDataFormLS === null) {
            return;
        }

        for (const key in formDataFormLS) {
            feedbackFormEl.elements[key].value = formDataFormLS[key];
        }
    } catch (err) {
        console.log(err);
    }
};

const formData = formDataFormLS;

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
