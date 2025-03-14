// Gerekli modülleri yükle
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Ana sayfa rotası
app.get('/', (req, res) => {
    res.send('Merhaba! Node.js API çalışıyor.');
});

// Örnek API rotası
app.get('/api/data', (req, res) => {
    res.json({ message: 'API başarılı bir şekilde çalışıyor.' });
});

// Sunucuyu başlat
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} numaralı portta çalışıyor.`);
});
