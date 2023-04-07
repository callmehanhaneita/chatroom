db = db.getSiblingDB("chatroom-dev");
db.createUser(
  {
    user: "user_dev",
    pwd: "pwd_dev",
    roles: [{ role: "readWrite", db: "chatroom-dev" }]
  }
);

db.createCollection("members");
db.members.insertMany([
  {
    _id: "642d04fdbd473f3c5434a4d7",
    name: "Jenny White",
    avatar: 'https://randomuser.me/api/portraits/women/26.jpg'
  },
  {
    _id: "642d04fdbd473f3c5434a4d8",
    name: "Courtney Henry",
    avatar: 'https://randomuser.me/api/portraits/women/20.jpg'
  },
  {
    _id: "642d04fdbd473f3c5434a4d9",
    name: "Albert Flores",
    avatar: 'https://randomuser.me/api/portraits/men/74.jpg'
  },
  {
    _id: "642d04fdbd473f3c5434a4da",
    name: "Darlene Robertso",
    avatar: 'https://randomuser.me/api/portraits/men/35.jpg'
  }
]);

db.createCollection("groups");
db.groups.insertMany([
  {
    _id: "642d0dab9fe815bd7fe6e347",
    name: "Announcements",
    members: [
      "642d04fdbd473f3c5434a4d7",
      "642d04fdbd473f3c5434a4d8",
      "642d04fdbd473f3c5434a4d9",
      "642d04fdbd473f3c5434a4da"
    ],
    messages: [
      {
        _id: "642d09033fe815bd7fe7rd31",
        from: "642d04fdbd473f3c5434a4d7",
        createdAt: new Date(),
        content: "Design Guideline.pdf"
      },
    ]
  },
  {
    _id: "642d0dab9fe815bd7fe6e348",
    name: "Share your story",
    members: [
      "642d04fdbd473f3c5434a4da",
      "642d04fdbd473f3c5434a4d7",
      "642d04fdbd473f3c5434a4d9",
      "642d04fdbd473f3c5434a4d8"
    ],
    messages: [{
      _id: "642d09033fe815bd7fe7rd32",
      from: "642d04fdbd473f3c5434a4d8",
      createdAt: new Date(),
      content: "Photo"
    }],
  },
  {
    _id: "642d0dab9fe815bd7fe6e349",
    name: "General",
    members: [
      "642d04fdbd473f3c5434a4d7",
      "642d04fdbd473f3c5434a4d9",
      "642d04fdbd473f3c5434a4d8",
      "642d04fdbd473f3c5434a4da"
    ],
    messages: [
      {
        _id: "642d09033fe815bd7fe7rd33",
        from: "642d04fdbd473f3c5434a4d9",
        createdAt: new Date(),
        content: "If you want to learn more, just ping me directly"
      },
    ]
  },
  {
    _id: "642d0dab9fe815bd7fe6e34a",
    name: "Design Product",
    members: [
      "642d04fdbd473f3c5434a4d8",
      "642d04fdbd473f3c5434a4d7",
      "642d04fdbd473f3c5434a4d9",
      "642d04fdbd473f3c5434a4da"
    ],
    messages: [
      {
        _id: "642d09033fe815bd7fe7rd34",
        from: "642d04fdbd473f3c5434a4da",
        createdAt: new Date(),
        content: "Yeah I know"
      }
    ]
  },
  {
    _id: "642d0dab9fe815bd7fe6e34b",
    name: "Product Team",
    members: [
      "642d04fdbd473f3c5434a4d7",
      "642d04fdbd473f3c5434a4da",
      "642d04fdbd473f3c5434a4d9",
    ],
    messages: []
  },
  {
    _id: "642d0dab9fe815bd7fe6e34c",
    name: 'DIRECT_GROUP',
    members: [
      "642d04fdbd473f3c5434a4d8",
      "642d04fdbd473f3c5434a4d7",
    ],
    messages: [
      {
        _id: "642d09033fe815bd7fe7rd35",
        from: "642d04fdbd473f3c5434a4d8",
        createdAt: new Date(),
        content: "So, what's your plan this weekend?"
      }
    ]
  },
  {
    _id: "642d0dab9fe815bd7fe6e34d",
    name: 'DIRECT_GROUP',
    members: [
      "642d04fdbd473f3c5434a4d9",
      "642d04fdbd473f3c5434a4d7",
    ],
    messages: [
      {
        _id: "642d09033fe815bd7fe7rd36",
        from: "642d04fdbd473f3c5434a4d9",
        createdAt: new Date(),
        content: "So, what's your plan this weekend?"
      }
    ]
  },
  {
    _id: "642d0dab9fe815bd7fe6e34e",
    name: 'DIRECT_GROUP',
    members: [
      "642d04fdbd473f3c5434a4da",
      "642d04fdbd473f3c5434a4d7",
    ],
    messages: [
      {
        _id: "642d09033fe815bd7fe7rd37",
        from: "642d04fdbd473f3c5434a4da",
        createdAt: new Date(),
        content: "Yeah! You're right."
      }
    ]
  }
]);
