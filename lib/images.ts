// Mock Unsplash images for resort components
export const images = {
  hero: 'https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  heroPages: {
    rooms: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1920&h=1080&fit=crop',
    dining: 'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=889&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    experiences: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&h=1080&fit=crop',
    gallery: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    testimonials: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop',
    contact: 'https://plus.unsplash.com/premium_photo-1681487748082-839c7c0ee0c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    about: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1920&h=1080&fit=crop',
  },
  slider: [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1520250497591-5920fefeb224?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1571896349842-33c89424e266?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1577720643272-265c62cbf6c6?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop',
  ],
  featured: [
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1566665556112-652a25c981a2?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1571896349842-33c89424e266?w=600&h=400&fit=crop',
  ],
  rooms: [
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1566665556112-652a25c981a2?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571896349842-33c89424e266?w=800&h=600&fit=crop',
  ],
  dining: [
    'https://images.unsplash.com/photo-1504674900152-b8b27e3c32ba?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1537457984620-33c7c16e2566?w=600&h=400&fit=crop',
  ],
  wellness: [
    'https://images.unsplash.com/photo-1544161515-81efb988aeb4?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600881333345-e0d3f0e25e47?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1576091160399-48070e337fcd?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=800&h=600&fit=crop',
  ],
  activities: [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1500375592092-40eb8a372784?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1551224259-aeccc5ce4ef8?w=600&h=400&fit=crop',
  ],
  gallery: Array.from({ length: 40 }, (_, i) => {
    const roomIds = [
      'photo-1631049307264-da0ec9d70304',
      'photo-1582719471384-894fbb16e074',
      'photo-1566665556112-652a25c981a2',
      'photo-1571896349842-33c89424e266',
      'photo-1509631179647-0177331693ae',
      'photo-1495597323338-54e8e1b34255',
      'photo-1494145904049-0dca59b4bbad',
      'photo-1507238691515-188a1e626c8e',
      'photo-1519046904884-53103b34b206',
      'photo-1520250497591-5920fefeb224',
    ];
    const roomId = roomIds[i % roomIds.length];
    return `https://images.unsplash.com/${roomId}?w=400&h=500&fit=crop&q=80`;
  }),
  facilities: [
    'https://images.unsplash.com/photo-1576091160559-112173f9f7ae?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1544161515-81efb988aeb4?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1504674900152-b8b27e3c32ba?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1537457984620-33c7c16e2566?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1519167758481-83f19106c0b7?w=600&h=400&fit=crop',
  ],
};
