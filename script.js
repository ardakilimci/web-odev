document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun otomatik gönderimini engelle

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Lütfen tüm alanları doldurun.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Geçerli bir e-posta adresi giriniz.');
        return;
    }

    alert('Mesajınız başarıyla gönderildi.');
    this.reset(); // Formu sıfırla
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}