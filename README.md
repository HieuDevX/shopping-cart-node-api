# shopping-cart-node-api

<h1>Run</h1>

1. Prerequisite: Docker, [how to install Docker Community Edition](https://docs.docker.com/install/)
2. Command

- Development:

        docker-compose -f docker-compose.dev.yml -p shopping-dev up -d

- Production:

        yarn build or npm run build
        docker-compose -p shopping-prod up -d
