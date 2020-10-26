  
FROM node:12.18-alpine AS ui-build
WORKDIR /usr/src/app
COPY frontend/ ./frontend/
RUN cd frontend && npm install && npm run build

FROM node:12.18-alpine AS server-build
WORKDIR /usr/src/app
COPY backend/ ./backend/
RUN cd backend && npm install

FROM node:12.18-alpine
WORKDIR /usr/src/app/
COPY --from=ui-build /usr/src/app/frontend/dist ./frontend/dist
COPY --from=server-build /usr/src/app/backend ./backend
RUN ls

EXPOSE 8080
WORKDIR /usr/src/app/backend
CMD ["node", "index.js"]