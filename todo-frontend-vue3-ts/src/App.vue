<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import api from './services/api';
import TodoItem from './components/TodoItem.vue';
import type { Todo } from './types';

const todos = ref<Todo[]>([]);
const title = ref('');
const loading = ref(false);
const error = ref<string | null>(null);

async function fetchTodos() {
  loading.value = true;
  error.value = null;
  try {
    const { data } = await api.get<Todo[]>('/api/todos');
    todos.value = data;
  } catch (e: any) {
    error.value = e?.message ?? 'โหลดรายการไม่สำเร็จ';
  } finally {
    loading.value = false;
  }
}

async function addTodo() {
  if (!title.value.trim()) return;
  try {
    const { data } = await api.post<Todo>('/api/todos', { title: title.value.trim() });
    todos.value.unshift(data);
    title.value = '';
  } catch (e: any) {
    alert(e?.response?.data?.message ?? 'เพิ่มรายการไม่สำเร็จ');
  }
}

async function toggleTodo(id: number, completed: boolean) {
  try {
    const { data } = await api.patch<Todo>(`/api/todos/${id}`, { completed });
    const idx = todos.value.findIndex(t => t.id === id);
    if (idx >= 0) todos.value[idx] = data;
  } catch {
    alert('อัปเดตสถานะไม่สำเร็จ');
  }
}

async function deleteTodo(id: number) {
  if (!confirm('ลบรายการนี้ใช่หรือไม่?')) return;
  try {
    await api.delete(`/api/todos/${id}`);
    todos.value = todos.value.filter(t => t.id !== id);
  } catch {
    alert('ลบไม่สำเร็จ');
  }
}

onMounted(fetchTodos);
</script>

<template>
  <div class="container container-max my-4 px-3">
    <h1 class="mb-3 text-center">Todo List</h1>

    <div class="card shadow-sm">
      <div class="card-body">
        <form class="row g-2" @submit.prevent="addTodo">
          <div class="col-12 col-md-9">
            <input v-model="title" type="text" class="form-control todo-input" placeholder="พิมพ์สิ่งที่ต้องทำแล้วกด Enter"/>
          </div>
          <div class="col-12 col-md-3 d-grid">
            <button type="submit" class="btn btn-primary btn-lg">เพิ่ม</button>
          </div>
        </form>
      </div>
    </div>

    <div class="mt-3">
      <div v-if="loading" class="alert alert-info">กำลังโหลด...</div>
      <div v-if="error" class="alert alert-danger">{{ error }}</div>

      <ul class="list-group">
        <TodoItem v-for="t in todos" :key="t.id" :todo="t" @toggle="toggleTodo" @delete="deleteTodo"/>
      </ul>

      <p v-if="!loading && todos.length === 0" class="text-center text-muted mt-3">ยังไม่มีรายการ</p>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 576px) { h1 { font-size: 1.75rem; } }
</style>
