module.expoerts = {
    siteMetadata: {
      title: `Glen Burchfield`,
        siteUrl: `https://glenburchfield.com`,
        description: `Glen Burchfield is a Software Solutions Architect for Unsuccessful Technologies LLC.  Take a look at his skills, experience and projects.`
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Roboto+Condensed:300,300i,400,400i,700,700i`],
                display: `swap`
            }
        }
    ]
}
