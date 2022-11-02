const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      attributes: ['id', 'tag_name'],
      include: [{ 
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }],
    });
    if (!tags) {
      res.status(404).json({ message: 'Error' });
      return;
    }
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagID = await Tag.findByPk(req.params.id, {
      include: [{ 
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }],
    });
    if (!tagID) {
      res.status(404).json({ message: 'Error' });
      return;
    }
    res.status(200).json(tagID);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async(req, res) => {
  // create a new tag
  try {
    const createTag = await Tag.create({
        tag_name: req.body.tag_name,
      })
      res.status(200).json(createTag);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTagID = await Tag.update({
			tag_name: req.body.tag_name,
		}, 
    {
      where: { 
        id: req.params.id 
      }, 
    })
    if (!updateTagID) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json({ message: 'Tag updated!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTagID = await Tag.destroy(
      { 
        where: { id: req.params.id } 
      });
    if (!deleteTagID) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json({ message: 'Tag deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
