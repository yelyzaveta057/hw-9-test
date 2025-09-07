import axios from 'axios';
import type { Note, NewNoteData} from '../types/note';
import { apiServer } from './api/api';


 axios.defaults.baseURL = 'https://notehub-api.goit.study';

// export const api = axios.create({
//   baseURL: 'https://notehub-api.goit.study',
//   withCredentials: true,
// });

export interface NotesHttpResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  query: string = "",
  page: number = 1,
  perPage: number = 12,
  tag?: string,
): Promise<NotesHttpResponse> => {
  const params: Record<string, string> = {
    page: page.toString(),
    perPage: perPage.toString(),
  };

  if (query.trim()) {
    params.search = query;
  }
if (tag) params.tag = tag;

  const response = await apiServer.get<NotesHttpResponse>('/notes', { params });

  return response.data;
};



export const fetchNoteById = async (id: string): Promise<Note> => {
  const res = await apiServer.get<Note>(`/notes/${id}`);
  return res.data;
};

export const createNote = async (noteData: NewNoteData): Promise<Note> => {
  const res = await apiServer.post<Note>('/notes', noteData);
  return res.data;
};

export const deleteNote = async (noteId: string): Promise<Note> => {
  const res = await apiServer.delete<Note>(`/notes/${noteId}`);
  return res.data;
};

