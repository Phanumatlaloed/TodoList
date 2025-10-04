<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import type { Todo } from '../types';

const props = defineProps<{ todo: Todo }>();
const emit = defineEmits<{
  (e: 'toggle', id: number, completed: boolean): void
  (e: 'delete', id: number): void
}>();

const onToggle = () => emit('toggle', props.todo.id, !props.todo.completed);
const onDelete = () => emit('delete', props.todo.id);
</script>

<template>
  <li class="list-group-item d-flex align-items-center justify-content-between">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" :checked="todo.completed" @change="onToggle" :id="`todo-${todo.id}`"/>
      <label class="form-check-label ms-2" :for="`todo-${todo.id}`">
        <span :class="{'text-decoration-line-through text-muted': todo.completed}">
          {{ todo.title }}
        </span>
      </label>
    </div>
    <button class="btn btn-sm btn-outline-danger" @click="onDelete">ลบ</button>
  </li>
</template>
