FROM node
WORKDIR /backend
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install --save-dev nodemon
COPY . ./
EXPOSE 8000
CMD ["npm", "start"]