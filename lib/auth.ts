import { readFile } from "fs/promises";
import path from "path";

type CredentialsFile = {
  users: { id: string; password: string }[];
};

export async function verifyCredentials(
  id: string,
  password: string
): Promise<boolean> {
  const filePath = path.join(process.cwd(), "data", "credentials.json");
  const raw = await readFile(filePath, "utf-8");
  const data = JSON.parse(raw) as CredentialsFile;
  return data.users.some(
    (u) => u.id === id && u.password === password
  );
}
