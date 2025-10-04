import { Request, Response } from 'express';
import { prisma } from '../prisma';

export const getTodos = async (_: Request, res: Response) => {
  const todos = await prisma.todo.findMany({ orderBy: { id: 'desc' } });
  res.json(todos);
};

export const getTodo = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const todo = await prisma.todo.findUnique({ where: { id } });
  if (!todo) return res.status(404).json({ message: 'Todo not found' });
  res.json(todo);
};

export const createTodo = async (req: Request, res: Response) => {
  const { title } = req.body;
  if (!title || typeof title !== 'string') {
    return res.status(400).json({ message: 'title is required (string)' });
  }
  const todo = await prisma.todo.create({ data: { title } });
  res.status(201).json(todo);
};

export const updateTodo = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { title, completed } = req.body as { title?: string; completed?: boolean };

  try {
    const todo = await prisma.todo.update({
      where: { id },
      data: {
        ...(typeof title === 'string' ? { title } : {}),
        ...(typeof completed === 'boolean' ? { completed } : {})
      }
    });
    res.json(todo);
  } catch {
    res.status(404).json({ message: 'Todo not found' });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    await prisma.todo.delete({ where: { id } });
    res.status(204).send();
  } catch {
    res.status(404).json({ message: 'Todo not found' });
  }
};
