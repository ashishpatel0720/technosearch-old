class ContactController{
    constructor(vcRecaptchaService,$http){
        'ngInject';
        this.vcRecaptchaService = vcRecaptchaService;
        this.captchakey = '6Ld84ggUAAAAAFV7HBlcxeEJE2ViDSP2KPyFXIoB';
        this.http = $http;
    }

    $onInit(){
        this.name = '';
        this.email = '';
        this.contact = '';
        this.message = '';
        this.captchaId = '';
        this.success = false;
    }

    setWidgetId(widgetId) {
        this.captchaId = widgetId;
    }

    submit(){

        this.success = false;

        if(this.vcRecaptchaService.getResponse() === ""){
            alert("Please resolve the captcha!")
        }else {

            this.http.post('/api/contact',{
                'name':this.name,
                'email':this.email,
                'contact':this.contact,
                'message':this.message
            }).then(() => {
                this.name = '';
                this.email = '';
                this.contact = '';
                this.message = '';
                this.vcRecaptchaService.reload(this.captchaId)

                this.success = true;
            })

        }
    }

    
}

export const ContactComponent = {
    templateUrl: './views/app/components/contact/contact.component.html',
    controller: ContactController,
    controllerAs: 'vm',
    bindings: {
        
    }
}
