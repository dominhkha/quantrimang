
# pull base image
FROM node:alpine

# working dir
WORKDIR /app

# copy package.json, package-lock.json to /app
COPY package*.json ./


# install dependencies 
RUN npm install 

# copy the rest to /app
COPY . .

# expose port
EXPOSE 3000

# start 
CMD ["npm", "start"]
