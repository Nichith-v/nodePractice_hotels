const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');


router.post('/', async (req, res)=>{

    try{
      const data = req.body;
    
      const newMenu = new MenuItem(data);
  
      const response = await newMenu.save();
      console.log('data saved');
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'})
    }
  
});

  
  // Get method to get the Menu
router.get('/', async (req, res)=>{
    try {
      const data = await MenuItem.find();
      console.log('data fetched');
      res.status(200).json(data);
  
    } catch (err) {
      console.log('error Occured');
      res.status(500).json({err: 'Internal Server Error'});
    }
})


router.put('/:id', async (req, res)=>{
  try{
    const menuItemid = req.params.id;
    const updatedMenuItemData = req.body;

    const response = await MenuItem.findByIdAndUpdate(menuItemid, updatedMenuItemData, {
      new: true,
      runValidators: true,
    })
    
    if(!response){
      return res.status(404).json({error: 'Menu Item not found'});
    }
    console.log('data updated');
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server Error'});

  }
})


router.delete('/:id', async(req, res)=>{
  try {
    const menuItemid = req.params.id;

    const response = await MenuItem.findByIdAndDelete(menuItemid);
    if(!response){
      return res.status(404).json({error: 'Menu Item Deleted successfully'});
    }
    console.log('data delete');
    res.status(200).json({message: 'Menu Item Deleted Successfully'});
  } catch (err) {
      console.log(err);
      res.status(500).json({error: 'Internal server Error'});
  }
})

module.exports = router;