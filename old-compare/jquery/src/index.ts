import * as $ from 'jquery';

$(() => {
    setTimeout(() => {
        // element not found? => nothing happens because JQuery doesn't give a *
        let $form = $('.SubscribeForm');
        let $firstNameInput = $form.find('.firstName');
        let $lastNameInput = $form.find('.lastName');
        let $emailInput = $form.find('.email');
        let $button = $form.find('button');

        $firstNameInput.val('firstName');
        $lastNameInput.val('lastName');
        $emailInput.val('');

        $emailInput.on('blur', () => {
            if ($emailInput.val() !== '') {
                $button.prop('disabled', false);
            } else {
                $button.prop('disabled', true);
            }
        });

        $button.on('click', () => {
            alert(`
        sending: 
        firstName: ${$firstNameInput.val()}
        lastName: ${$lastNameInput.val()}
        email: ${$emailInput.val()}
        `);
        });
    }, 5000);
});
