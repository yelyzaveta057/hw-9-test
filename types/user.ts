


export type User = {
  avatar: string;
  id: string;
  email: string;
  userName?: string;
  photoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CheckSessionRequest = {
  success: boolean;
};

export type UpdateUserRequest = {
  username: string;
  email?: string;
  avatar: string;
};
export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  email: string;
  password?: string;
  avatar?: string;
  username: string;
};