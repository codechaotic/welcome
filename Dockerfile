FROM codechaotic/node

ADD dist/ /app
WORKDIR /app
CMD ["app.js"]

RUN npm install
