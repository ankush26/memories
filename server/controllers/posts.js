import PostMessage from "../models/posts.js"

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const getPost = (req, res) => { 
    res.send('get post')
}

export const createPost = (req, res) => { 
    res.send('create post')
}

export const updatePost = (req, res) => { 
    res.send('update post')
}

export const deletePost = (req, res) => { 
    res.send('delete post')
}

export const likePost = (req, res) => { 
    res.send('like post')
}