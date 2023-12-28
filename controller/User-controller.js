import User from "../model/User.js";

export const SignUP = async (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({
        name,
        email,
        password
    })
    try {
        await user.save();
    }
    catch(e) {
        console.log(`error: ${e}`);
    }

    res.status(200).json({ user })
}