const userModel = require('../models/userModel')
const bcrypt = require('bcryptjs');

const addUser = async (req, res, next) => {
    try {

        const { username, email, password } = req.body;
        const emailCheck = await userModel.findOne({ email });

        if (emailCheck) {
            return res.status(404).json({ mssg: "Email is already used", status: false })
        } else {
            const hashedPs = await bcrypt.hash(password, 10)
            const user = await userModel.create({
                username,
                email,
                password: hashedPs,
            })
            const obj = user.toObject();
            delete obj.password;
            res.status(200).json({ obj, status: true })
        }

    } catch (err) {
        console.log(err.message)
        res.json({ mssg: "Email is already used", status: false, err })
    }
}

const loginUser = async (req, res, next) => {

    try {
        const { email, password } = req.body;
        const emailCheck = await userModel.findOne({ email });
        console.log(password, emailCheck.password)
        bcrypt.compare(password, emailCheck.password, (err, result) => {
            if (err) {
                console.error('Error during comparison:', err);
                return;
            }

            if (result) {
                console.log('Password matched! User authenticated.');
                const obj = emailCheck.toObject();
                delete obj.password;
                return res.json({ emailCheck, status: true })

            } else {
                console.log('Password did not match. Authentication failed.');
                return res.json({ mssg: 'Incorrect email or password', status: false })
            }
        });

    } catch (err) {
        return res.json({ mssg: 'Incorrect email or password', status: false, err })
    }
}

const updateUser = async (req, res, next) => {
    try {

        const { id } = req.params;
        const { email, password, newPassword, username } = req.body;
        const idCheck = await userModel.findById(id);
        // console.log(password)
        // console.log(idCheck.password)
        const psCheck = await bcrypt.compare(password, idCheck.password)
        // console.log(psCheck)
        // console.log("This is new password --> " + newPassword)

        if (psCheck == true) {
            if (newPassword == "") {
                const hashPs = await bcrypt.hash(password, 10)
                const newUser = await userModel.findByIdAndUpdate(id,
                    {
                        username: username,
                        password: hashPs,
                        email: email,
                    }, {
                    new: true,
                }).select({ password: 0 })
                res.status(200).json({ newUser, status: true })
            } else {
                const hashPs = await bcrypt.hash(newPassword, 10)
                const newUser = await userModel.findByIdAndUpdate(id,
                    {
                        username: username,
                        password: hashPs,
                        email: email,
                    }, {
                    new: true,
                }).select({ password: 0 })
                res.status(200).json({ newUser, status: true })
            }
        } else {
            res.status(404).json({ mssg: 'Incorrect password' })
        }

    } catch (err) {
        console.log(err);
        res.status(404).json({ mssg: 'Error in updating user', status: false })
    }
}


module.exports = {
    addUser,
    loginUser,
    updateUser
}