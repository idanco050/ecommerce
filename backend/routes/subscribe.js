const express = require("express");
const router = express.Router();
const fs = require('fs');

router.post('/',(req, res)=>{
    const { fullName, email, favoriteCategory } = req.body;
    const formData = {
        fullName: fullName,
        email: email,
        favoriteCategory: favoriteCategory
    };
    console.log(formData);
    let data = [];
    try {
        data = JSON.parse(fs.readFileSync('database/data.json'));
    } catch (err) {
        console.error(err);
    }

    // add new form data to existing data
    data.push(formData);

    // write updated data to file
    fs.writeFile('database/data.json', JSON.stringify(data), (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Data written to file');
        }
    });


})

router.get('/',(req, res) => {
    let data = [];
    try {
        data = JSON.parse(fs.readFileSync('database/data.json'));
    } catch (err) {
        console.error(err);
    }
    res.json(data)
})

module.exports = router;