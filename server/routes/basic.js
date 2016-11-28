const BASIC_VIEW = 'home';

export function home(req, res, next) {
  const context = {
    layoutData: {
      title: 'My Basic Example',
      meta: {
        author: 'Alexey Novak',
        description: '',
        keywords: '',
        robots: ''
      }
    }
  };

  res.render(BASIC_VIEW, context);
}
