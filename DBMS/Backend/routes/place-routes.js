const express =require('express');
 
const { check } = require('express-validator');

const router = express.Router();
const placecontroller  = require('../controllers/place');

router.get('/:pid',placecontroller.getplacebyid);
router.get('/user/:uid',placecontroller.getplacebyuser);
router.post(
  '/',
  [
    check('title')
      .not()
      .isEmpty(),
    check('description').isLength({ min: 5 }),
    check('address')
      .not()
      .isEmpty()
  ],
  placecontroller.createplace
);
router.patch('/:pid',[check('title').not().isEmpty(),check('description').isLength({ min: 5 })],placecontroller.updateplace);
router.delete('/:pid',placecontroller.deleteplace);
module.exports = router;