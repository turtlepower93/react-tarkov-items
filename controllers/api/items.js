const Item = require('../../models/item')

module.exports = {
    index,
    create
}

async function index(req,res) {
    const items = await Item.find({}).sort({createdAt: 'desc'}).exec()
    // const items = await Item.find({}).sort({createdAt: 'desc'}).exec()
    return res.json(items);
}

async function create(req,res) {
    const item = req.body
    let items = await Item.create(req.body)
    return res.json(items);
}