#### Gatsby, CSS grid, React Context, styled components, third-party API

Run command to start project locally
```bash
docker run -it --rm -p 8000:8000 -u $(id -u ${USER}):$(id -g ${USER}) -v ${PWD}:/app node:12 /bin/bash
cd app
yarn gatsby develop -H 0.0.0.0
```

Live demo: https://cryptodashh.netlify.com/

![cryptodash screenshot](screenshot.png?raw=true "cryptodash screenshot")

[![Netlify Status](https://api.netlify.com/api/v1/badges/613142d6-3b53-4f91-b106-134266dfd87f/deploy-status)](https://app.netlify.com/sites/cryptodashh/deploys)
