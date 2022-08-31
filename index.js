const port = process.env.PORT || 3000;
express = require('express');
app = express();
db = require('./models');
cors = require('cors');
bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/auth', require('./routes/auth'));

app.listen(port, () => {
    console.log('listening on port', port);
});

db.sequelize
    .sync({ force: false })
    .then(async () => {
        console.log('Connected successfully');
    }).catch((e) => console.log('Error => ', e));

