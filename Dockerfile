# pull the Node.js Docker image
FROM node:alpine

# create the directory inside the container
WORKDIR /usr/src/app

COPY . .

RUN npm install && rm -rf .next && npm run build

EXPOSE 3000

CMD ["npm", "start"]