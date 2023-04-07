/**
 * News main text mock
 */
export const NEWS_TEXT_MOCK = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec scelerisque dui, sed eleifend massa. Curabitur id ante imperdiet, euismod magna eu, cursus ex. Donec suscipit turpis vitae justo vulputate, vel gravida lectus tempor. Pellentesque varius vestibulum sagittis. Proin eleifend sapien sed egestas faucibus. Suspendisse hendrerit felis lobortis ante convallis posuere. Fusce dictum leo quis fringilla ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam accumsan hendrerit malesuada. Phasellus id velit gravida, semper massa non, placerat nisl. Maecenas lacinia erat non nibh semper venenatis. Nam vitae dui ante. Donec sit amet purus non augue aliquam euismod. Aenean convallis ligula dolor, cursus aliquam turpis eleifend non.

In at lorem vel enim laoreet lacinia. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sodales molestie ipsum a feugiat. Proin eu sem a erat laoreet egestas. Fusce tempor porttitor nisi nec pellentesque. Vestibulum quis metus congue nulla auctor gravida ac vitae odio. Ut nec sagittis quam. Integer nec tellus ut dui finibus interdum. Nulla rhoncus, lorem eget vestibulum porta, augue sapien finibus velit, sagittis malesuada libero lectus id magna. Sed ac augue nunc. Suspendisse at ligula nisl. Aenean ullamcorper dui et ipsum vehicula, eget malesuada ex vestibulum. Aliquam eget purus rhoncus, dictum ante non, interdum dolor.

Pellentesque blandit vestibulum risus. Fusce est arcu, aliquet ac tempus a, tincidunt vitae ipsum. Fusce turpis elit, accumsan vitae bibendum et, viverra quis tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla ut euismod arcu. Quisque pellentesque magna quis neque elementum, a tincidunt purus condimentum. Fusce ultricies vehicula pellentesque. Cras maximus porttitor nisi, at porta orci mollis at. Maecenas eget volutpat nibh, vulputate porta dolor. Curabitur at maximus felis. Nullam efficitur, neque nec ultrices pretium, tortor ex convallis nibh, vitae congue sem erat ac nisi. Fusce vitae dolor nunc.

Curabitur dictum et elit sit amet feugiat. Ut ultrices venenatis nisl, quis malesuada nunc consectetur vitae. Mauris cursus lacinia felis eu suscipit. Vivamus at enim mollis nibh bibendum ultricies at eget felis. Proin viverra ex quis nunc elementum, convallis commodo mi volutpat. Fusce nec sem luctus, elementum augue eget, maximus nulla. Vivamus quam ipsum, ornare sit amet risus non, fermentum tincidunt augue.
`;

/**
 * Single news data mock
 */
export const NEWS_DATA_MOCK = {
  id: 1,
  title: 'News Title',
  subtitle: 'News subtitle',
  author: 'News Author',
  updatedAt: '2020-01-01',
  content: NEWS_TEXT_MOCK,
  likes: 10,
  dislikes: 20,
  comments: [
    {
      id: 1,
      createdAt: '2022-01-01',
      content: 'Comment 1',
      by: 'User 1',
    },
    {
      id: 2,
      createdAt: '2022-01-01',
      content: 'Comment 2',
      by: 'User 2',
    }
  ]
}

/**
 * List of news data mock
 */
export const NEWS_LIST_MOCK = [
  {
    id: 1,
    title: 'News Title',
    subtitle: 'News subtitle',
    author: 'News Author',
    updatedAt: '2020-01-01',
    content: NEWS_TEXT_MOCK,
    likes: 10,
    dislikes: 20,
    comments: [
      {
        id: 1,
        createdAt: '2022-01-01',
        content: 'Comment 1',
        by: 'User 1',
      },
      {
        id: 2,
        createdAt: '2022-01-01',
        content: 'Comment 2',
        by: 'User 2',
      }
    ]
  },
  {
    id: 2,
    title: 'News Title 2',
    subtitle: 'News subtitle 2',
    author: 'News Author 2',
    updatedAt: '2020-01-02',
    content: NEWS_TEXT_MOCK,
    likes: 10,
    dislikes: 20,
    comments: [
      {
        id: 3,
        createdAt: '2022-01-02',
        content: 'Comment 1',
        by: 'User 3',
      },
      {
        id: 4,
        createdAt: '2022-01-03',
        content: 'Comment 2',
        by: 'User 4',
      }
    ]
  }
]
