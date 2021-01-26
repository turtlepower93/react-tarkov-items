const Item = require('../../models/item')

module.exports = {
    index,
    create,
    show,
    update,
    delete:deleteOne,
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

async function show(req, res) {
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
  }

  async function update(req, res) {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedItem);
  }

  async function deleteOne(req, res) {
      const deletedItem = await Item.findByIdAndRemove(req.params.id);
      res.status(200).json(deletedItem);
  }