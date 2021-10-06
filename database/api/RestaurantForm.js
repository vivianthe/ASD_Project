// set up router
const express = require('express');
const router = express.Router();

// import mongodb restaurant model - gets restaurant 
//const Restaurant = require('./../models/Restaurant');
const Restaurant = require('../models/Restaurant');

// gets all restaurants
router.route('/').get((req, res) => {
    Restaurant.find()
        .then(restaurant => res.json(restaurant))
        .catch(err => res.status(400).json('Error' + err));
});

// create restaurant
router.post('/createrestaurant', (req, res) => {
    // get input from body request
    let { Restaurant_Name, Restaurant_Email, Restaurant_Address, 
        Restaurant_Phone_Number, Restaurant_Rating, Restaurant_Capacity /*, Restaurant_Image*/ } = req.body;

    // trim off white spaces
    Restaurant_Name = Restaurant_Name.trim();
    Restaurant_Email = Restaurant_Email.trim();
    Restaurant_Address = Restaurant_Address.trim();
    Restaurant_Phone_Number = Restaurant_Phone_Number.trim();
    Restaurant_Rating = Restaurant_Rating.trim();
    Restaurant_Capacity = Restaurant_Capacity.trim();
    //Restaurant_Image = Restaurant_Image.trim();

    // check if variables are empty
    if ( 
        Restaurant_Name == "" ||
        Restaurant_Email == "" ||
        Restaurant_Address == "" ||
        Restaurant_Phone_Number == "" ||
        Restaurant_Rating == "" ||
        Restaurant_Capacity == "" 
        //|| Restaurant_Image == "" 
    ) {
        res.json({
            status: "FAILED",
            message: "Empty input fields!",
        });
    } else {
        // Create a new restaurant
        const NewRestaurant = new Restaurant({
            Restaurant_Name,
            Restaurant_Email,
            Restaurant_Address,
            Restaurant_Phone_Number,
            Restaurant_Rating,
            Restaurant_Capacity,
            //Restaurant_Image,
        });

        // Save the new restaurant
        NewRestaurant.save().then((result) => {
            res.json({
                status: "SUCCESS",
                message: "Successfully Added Restaurant",
                data: result,
            });
        })
        .catch((err) => {
            res.json({
                status: "FAILED",
                message: "An error occured while saving a restaurant",
            })
            console.log(err);
        })        
    }
})

// find restaurant by id
router.route('/:id').get((req, res) => {
    Restaurant.findById(req.params.id)
        .then(restaurant => res.json(restaurant))
        .catch(err => res.status(400).json('Error: ' + err));
});

// find restaurant by id and delete
router.route('/:id').delete((req, res) =>{
    Restaurant.findByIdAndDelete(req.params.id)
        .then(() => res.json('Restaurant Deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// update by restaurant id
router.route('/update/:id').post((req, res) => {
    Restaurant.findById(req.params.id)
        .then(restaurant => {
            restaurant.Restaurant_Name = req.body.Restaurant_Name;
            restaurant.Restaurant_Email = req.body.Restaurant_Email;
            restaurant.Restaurant_Address = req.body.Restaurant_Address;
            restaurant.Restaurant_Phone_Number = req.body.Restaurant_Phone_Number;
            restaurant.Restaurant_Capacity = req.body.Restaurant_Capacity;

            restaurant.save()
                .then(() => res.json('Restaurant updated.'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: '+ err)); 
        console.log("it didnt update");
});
module.exports = router;
