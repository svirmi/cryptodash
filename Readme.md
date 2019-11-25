Run command to start a project
```bash
docker run -it --rm -p 8000:8000 -u $(id -u ${USER}):$(id -g ${USER}) -v ${PWD}:/app node:12 /bin/bash
cd app
yarn gatsby develop -H 0.0.0.0
```
