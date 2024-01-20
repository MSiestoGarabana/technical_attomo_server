## technical-attomo-server

1. For local testing install dependencies

#### Local testing recommended. Uploading images into Cloudinary isn´t still working properly in the deployed version. :expressionless:

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

- https://technical-attomo-server.vercel.app/api/

## /games

| HTTP Method | URI path           | Description               |
| ----------- | ------------------ | ------------------------- |
| GET         | `/getAllGames`     | All games list            |
| GET         | `/:id`             | Get one game details      |
| POST        | `/createGame`      | Create a new game         |
| PUT         | `/editGame`        | Edit book (id-> req.body) |
| PUT         | `/addVote/:_id`    | Add vote to game          |
| PUT         | `/deductVote/:_id` | Deduct vote to game       |
| DELETE      | `/deleteGame/:id`  | Delete game               |

## /auth

| HTTP Method | URI path  | Description       |
| ----------- | --------- | ----------------- |
| POST        | `/signup` | User sign up      |
| POST        | `/login`  | User login        |
| GET         | `/verify` | User verification |

## /users

| HTTP Method | URI path                    | Description       |
| ----------- | --------------------------- | ----------------- |
| PUT         | `/substractVoteToUser/:_id` | availableVotes -1 |
| PUT         | `/addVoteToUser/:_id`       | availableVotes+1  |

## /upload

| HTTP Method | URI path | Description             |
| ----------- | -------- | ----------------------- |
| POST        | `/image` | cloudinary upload image |
