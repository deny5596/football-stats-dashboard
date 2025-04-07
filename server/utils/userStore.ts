import fs from "fs";
import { User as StoredUser } from "@interfaces/index";

const filePath = "server/__data__/users.json";

export function getUsers(): StoredUser[] {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

export function saveUser(user: StoredUser) {
  const users = getUsers();
  users.push(user);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2), "utf8");
}
