FROM node:16.17
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY blog.js blog.js
RUN npm ci
COPY run.sh run.sh
CMD ["/bin/sh", "run.sh"]