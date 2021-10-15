FROM node 

WORKDIR  /usr/app

COPY package.json ./

RUN npm cache clean --force
RUN npm cache verify
RUN npm install --force

COPY . .

EXPOSE 3333

CMD ["npm","run","dev"]