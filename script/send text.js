const scriptURL = 'https://script.google.com/macros/...';
const form = document.forms['text-contact-form'];
const btnKirim = document.querySelector('.submit-btn');
const btnLoading = document.querySelector('.loading-btn');
const SuccessAlert = document.querySelector('.success-alert');
const WarningAlert = document.querySelector('.warning-alert');

  form.addEventListener('submit', (e) => {
        e.preventDefault();
        btnLoading.classList.toggle('display-off');
        btnKirim.classList.toggle('display-off');
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then((response) => {
            btnLoading.classList.toggle('display-off');
            btnKirim.classList.toggle('display-off');
            SuccessAlert.classList.toggle('d-none');
            form.reset();
            console.log('Success!', response);
          })
          .catch((error) => { 
          console.error('Error!', error.message);
          btnLoading.classList.toggle('display-off');
          btnKirim.classList.toggle('display-off');
          WarningAlert.classList.toggle('display-off');
          })
      });
