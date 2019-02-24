function ready(fn: () => void) {
    // @ts-ignore
    if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(() => {
    setTimeout(() => {
        let form = document.querySelector('.SubscribeForm');
        if (form instanceof HTMLElement) {
            let firstNameInput = form.querySelector('.firstName');
            let lastNameInput = form.querySelector('.lastName');
            let emailInput: HTMLInputElement = <HTMLInputElement>form.querySelector('.email');
            let button = form.querySelector('button');

            //safe alternative will ignore error
            if (firstNameInput instanceof HTMLInputElement) {
                firstNameInput.value = 'firstName';
            }

            //unsafe alternative (will throw)
            (<HTMLInputElement>lastNameInput).value = 'lastName';
            emailInput.value = '';

            emailInput.addEventListener('blur', () => {
                if (emailInput.value !== '') {
                    (<HTMLElement>button).removeAttribute('disabled');
                } else {
                    (<HTMLElement>button).setAttribute('disabled', '');
                }
            });

            (<HTMLElement>button).addEventListener('click', () => {
                // will throw
                alert(`
        sending: 
        firstName: ${(<HTMLInputElement>firstNameInput).value}
        lastName: ${(<HTMLInputElement>lastNameInput).value}
        email: ${emailInput.value}
        `);

            });

        } else {
            // do nothing because just not on page
        }
    }, 5000);
});
