const BASIC_VIEW = 'home';
const BASIC_VIEW_WITH_PARTIALS = 'homeWithPartials';

export function home(req, res) {
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

export function homeWithPartials(req, res) {
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

  res.render(BASIC_VIEW_WITH_PARTIALS, context);
}
