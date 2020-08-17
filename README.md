# Osu medals discord bot

![Code quality](https://www.codefactor.io/repository/github/mateuszbuturla/osu-medals-discord-bot/badge)

### Commands

-   m?help - Bot help
-   m?medals - Show all medals
-   m?medal (medal name) - Show hint how to get medal
-   m?author - Bot author

### Installation

Project requires [Node.js](https://nodejs.org/) and [Mongo DB](https://www.mongodb.com/) to run.

1. Install the dependencies and start bot.

```sh
$ npm install
```

2. Create .env file in main folder

```
TOKEN= (place here your discord bot token)
PREFIX=m?
DB_KEY= (place here your mongodb key)
```

3. Start bot

```sh
$ npm start
```

### Tech

-   Node JS
-   Discord.JS
-   Mongo DB
