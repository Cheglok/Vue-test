const posts = {
    state: {
        posts: [],
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        addPost(state, post) {
            state.posts.unshift(post);
        },
    },
    actions: {
        async fetchPosts(store) {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
                const posts = await res.json();
                console.log("posts", posts)
                store.commit("setPosts", posts)
            } catch(error) {
                console.log('Error! Could not reach the API. ' + error);
            }

        },
        addPost(store, post) {
            store.commit("addPost", post);
        },
    },
    getters: {
        getPosts(state) {
            return state.posts;
        },
        getPost(state, id) {
            return state.posts.find(post => post.id === id);
        }
    },
};

export default posts;