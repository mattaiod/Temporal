FROM node:19.0.0-alpine as build

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

CMD ["npm", "start"]


#FROM node:19.0.0-alpine as deployment
#
#ARG NODE_ENV=production
#ENV NODE_ENV=${NODE_ENV}
#
#WORKDIR /home/node
#
#COPY package*.json ./
#
#RUN npm install --only=production
#
#COPY . .
#
#COPY --from=development /home/node/src/app/dist ./dist
#
#CMD ["node", "dist/main"]