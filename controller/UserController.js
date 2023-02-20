
const User = require('../model/User');


//create 
const createAccunt = async (req, res) => {
    try {
        const { name, message, email } = req.body;
        const user = await User.create({
            name: name,
            message: message,
            email: email
        })

        res.status(200).json({
            status: 200,
            data: user
        })
        // if the code is okay send the code below to the client side 
    } catch (err) {
        res.status(404).json({
            status: 404,
            message: err.message,
        })
    }
}
// finding by email function below .....................................
const findEmail = async (req, res) => {
    try {
        const findname = await User.find({ email: req.params.email })
        // send response back to the client 
        res.status(200).json({
            status: 200,
            data: findname
        })
    } catch (err) {
        // if an error happens this code below will work
        res.status(404).json({
            message: 'server error or network',
            data: err.message
        })
    }
}

// used for finding  id's 
// User.findById()



// updating  function below.................
const updateUser = async (req, res) => {
    try {
        const updateData = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: 200,
            data: 'done ',
            updateData
        })
    } catch (err) {
        res.status(404).json({
            message: 'server error or network',
            data: err.message
        })
    }

}

/// delete a user 
const DeleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: 200,
            data: 'data is gone'
        })
    } catch (err) {
        res.status(404).json({
            message: 'server error or network',
            data: err.message
        })
    }

}






const findAccount = async (req, res) => {
    try {
        const find = await User.findOne({ email: req.params.email })
        res.status(200).json({
            status: 200,
            data: find
        })
        console.log(req.params.email)

    } catch (e) {
        res.status(404).json({
            status: 404,
            message: e.message,
        })
    }
}

const DeleteData = async (req, res) => {
    try {
        const find = await User.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: 200,
            data: find
        })
        console.log(req.params.email)
        // findByIdAndUpdate()
        // findById()

    } catch (e) {
        res.status(404).json({
            status: 404,
            message: e.message,
        })
    }
}

module.exports = {
    DeleteUser,
    updateUser,
    findEmail,
    createAccunt,
    DeleteData,
    findAccount
}