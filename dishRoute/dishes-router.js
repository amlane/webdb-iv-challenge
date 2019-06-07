const router = require('express').Router();

const db = require('./dishes-model.js');


// <---------------   api/dishes   --------------->

router.get('/dishes', (req, res) => {
    db.getDishes()
    .then( dish => {
        res.status(200).json(dish)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.post('/dishes', (req, res) => {
    db.addDish(req.body)
    .then(dish => {
        res.status(201).json(dish)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.get('/dishes/:id', verifyDishId, (req, res) => {
    const id = req.params.id;

    db.getDish(id)
    .then( dish => {
        res.status(200).json(dish)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});


// <---------------   api/recipes   --------------->

router.get('/recipes', (req, res) => {
    db.getRecipes()
    .then( recipe => {
        res.status(200).json(recipe)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.post('/recipes', (req, res) => {
    db.addRecipe(req.body)
    .then(recipe => {
        res.status(201).json(recipe)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

// router.get('/:id', verifyId, (req, res) => {
//     const id = req.params.id;

//     Users.findById(id)
//     .then( user => {
//         res.status(200).json(user)
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
// });

// router.post('/', (req, res) => {
//     Users.insert(req.body)
//     .then(user => {
//         res.status(201).json(user)
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
// });

// router.put('/:id', verifyId, (req, res) => {
//     const id = req.params.id;
//     const changes = req.body;

//     Users.update(id, changes)
//     .then(updatedUser => {
//         res.status(201).json(updatedUser)
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
// });

// router.delete('/:id', verifyId, (req, res) => {
//     const id = req.params.id;

//     Users.remove(id)
//     .then(deletedUser => {
//         const unit = deletedUser > 1 ? "records" : "record";
//         res.status(200).json({ message: `${deletedUser} ${unit} deleted.` });
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
// });


// Custom Middleware

//checks if id exists in the database
function verifyDishId(req, res, next){
    const id = req.params.id;

    db.getDish(id)
    .then(item => {
        if(item){
            req.item = item;
            next();
        } else {
            res.status(404).json({ message: "Dish Not Found." })
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
};


module.exports = router;