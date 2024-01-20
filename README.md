## technical-attomo-server

1. For local testing install dependencies

```
npm install
```

2. Init server

```
npm run dev
```

## Technologies

- Nodejs
- ExpressJS
- MongoDB
- JSON Web Token
- bcrypt
- Cloudinary storage

## DataBase is hosted in vercel.

Base URL.

- https://technical-attomo-server.vercel.app/api

## Games Routes

| HTTP Method | URI path           | Description               |
| ----------- | ------------------ | ------------------------- |
| GET         | `/getAllGames`     | All games list            |
| GET         | `/:id`             | Get one game details      |
| POST        | `/createGame`      | Create a new game         |
| PUT         | `/editGame`        | Edit book (id-> req.body) |
| PUT         | `/addVote/:_id`    | Add vote to game          |
| PUT         | `/deductVote/:_id` | Deduct vote to game       |
| DELETE      | `/deleteGame/:id`  | Delete game               |
