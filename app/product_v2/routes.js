const router = require('express').Router();
const Product = require('./model');
const productController = require('./controller');
const multer = require('multer');
const upload = multer({ dest: 'uploads' });

router.post('/users', upload.single('image'), productController.createUser);
router.get('/users', productController.getUsers);
router.get('/users/:id', productController.getUsersById);
router.patch('/users/:id', upload.single('image'), productController.updateUser);
router.delete('/users/:id', upload.single('image'), productController.deleteUser);

module.exports = router;
