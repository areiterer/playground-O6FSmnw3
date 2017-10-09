# The App

Now we just have to use the `<StoryList>` component somewhere in the app, and pass an array of HackerNews stories and it will render a list item for each of them. Since I did not use the API yet, I just used a [static array](https://github.com/areiterer/hackernews-client/blob/master/src/api.js) with sample stories which I manually got from the API for the purpose of creating the basic components.

Since the App component is the root of the application, i also used it to define some global CSS rules. Styled-Components provides functionality to inject CSS globally, but they do only recommend to use it for styling the body or defining the font-face globally. (See [injectGlobal](https://www.styled-components.com/docs/api#injectglobal))

Now let's see what we created, press "Run" and see our finished HackerNews feed:

@[The finished HackerNews Feed]({ 
    "stubs": [
        "src/components/Story/Header.js",
        "src/components/Story/Footer.js",
        "src/components/Story/Styles.js",
        "src/components/Story/index.js",
        "src/containers/StoryList.js",
    ], 
    "command": "./run.sh"
})

As you can see, I retrieve my stories from my static API within componentWillMount and put them into the state. This will change as soon as the app will fetch new Stories from the API, which I will handle in a later blog post.

Now that everything is tied together, the app renders a list of a few HackerNews stories with a similar styling to the original HackerNews list.

# What did we learn?

I did not yet fully discover and use every feature of styled-components, but I hope I could show you the basic ideas behind it. I'm amazed of the positive effect of such little things like not having to add class names to components or having to maintain one big or multiple smaller CSS files instead of keeping the style as close to the component as possible.

If you're like me, it might take some time for you until you get used to this (kind of) different way of thinking, but once you get the hang of it, you want to make everything a styled component 🙂

# Wrap up 
Thank you for reading to the end! This is the first post I have ever written - and also the first one that I posted on tech.io, so I really appreciate every kind of feedback. 

This article was originally published at [my blog](http://www.andreasreiterer.at/web-development/styled-components-hackernews-feed/). If you liked it, please have a look at my other posts there.