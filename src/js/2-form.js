let formData = {};
const feedbackFormEl = document.querySelector('.feedback-form');

const fillFormFields = () => {
    try {
        const storedFormData = JSON.parse(localStorage.getItem('feedback-form-data'));

        if (storedFormData === null) {
            return;
        }

        formData = { ...storedFormData };

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
    const fieldValue = formFieldEl.value.trim();
    const fieldName = formFieldEl.name;

    formData[fieldName] = fieldValue;

    localStorage.setItem('feedback-form-data', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
    event.preventDefault();

    const email = feedbackFormEl.elements.email?.value.trim();
    const message = feedbackFormEl.elements.message?.value.trim();

    if (!email || !message) {
        alert('Будь ласка, заповніть усі поля форми перед надсиланням.');
        return;
    }

    console.log({ email, message });

    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-data');
    formData = {};
};


if (feedbackFormEl) {
    feedbackFormEl.addEventListener('input', onFormInput);
    feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
}
