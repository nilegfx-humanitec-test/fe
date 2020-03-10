FROM mhart/alpine-node:8
WORKDIR /fe

COPY package.json index.js ./
COPY public ./public
EXPOSE 4040 4141
RUN npm i --prod
CMD ["node", "index.js"]