import { User } from "@/types/user";
import { cookies } from "next/headers";
import { nextServer } from "./api";

import type { Note, NewNoteData } from "@/types/note";
import { NotesHttpResponse } from "./clientApi";




function withCookie() {
  const cookieStore = cookies();
  return { headers: { Cookie: cookieStore.toString() } };
}

export async function fetchNotesServer(
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

  const { data } = await nextServer.get<NotesHttpResponse>("/notes", {
    params,
    ...withCookie(),
  });
  return data;
}

export async function fetchNoteByIdServer(id: string): Promise<Note> {
  const { data } = await nextServer.get<Note>(`/notes/${id}`, withCookie());
  return data;
}

export async function createNoteServer(noteData: NewNoteData): Promise<Note> {
  const { data } = await nextServer.post<Note>("/notes", noteData, withCookie());
  return data;
}

export async function deleteNoteServer(noteId: string): Promise<Note> {
  const { data } = await nextServer.delete<Note>(`/notes/${noteId}`, withCookie());
  return data;
}

export const getServerMe = async (): Promise<User> => {
  const cookieStore = await cookies();
  const { data } = await nextServer.get('/auth/me', {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return data;
};


export const checkServerSession = async () => {

  const cookieStore = await cookies();
  const res = await nextServer.get('/auth/session', {
    headers: {
     
      Cookie: cookieStore.toString(),
    },
  });
  
  return res;
};
