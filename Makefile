build:
	docker build -t v -f ./Dockerfile . && docker build -t turn -f ./Dockerfile.turn .

run-dev:
	docker compose -f ./dev.yml up