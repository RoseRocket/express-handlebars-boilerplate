const BASIC_VIEW = 'home';
const EMAIL_VIEW = 'email';
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

export function emailTemplate(req, res) {
  const context = {
    layoutData: {
      title: 'My Basic Example',
      meta: {
        author: 'Alexey Novak',
        description: '',
        keywords: '',
        robots: ''
      }
    },
    header: {
      firstName: 'Alexey',
      lastName: 'Novak',
      orgName: 'ANCarrier',
      date: 'Dec 21, 2016',
      imageUrl: 'https://drscdn.500px.org/photo/110290623/m%3D2048/b6b2e3382249b1746a78c3dbd56e00f5'
    },
    totals: {
      ordersDispatched: 45,
      ordersDelivered: 5,
      currentlyInTransit: 123
    },
    ordersDelivered: [
      {
        tripId: 'IQF-KIN-124',
        origin: 'Toronto',
        destination: 'San Francisco',
        skids: 4,
        weight: 500
      },
      {
        tripId: 'IQF-KIN-124',
        origin: 'Toronto',
        destination: 'San Francisco',
        skids: 4,
        weight: 500
      },
      {
        tripId: 'IQF-KIN-124',
        origin: 'Toronto',
        destination: 'San Francisco',
        skids: 4,
        weight: 500
      },
      {
        tripId: 'IQF-KIN-124',
        origin: 'Toronto',
        destination: 'San Francisco',
        skids: 4,
        weight: 500
      },
      {
        tripId: 'IQF-KIN-124',
        origin: 'Toronto',
        destination: 'San Francisco',
        skids: 4,
        weight: 500
      }
    ],
    ordersDispatched: [
      {
        tripId: 'IQF-KIN-124',
        origin: 'Toronto',
        destination: 'San Francisco',
        skids: 4,
        weight: 400
      },
      {
        tripId: 'IQF-KIN-124',
        origin: 'Toronto',
        destination: 'San Francisco',
        skids: 4,
        weight: 400
      },
      {
        tripId: 'IQF-KIN-124',
        origin: 'Toronto',
        destination: 'San Francisco',
        skids: 4,
        weight: 400
      },
      {
        tripId: 'IQF-KIN-124',
        origin: 'Toronto',
        destination: 'San Francisco',
        skids: 4,
        weight: 400
      },
      {
        tripId: 'IQF-KIN-124',
        origin: 'Toronto',
        destination: 'San Francisco',
        skids: 4,
        weight: 400
      }
    ]
  };

  res.render(EMAIL_VIEW, context);
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
