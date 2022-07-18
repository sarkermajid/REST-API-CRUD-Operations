const router = require('express').Router();
const {getAllUsers, createUsers, updateUsers,deleteusers} = require('../controllers/users.controller');

router.get('/', getAllUsers);
router.post('/', createUsers);
router.put('/:id', updateUsers);
router.delete('/:id', deleteusers);

module.exports = router;