// WARNING: THE USAGE OF CUSTOM SCRIPTS IS NOT SUPPORTED. VTEX IS NOT LIABLE FOR ANY DAMAGES THIS MAY CAUSE. THIS MAY BREAK YOUR STORE AND STOP SALES. IN CASE OF ERRORS, PLEASE DELETE THE CONTENT OF THIS SCRIPT.
document.addEventListener("DOMContentLoaded", init);

//Llamar a todsa las funciones luego de cargar el DOM
function init() {
    try {
        insertCheckbox();
        insertPopup();
        applySavedState();
        setupEventListeners();

    } catch (error) {
        console.log('Error: ' + error);
    }
}

//Incrustar el chechkbox
function insertCheckbox() {
    const boxClientInfo = document.querySelector('.box-client-info');
    boxClientInfo.insertAdjacentHTML('afterend', `
        <span class="termsAndConditions">
            <input id="opt-in-termsAndConditions" required type="checkbox">
            <span class="opt-in-termsAndConditions--text">
                Acepto los <span class="opt-in-termsAndConditions--text-trigger">términos y condiciones</span>
            </span>
        </span>
    `);
}

//Incrustar el popup 
function insertPopup() {
    const templateCheckout = document.getElementById('checkoutMainContainer');
    templateCheckout.insertAdjacentHTML('beforebegin', `
        <div class="contentTermsAndConditions-popUp" style="display: none;">
            <div class="contentTermsAndConditions-info">
                <div class="contentTermAndConditions-info-text">
                    <h1 class="contentTermsAndConditions-info--title">Términos y condiciones</h1>
                    <p class="contentTermsAndConditions-info--paragraph">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...
                    </p>
                </div>
                <div class="contentTermAndConditions-options">
                    <button class="contentTermAndConditions-info-accept">Aceptar</button>
                    <button class="contentTermAndConditions-info-close">Rechazar</button>
                </div>
            </div>
        </div>
    `);
}
//Gaurdar en Local 
function applySavedState() {
    const checkbox = document.getElementById('opt-in-termsAndConditions');
    const savedState = localStorage.getItem("termsAccepted") === "true";
    checkbox.checked = savedState;
}
//Eventos de escucha 
function setupEventListeners() {
    const checkbox = document.getElementById('opt-in-termsAndConditions');
    const labelTermsAndConditions = document.querySelector('.opt-in-termsAndConditions--text-trigger');
    const contentTermsAndConditions = document.querySelector('.contentTermsAndConditions-popUp');
    const acceptButton = document.querySelector('.contentTermAndConditions-info-accept');
    const rejectButton = document.querySelector('.contentTermAndConditions-info-close');
    const irEntrega = document.getElementById('go-to-shipping');

    // Actualizar localStorage al cambiar manualmente el checkbox
    checkbox.addEventListener('change', () => {
        localStorage.setItem("termsAccepted", checkbox.checked);
    });

    // Mostrar popup al hacer clic
    labelTermsAndConditions.addEventListener('click', () => {
        contentTermsAndConditions.style.display = 'flex';
    });

    // PopUp Aceptar términos
    acceptButton.addEventListener('click', (e) => {
        e.preventDefault();
        checkbox.checked = true;
        localStorage.setItem("termsAccepted", true);
        contentTermsAndConditions.style.display = 'none';
    });

    // PopUp Rechazar t[erminos
    rejectButton.addEventListener('click', (e) => {
        e.preventDefault();
        checkbox.checked = false;
        localStorage.setItem("termsAccepted", false);
        contentTermsAndConditions.style.display = 'none';
    });

    // Validadcion del marcado t[erminos
    irEntrega.addEventListener('click', (e) => {
        if (!checkbox.checked) {
            e.preventDefault();
            alert('Debe aceptar los términos y condiciones para continuar');
        }
    });
}
