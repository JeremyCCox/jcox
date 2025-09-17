FROM node:20-alpine AS base
RUN apk add --update --no-cache \
        make \
        g++ \
        jpeg-dev \
        cairo-dev \
        giflib-dev \
        pango-dev \
        libtool \
        autoconf \
        automake
WORKDIR /app
COPY package*.json ./

FROM base AS builder
WORKDIR /app
COPY . .
RUN yarn 
RUN yarn build

FROM base AS production
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

CMD yarn start

#FROM base as dev
#ENV NODE_ENV=development
#RUN npm install
#COPY . .
#CMD npm run dev


