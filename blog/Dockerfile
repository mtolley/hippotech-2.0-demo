FROM node:16.17
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY blog.js blog.js
RUN npm ci
CMD ["npm", "start"]