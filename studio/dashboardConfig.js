export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d26e01efdfa84f1d9ff6afa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fv6ez19g',
                  apiId: '1a4280ee-1c7c-4e9a-87c0-4dceb8abdfb0'
                },
                {
                  buildHookId: '5d26e01f163e4423eedcdcbb',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ysh2jimy',
                  apiId: 'a9cd15c4-9a9e-4629-81e2-1aebdadefdf3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kaesetoast/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ysh2jimy.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
