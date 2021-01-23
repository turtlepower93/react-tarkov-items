require('dotenv').config();
require('./config/database');

const Item = require('./models/item');

(async function() {

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'AI-2 Medkit', type:'Meds'},
    {name: 'CAR Medkit', type:'Meds'},
    {name: 'Grizzly', type:'Meds'},
    {name: 'Physical Bitcoin .2', type:'Barter'},
    {name: 'Tetriz', type:'Barter'},
    {name: 'LEDX', type:'Barter'},
    {name: 'Saury', type:'Provisions'},
  ]);

  console.log(items)

  process.exit();

})();