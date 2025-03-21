# Setup instructions

Requirements:
    - [Node LTS (v22)](https://nodejs.org/en)
    - [PNPM Package Manager (v10)](https://pnpm.io/)
    - [Mapbox API Key](http://docs.mapbox.com/help/getting-started/access-tokens/)


Copy the `.env.example` file to `.env`, and change the `NEXT_PUBLIC_MAPBOX_TOKEN` like below

In this case we've included the env file used in the demo. Normally this wouldn't been shared publically
```properties
NEXT_PUBLIC_MAPBOX_TOKEN=pk.eyJ1IjoiYWxla3MtaHNlIiwiYSI6ImNtOGgzc3FvYTB3bDUya3M1dHV6d3cxbDcifQ.VbhIfzy-yza1CSzTuwke3w
```


Install dependencies:
```bash
$ pnpm install
```

Run application in development mode:
```bash
$ pnpm run dev
```

After the dev server has spun up open http://localhost:3000 in your web browser