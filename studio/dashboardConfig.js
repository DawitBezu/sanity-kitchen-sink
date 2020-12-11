export default {
  widgets: [
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
                  buildHookId: '5fd32e63b477a7bf6f5bcf0f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hcyf6n2m',
                  apiId: 'a8d50bee-a24c-4c32-9b0a-2c5ba42dd89e'
                },
                {
                  buildHookId: '5fd32e64ddbbccd42b957e37',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ta5ofei7',
                  apiId: '80a951ea-1b81-45f7-b5e9-bf578b394d24'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DawitBezu/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ta5ofei7.netlify.app', category: 'apps'}
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
