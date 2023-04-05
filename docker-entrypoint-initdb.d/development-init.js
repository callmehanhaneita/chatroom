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

db.createCollection("chats");
db.chats.insertMany([
  {
    _id: "642d0dab9fe815bd7fe6e347",
    name: "Announcements",
    members: [
      "642d04fdbd473f3c5434a4d7",
      "642d04fdbd473f3c5434a4d8",
      "642d04fdbd473f3c5434a4d9",
      "642d04fdbd473f3c5434a4da"
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
    ]
  },
  {
    _id: "642d0dab9fe815bd7fe6e349",
    name: "General",
    members: [
      "642d04fdbd473f3c5434a4d7",
      "642d04fdbd473f3c5434a4d9",
      "642d04fdbd473f3c5434a4d8",
      "642d04fdbd473f3c5434a4da"
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
    ]
  },
  {
    _id: "642d0dab9fe815bd7fe6e34b",
    name: "Product Team",
    members: [
      "642d04fdbd473f3c5434a4d7",
      "642d04fdbd473f3c5434a4da",
    ]
  }
]);

db.createCollection("messages");
db.messages.insertMany([
  {
    from: "642d04fdbd473f3c5434a4d7",
    toChat: "642d0dab9fe815bd7fe6e347",
    createdAt: new Date(),
    updatedAt: new Date(),
    content: "Design Guideline.pdf"
  },
  {
    from: "642d04fdbd473f3c5434a4d8",
    toChat: "642d0dab9fe815bd7fe6e348",
    createdAt: new Date(),
    updatedAt: new Date(),
    content: "Photo"
  },
  {
    from: "642d04fdbd473f3c5434a4d9",
    toChat: "642d0dab9fe815bd7fe6e349",
    createdAt: new Date(),
    updatedAt: new Date(),
    content: "If you want to learn more, just ping me directly"
  },
  {
    from: "642d04fdbd473f3c5434a4d8",
    toMember: "642d04fdbd473f3c5434a4d7",
    createdAt: new Date(),
    updatedAt: new Date(),
    content: "So, what's your plan this weekend?"
  },
  {
    from: "642d04fdbd473f3c5434a4d9",
    toMember: "642d04fdbd473f3c5434a4d7",
    createdAt: new Date(),
    updatedAt: new Date(),
    content: "What's the progress on that task?"
  },
  {
    from: "642d04fdbd473f3c5434a4da",
    toMember: "642d04fdbd473f3c5434a4d7",
    createdAt: new Date(),
    updatedAt: new Date(),
    content: "Yeah! You're right."
  },
  {
    from: "642d04fdbd473f3c5434a4da",
    toChat: "642d0dab9fe815bd7fe6e34a",
    createdAt: new Date(),
    updatedAt: new Date(),
    content: "Yeah I know"
  }
])
