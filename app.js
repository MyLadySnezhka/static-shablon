const express = require('express');
const server = express();

server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static('./public'));

const getExercise = (id) => {
    const db = [
        {
            id: 1,
            numtr: 7,
            use: 'гребной тренажер'
        },
        {
            id: 2,
            numtr: 21,
            use: 'сведение бедер'
        },
        {
            id: 3,
            numtr: 22,
            use: 'разведение бедер'
        },
        {
            id: 4,
            numtr: 30,
            use: 'подтягивание'
        },
    ];

const result = db.find(item => item.id === id);
return result;
};

server.get('/tren/:id', (req, res) => {
    const { id } = req.params;
    const exercise = getExercise( Number(id) );

    res.render('tren', { numtr: exercise.numtr, use: exercise.use });
    //res.render('tren');
})

server.get('/', (req, res) => {
    //res.send('Hello!');
    res.render('main');
});

server.listen(3000);