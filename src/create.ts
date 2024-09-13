import { getDb } from "../utils/surreal";
import { jsonify } from "surrealdb.js";

async function createUser() {
  const db = await getDb();
  if (!db) {
    console.error("Database not initialized");
    return;
  }
  try {
    const user = await db.create("User", {
      username: "newUser",
      email: "user@example.com",
      password: "securePassword",
    });
    console.log("User created:", jsonify(user));
  } catch (err) {
    console.error("Failed to create user:", err);
  } finally {
    await db.close();
  }
}

createUser();