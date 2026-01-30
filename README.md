# Portfolio Project

A full-stack portfolio application with Next.js frontend, FastAPI backend, and PostgreSQL database.

## Project Structure

```
portfolio/
├── backend/                 # FastAPI backend
│   ├── app/
│   │   └── main.py         # FastAPI application
│   ├── Dockerfile          # Backend container config
│   └── requirements.txt    # Python dependencies
├── frontend/               # Next.js frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── index.tsx   # Home page
│   │   │   └── api/
│   │   │       └── hello.ts # API route
│   │   └── components/     # React components
│   ├── Dockerfile          # Frontend container config
│   ├── package.json        # Node.js dependencies
│   └── next.config.js      # Next.js configuration
├── envs/                   # Environment files
│   ├── backend.env         # Backend environment variables
│   └── frontend.env        # Frontend environment variables
└── docker-compose.yml      # Multi-container orchestration
```

## Services

- **Frontend**: Next.js React app (Port 3000)
- **Backend**: FastAPI Python API (Port 8000)
- **Database**: PostgreSQL (Port 5432)

## Quick Start

1. **Start all services:**
   ```bash
   docker-compose up --build
   ```

2. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Docs: http://localhost:8000/docs

## Development

### Hot Reload
Both frontend and backend support hot reload:
- Modify files locally and see changes instantly
- No need to rebuild containers during development

### API Endpoints
- `GET /` - Backend health check
- `GET /api/hello?name=<name>` - Say hello endpoint

## Environment Variables

### Frontend (.env)
- `NEXT_PUBLIC_API_URL` - Backend API URL
- `NEXT_PUBLIC_APP_NAME` - Application name

### Backend (.env)
- `DB_HOST` - Database host
- `DB_NAME` - Database name
- `DB_USER` - Database user

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Backend**: FastAPI, Python, Uvicorn
- **Database**: PostgreSQL
- **Containerization**: Docker, Docker Compose