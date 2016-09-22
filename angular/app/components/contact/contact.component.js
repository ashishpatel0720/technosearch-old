class ContactController{
    constructor(){
        'ngInject';
    }

    $onInit(){

        /* Contact Form
         ---------------------------------------------------------------------- */
        jQuery(document).ready(function ($) {
            (function() {

                var $form = $('.contact-form');

                $form.append('<div id="ajax-message" style="display:none"></div>');
                var $ajax_message = $('#ajax-message');

                // Submit click event
                $form.on('click', 'input[type=submit]', function(e){

                    $ajax_message.hide();

                    // Show loader
                    NProgress.start();

                    // Ajax request
                    $.post('plugins/contact-form.php', $form.serialize(), function(data) {

                        // Show ajax-message
                        $ajax_message.html(data).show();

                        // Hide preloader
                        NProgress.done();

                        // If the message was sent, clear form fields
                        if (data.indexOf("success") != -1) {
                            clear_form_elements($form);
                        }
                    });

                    e.preventDefault();
                });

                function clear_form_elements(el) {

                    $(el).find(':input').each(function() {
                        switch(this.type) {
                            case 'password':
                            case 'select-multiple':
                            case 'select-one':
                            case 'text':
                            case 'email':
                            case 'textarea':
                                $(this).val('');
                                break;
                            case 'checkbox':
                            case 'radio':
                                this.checked = false;
                        }
                    });

                }

            })();

        });


    }

    
}

export const ContactComponent = {
    templateUrl: './views/app/components/contact/contact.component.html',
    controller: ContactController,
    controllerAs: 'vm',
    bindings: {
        
    }
}
