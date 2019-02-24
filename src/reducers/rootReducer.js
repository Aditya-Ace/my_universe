const initState = {
  posts: [
    {
      id: 1,
      title: 'Into the Cosmos',
      body:
        'At the cosmic level, Humans Life means nothing.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi repellendus quas, esse eos sit dignissimos. Nemo, corporis! Fuga velit delectus, odit repellendus, eius nostrum quos, tenetur perspiciatis quo neque blanditiis.'
    },
    {
      id: 2,
      title: 'Universe is expanding',
      body:
        'Universe is expanding at the speed of light into Nothing. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi repellendus quas, esse eos sit dignissimos. Nemo, corporis! Fuga velit delectus, odit repellendus, eius nostrum quos, tenetur perspiciatis quo neque blanditiis.'
    },
    {
      id: 3,
      title: 'Our Sun is an average star',
      body:
        'Actually Our Sun is a very average star and currently burning well but not gonna turn black hole when it runs out of juice. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi repellendus quas, esse eos sit dignissimos. Nemo, corporis! Fuga velit delectus, odit repellendus, eius nostrum quos, tenetur perspiciatis quo neque blanditiis.'
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPost = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPost
    };
  }
  return state;
};

export default rootReducer;
