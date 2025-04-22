// WARNING: THE USAGE OF CUSTOM SCRIPTS IS NOT SUPPORTED. VTEX IS NOT LIABLE FOR ANY DAMAGES THIS MAY CAUSE. THIS MAY BREAK YOUR STORE AND STOP SALES. IN CASE OF ERRORS, PLEASE DELETE THE CONTENT OF THIS SCRIPT.
document.addEventListener("DOMContentLoaded", () => {


    try {

        //Insertando el checkbox te terminos y condiciones en el documento
        const boxClientInfo = document.querySelector('.box-client-info');
        boxClientInfo.insertAdjacentHTML('afterend', '<span class="termsAndConditions"> <input id="opt-in-termsAndConditions" required type="checkbox"> <span class="opt-in-termsAndConditions--text" >Acepto los <span class="opt-in-termsAndConditions--text-trigger">términos y condiciones</span></span></span>');
       
        //Insertando el PopUp al documento
        const templateCheckout = document.querySelector('.danielpedroza--itglobers-myvtex-com');
        templateCheckout.insertAdjacentHTML('beforebegin', '<div class="contentTermsAndConditions-popUp"><div class="contentTermsAndConditions-info"> <div class="contentTermAndConditions-info-text"><h1 class="contentTermsAndConditions-info--title">Términos y condiciones</h1><p class="contentTermsAndConditions-info--paragraph">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p></div> <div class="contentTermAndConditions-options"> <label for="opt-in-termsAndConditions" class="contentTermAndConditions-info-label">Aceptar</label> <span class="contentTermAndConditions-info-close">Rechazar</span> </div> </div></div>');


        const labelTermsAndConditions = document.querySelector('.opt-in-termsAndConditions--text-trigger');
        const contentTermsAndConditions = document.querySelector('.contentTermsAndConditions-popUp');


        //Detecta cuando se hace clicjk en el texto de terminos y condiciones
        labelTermsAndConditions.addEventListener('click', () => {

            contentTermsAndConditions.style.display = 'flex';
        })
        //Detecta cuando se hace clicjk en el popaup  y lo cierra
        contentTermsAndConditions.addEventListener('click', () => {

            contentTermsAndConditions.style.display = 'none';
        })
    } catch (error) {
        console.log('HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + error);
    }
})
