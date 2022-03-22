const sendForm = (form) => {
    // const form = document.querySelector(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Идёт отравка...';
    const errorText = 'Ошибка';
    const successText = 'Отправлено!';

    const validate = (list) => {
        let success = true;

        return success;
    };
Б
    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElements = document.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText
                    statusBlock.style.color = "red"

                    formElements.forEach(input => {
                        if(input.type !== 'submit')
                            input.value = '';

                    });
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                })
        } else {
            formElements.forEach(input => {
                statusBlock.textContent = '';
            });
        };
    };


    try {
        if (!form) {
            throw new Error('В форме критическая ошибка!');
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm();
        });
    } catch(error) {
        console.log(error.message);
    }
}

export default sendForm


