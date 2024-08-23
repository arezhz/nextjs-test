import { IUsers } from "../models/i-users";

export async function getUsers(): Promise<IUsers[]> {
  const data = await fetch(`${process.env.BASE_URL}/users`, {
    next: { revalidate: 10 },
  });
  return data.json();
}
