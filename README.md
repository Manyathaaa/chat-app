# chat-app

Monorepo layout with a backend (Express) and frontend (Create React App).

Repository structure

- backend/ — Node/Express server (entry: `backend/server.js`)
- frontend/ — React app (Create React App)
- package.json — root scripts to run backend and frontend

Quick start

1. Install dependencies for backend and frontend:

	```bash
	# from repo root
	npm install
	cd frontend
	npm install
	```

2. Start backend only:

	```bash
	npm run start:backend
	```

3. Start frontend only (in another terminal):

	```bash
	npm run start:frontend
	```

4. Start both (development) from the repo root:

	```bash
	npm run dev:all
	```

Notes
- `npm run dev:all` uses a shell background operator — it works on macOS/Linux. If you prefer a single-command cross-platform solution, install `concurrently` and update the `dev:all` script.

License
- (Add your license here)