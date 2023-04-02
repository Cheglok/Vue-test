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
        removePost(state, id) {
            state.posts = state.posts.filter(post => post.id !== id)
        }
    },
    actions: {
        async fetchPosts(store, count = 3) {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=" + count);
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
        removePost(store, id) {
            store.commit("removePost", id)
        }
    },
    getters: {
        getPosts(state) {
            return state.posts;
        },
        getPostsCount(state) {
            return state.posts.length;
        },
        // getPost(state, id) {
        //     return state.posts.find(post => post.id === id);
        // }
    },
};

export default posts;