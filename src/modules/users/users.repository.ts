import { Database } from "bun:sqlite";
import { email, string } from "zod";

export class UsersRepository {
  constructor(private readonly database: Database) {}

  public init(): void {
    this.database.run(`
      CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENRT,
      title TEXT NOT NULL,
      email TEXT NOT NULL,
      password TEXT NOT NULL
      );
    `);
  }
}

public findById(id: number): UserType | null {
  return this.database
  .query<UserType, {$id: number }>("SELECT * FROM users WHERE id = $id")
  .get({$email: email.trim().toLowerCase() });
}

public create(title: string, email: string, password: string): UserType | null {
return this.database
.query<UserType, {$title: string; $email: string; $password: string }>(`|
  INSERT INTO users (title)`)
}