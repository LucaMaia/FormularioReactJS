FROM node as build

WORKDIR /usr/app 

COPY . .

RUN npm install && npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html/
COPY --from=build /usr/app/build ./
EXPOSE 80



