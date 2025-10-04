# Todo List Application (Fullstack with Docker)

โครงการนี้เป็นการพัฒนาแอปพลิเคชันจัดการงาน (Todo List) ที่สามารถเพิ่ม ลบ และแก้ไขสถานะของงานได้  
พัฒนาโดยใช้เทคโนโลยีทั้งส่วน Frontend และ Backend พร้อมรองรับการรันผ่าน Docker Compose

---

## การเปิดใช้งาน

หลังจากรัน Docker สำเร็จ สามารถเข้าผ่าน URL ดังนี้

| ส่วน | URL | รายละเอียด |
|------|-----|-------------|
| Web (Frontend) | [http://localhost:8080](http://localhost:8080) | หน้าเว็บหลักของระบบ Todo List |
| API Health | [http://localhost:3000/api/health](http://localhost:3000/api/health) | ตรวจสอบสถานะของ RESTful API |
| API Todos | [http://localhost:3000/api/todos](http://localhost:3000/api/todos) | Endpoint สำหรับจัดการข้อมูล Todo |

---

## เทคโนโลยีที่ใช้

### Frontend
- Vue.js 3 + TypeScript  
- Bootstrap 5 สำหรับการออกแบบให้สวยงามและรองรับทุกขนาดหน้าจอ (Responsive)  
- Axios สำหรับเชื่อมต่อกับ RESTful API  

### Backend
- Express.js (TypeScript) สำหรับสร้าง RESTful API  
- Prisma ORM สำหรับจัดการและเชื่อมต่อฐานข้อมูล  
- PostgreSQL เป็นระบบฐานข้อมูลหลัก  
- Docker Compose สำหรับการรันระบบทั้งหมด (Database, API, Frontend)

---

## ฟังก์ชันหลักของระบบ

- ผู้ใช้สามารถเพิ่มรายการงาน (Todo) ใหม่ได้  
- ผู้ใช้สามารถลบรายการงานที่ไม่ต้องการได้  
- ผู้ใช้สามารถทำเครื่องหมายว่างานเสร็จแล้วได้  
- หน้าเว็บออกแบบให้ Responsive ทั้งบนคอมพิวเตอร์และมือถือ  
- ข้อมูลถูกเก็บในฐานข้อมูล PostgreSQL ผ่าน API  
- เมื่อรีเฟรชหน้าเว็บ รายการ Todo ยังคงอยู่ (โหลดจาก RESTful API Server)  
- มีการทดสอบ API ด้วย Postman Collection

---

## การสร้างและรัน Container

ใช้คำสั่งเดียวในการรันทุกส่วนของระบบ

```bash
docker compose up --build -d



//การทดสอบด้วย Postman
มีไฟล์ TodoListAPI.postman_collection.json สำหรับนำเข้าใน Postman
ภายในประกอบด้วย:

GET /api/todos – แสดงรายการทั้งหมด

POST /api/todos – เพิ่มรายการใหม่

PUT /api/todos/:id – แก้ไขสถานะงาน

DELETE /api/todos/:id – ลบงาน

