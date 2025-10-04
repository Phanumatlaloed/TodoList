# todo-docker

Fullstack Todo app with Docker Compose:
- Backend: Express + TypeScript + Prisma + PostgreSQL
- Frontend: Vue 3 + TypeScript + Vite + Bootstrap (served via Nginx)

## Quick start
```bash
docker compose up --build -d
```

Open:
- Web: http://localhost:8080
- API: http://localhost:3000/api/health

### (Optional) Generate Prisma migration history (first time only)
```bash
docker compose exec api sh
npx prisma migrate dev --name init
exit
docker compose restart api
```
