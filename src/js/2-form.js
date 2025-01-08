let formData = {};
const feedbackFormEl = document.querySelector('#feedback-form');

const fillFormFields = () => {
    try {
        const storedFormData = JSON.parse(localStorage.getItem('feedback-form-data'));

        if (storedFormData === null) {
            return;
        }

        for (const key in storedFormData) {
            if (feedbackFormEl.elements[key]) {
                feedbackFormEl.elements[key].value = storedFormData[key];
            }
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
