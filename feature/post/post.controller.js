import Post from "./post.model.js";

export const createPost = async (req, res) => {
    try {

        const { title, description, userId } = req.body;

        // Validation
        if (!title || !description || !userId) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            });
        }

        // Save to database
        const newPost = await Post.create({
            title,
            description,
            userId
        });

        // Check if created
        if (!newPost) {
            return res.status(500).json({
                success: false,
                message: "Post could not be created"
            });
        }

        // Success response
        return res.status(201).json({
            success: true,
            message: "Your post is published",
            data: newPost
        });

    } catch (error) {

        console.log(error.message);

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};
export const getAllPosts = async (req, res) => {
    try {

        const posts = await Post.findAll();

        return res.status(200).json({
            success: true,
            message: "Posts fetched successfully",
            data: posts
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};