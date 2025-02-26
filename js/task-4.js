
// submit eventi dinlenir
// Form gönderilirken sayfa yeniden yüklenmez
// Gönderim sırasında formda doldurulmamış alanlar varsa, bir alert görüntülenir
// Gönderim sırasında, alan adları - değerler çiftine sahip bir nesne oluşturulur, anahtarlar alan adları, değerler ise bu alan adlarının karşılık gelen değerleridir ve kenarlardaki boşluklardan temizlenir
// Gönderimden sonra form elemanları temizlenir

const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email,
        password
    };

    console.log(formData);
    form.reset();
});