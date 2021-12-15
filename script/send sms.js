const scriptURL = 'https://script.google.com/macros/...';
const btnKirim = document.querySelector('.submit-btn');
const form = document.forms['text-contact-form'];
 form.addEventListener('submit', (e) => {
        console.log('Tunggu Sebentar Ya ☺...')
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then((response) => {
            alert("Pesan Berhasil Dikirim, Tunggu Hasil Jawabannya, Klik 'Ok' Atau 'Baik' Untuk Menutup Pop-up Ini");
            form.reset();
            console.log('Success!', response);
          })
          .catch((error) => { 
          console.error('Error!', error.message);
         alert('Error Massage!, Pesan Tidak Terkirim, Cek Koneksi Internet Dan Cek Console Untuk Melihat Kesalahan, ( Error API Send Massage!, https://ernestoyoofi.github.io/bug#api-send-massage )');
        alert('Try Again & Check Console Log'); btnKirim.classList.toggle('.submit-btn-error');
         console.error("Error API Send Massage!, https://ernestoyoofi.github.io/bug#api-send-massage")
          })
      });
