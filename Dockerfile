FROM node:current-alpine

RUN apk add openssl

WORKDIR /build

COPY . .

RUN npm install -g pnpm

# Breaking change in pnpm so frozen lockfile does not work
#RUN pnpm i --frozen-lockfile
RUN pnpm i --no-frozen-lockfile

ENV SKIP_ENV_VALIDATION=1

RUN pnpm build

EXPOSE 3000
ENV PORT=3000

ENV NEXT_TELEMETRY_DISABLED=1

CMD [ "pnpm", "start" ]
