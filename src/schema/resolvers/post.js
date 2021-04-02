import { Post } from '../../models/Post';

export default {
    Query: {
        posts: async () => {
            try {
                return await Post.find();
            } catch (err) {
                throw new Error(err);
            }
        }
    }
}