.PHONY: dev fresh db
fresh:
	- docker rm -f database
	- docker network create starthack
	docker run -p 5432:5432 --name database --network starthack -e POSTGRES_DB=db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -d postgres:latest
	sleep 2
	pnpx prisma migrate dev

.PHONY: prod
prod:
	docker build -t starthack:latest .
	- docker network create starthack
	- docker rm -f starthack
	docker run -p 3000:3000 --env-file .env -e NODE_ENV=production --network starthack --name starthack -d starthack:latest
	DATABASE_URL="postgresql://postgres:password@localhost:5432/db" pnpx prisma migrate deploy