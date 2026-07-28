import User from "./user.model.js";

export const createUser = async (req, res) => {
    try {
            const { name, email, age } = req.body;

        const checkEmail = await User.findOne({
            where: {
                email
            }
        });

        if (checkEmail) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });
        }

        if (age < 20) {
            return res.status(400).json({
                success: false,
                message: "Age should be greater than 20"
            });
        }
        const user = await User.create(req.body);

        res.status(201).json({
            success: true,
            data: user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();

        res.status(200).json({
            success: true,
            data: users,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        res.json(user);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        await user.update(req.body);

        res.json({
            success: true,
            data: user,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        await user.destroy();

        res.json({
            success: true,
            message: "User deleted successfully",
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
