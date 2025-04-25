// WARNING: THE USAGE OF CUSTOM SCRIPTS IS NOT SUPPORTED. VTEX IS NOT LIABLE FOR ANY DAMAGES THIS MAY CAUSE. THIS MAY BREAK YOUR STORE AND STOP SALES. IN CASE OF ERRORS, PLEASE DELETE THE CONTENT OF THIS SCRIPT.
document.addEventListener("DOMContentLoaded", () => {
    try {
        // Recuper si el checkbox fue marcado antes
        const savedState = localStorage.getItem("termsAccepted") === "true";

        // Insertando el checkbox de terrminos y condiciones
        const boxClientInfo = document.querySelector('.box-client-info');
        boxClientInfo.insertAdjacentHTML('afterend', `
            <span class="termsAndConditions">
                <input id="opt-in-termsAndConditions" required type="checkbox">
                <span class="opt-in-termsAndConditions--text">
                    Acepto los <span class="opt-in-termsAndConditions--text-trigger">términos y condiciones</span>
                </span>
            </span>
        `);

        // Aplicar el estado guardado del chechk
        const checkbox = document.getElementById('opt-in-termsAndConditions');
        checkbox.checked = savedState;

        // Guardar el nuevo estado cuando cambie
        checkbox.addEventListener('change', () => {
            localStorage.setItem("termsAccepted", checkbox.checked);
        });

        // coocar el el PopUp
        const templateCheckout = document.querySelector('.danielpedroza--itglobers-myvtex-com');
        templateCheckout.insertAdjacentHTML('beforebegin', `
            <div class="contentTermsAndConditions-popUp">
                <div class="contentTermsAndConditions-info">
                    <div class="contentTermAndConditions-info-text">
                        <h1 class="contentTermsAndConditions-info--title">Términos y condiciones</h1>
                        <p class="contentTermsAndConditions-info--paragraph">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...
                        </p>
                    </div>
                    <div class="contentTermAndConditions-options">
                        <label for="opt-in-termsAndConditions" class="contentTermAndConditions-info-label">Aceptar</label>
                        <span class="contentTermAndConditions-info-close">Rechazar</span>
                    </div>
                </div>
            </div>
        `);

        // Mostrar popup al hacer clic en el texto
        const labelTermsAndConditions = document.querySelector('.opt-in-termsAndConditions--text-trigger');
        const contentTermsAndConditions = document.querySelector('.contentTermsAndConditions-popUp');

        labelTermsAndConditions.addEventListener('click', () => {
            contentTermsAndConditions.style.display = 'flex';
        });

        contentTermsAndConditions.addEventListener('click', () => {
            contentTermsAndConditions.style.display = 'none';
        });
    } catch (error) {
        console.log('Error: ' + error);
    }
});