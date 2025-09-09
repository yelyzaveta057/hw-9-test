"use client";
import { User } from "@/types/user";
import { nextServer } from "./api";
import { NewNoteData, Note } from "@/types/note";

export type RegisterRequest = {
  email: string;
  password: string;
  userName: string;
};
export interface NotesHttpResponse {
  notes: Note[];
  totalPages: number;
}

export type LoginRequest = {
  email: string;
  password: string;
};


export const register = async (data: RegisterRequest) => {
  const res = await nextServer.post<User>('/auth/register', data);
  return res.data;
};

export const login = async (data: LoginRequest) => {
  const res = await nextServer.post<User>('/auth/login', data);
  return res.data;
};

export async function fetchNotesClient(
  query = "",
  page = 1,
  perPage = 12,
  tag?: string
): Promise<NotesHttpResponse> {
  const params: Record<string, string> = {
    page: String(page),
    perPage: String(perPage),
    ...(query.trim() ? { search: query } : {}),
    ...(tag ? { tag } : {}),
  };

  const { data } = await nextServer.get<NotesHttpResponse>("/notes", { params });
  return data;
}

export async function fetchNoteByIdClient(id: string): Promise<Note> {
  const { data } = await nextServer.get<Note>(`/notes/${id}`);
  return data;
}

export async function createNoteClient(noteData: NewNoteData): Promise<Note> {
  const { data } = await nextServer.post<Note>("/notes", noteData);
  return data;
}

export async function deleteNoteClient(noteId: string): Promise<Note> {
  const { data } = await nextServer.delete<Note>(`/notes/${noteId}`);
  return data;
}

