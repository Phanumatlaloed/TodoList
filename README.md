# todo-docker
Todo List Application

Open:
- Web: http://localhost:8080
- API: http://localhost:3000/api/health


//เทคโนโลยีที่ใช้
Frontend

Vue.js 3 + TypeScript

Bootstrap 5 (CSS Framework) สำหรับการออกแบบให้สวยงามและ Responsive

Axios สำหรับเชื่อมต่อกับ RESTful API

Backend

Express.js (TypeScript) สำหรับสร้าง RESTful API

Prisma ORM สำหรับเชื่อมต่อและจัดการฐานข้อมูล

PostgreSQL เป็นระบบฐานข้อมูลหลัก

Docker Compose สำหรับการรันระบบทั้งหมด (Database, API, Frontend)

//ฟังก์ชันหลักของระบบ

ผู้ใช้สามารถเพิ่มรายการงาน (Todo) ใหม่ได้

ผู้ใช้สามารถลบรายการงานที่ไม่ต้องการได้

ผู้ใช้สามารถทำเครื่องหมายว่างานนั้นเสร็จแล้วได้

ระบบออกแบบให้แสดงผลได้ทั้งใน คอมพิวเตอร์และมือถือ (Responsive)

ข้อมูลจะถูกเก็บไว้ในฐานข้อมูล PostgreSQL ผ่าน API

เมื่อรีเฟรชหน้าเว็บ รายการ Todo ยังคงอยู่ เนื่องจากดึงข้อมูลจาก RESTful API Server

มีการทดสอบ API ด้วย Postman Collection

//สร้างและรัน Container
docker compose up --build -d

//URL	
Frontend	http://localhost:8080
Backend API	http://localhost:3000/api/todos
Health	http://localhost:3000/api/health

//การทดสอบด้วย Postman
มีไฟล์ TodoListAPI.postman_collection.json สำหรับนำเข้าใน Postman
ภายในประกอบด้วย:
GET /api/todos – แสดงรายการทั้งหมด
POST /api/todos – เพิ่มรายการใหม่
PUT /api/todos/:id – แก้ไขสถานะงาน
DELETE /api/todos/:id – ลบงาน
