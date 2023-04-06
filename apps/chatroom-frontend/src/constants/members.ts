interface Members {
  [key: string]: {
    id: string;
    name: string;
    avatar: string;
  }
}

export const DEFAULT_MEMBERS: Members = {
  ['Albert']: {
    id: '642d04fdbd473f3c5434a4d9',
    name: 'Albert Flores',
    avatar: 'https://randomuser.me/api/portraits/men/74.jpg',
  },
  ['Darlene'] : {
    id: '642d04fdbd473f3c5434a4da',
    name: 'Darlene Robertso',
    avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
  },
  ['Courtney'] : {
    id: "642d04fdbd473f3c5434a4d8",
    name: "Courtney Henry",
    avatar: 'https://randomuser.me/api/portraits/women/20.jpg'
  },
  ['Jenny']: {
    id: "642d04fdbd473f3c5434a4d7",
    name: "Jenny White",
    avatar: 'https://randomuser.me/api/portraits/women/26.jpg'
  }
}
