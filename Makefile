build:
	mkdir -p out
	npm run build
	go build -o tmp/main main.go

frontend:
	npm run dev

backend:
	mkdir -p out
	go tool air

live: 
	@echo "Starting live development server..."
	${MAKE} -j 2 frontend backend
	