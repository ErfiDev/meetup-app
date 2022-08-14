build:
	docker build -t meetup-container . 

run-dev:
	docker run -p 8080:8080 meetup-container