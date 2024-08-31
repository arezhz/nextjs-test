import { IUsers } from "../models/i-users";

export async function getUsers(): Promise<IUsers[]> {
  const data = await fetch(`${process.env.API_BASE_URL}/users`, {
    next: { revalidate: 10 },
  });
  return data.json();
}

export async function getUser(params: string): Promise<IUsers> {
  const data = await fetch(`${process.env.API_BASE_URL}/users/${params}`, {
    next: { revalidate: 10 },
  });
  return data.json();
}
