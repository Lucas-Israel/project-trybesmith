import { ResultSetHeader } from 'mysql2/promise';
import { IUser, User } from '../interfaces';
import connection from './connection';

const TABLE = 'Trybesmith.users';

export async function create(user: User): Promise<IUser> {
  const { username, vocation, level, password } = user;
  const query = `INSERT INTO ${TABLE} (username, vocation, level, password) VALUES (?, ?, ?, ?)`;
  const value = [username, vocation, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, value);
  const { insertId: id } = result;

  return { id, ...user };
}

export async function userByname(username: string): Promise<IUser> {
  const query = `SELECT * FROM ${TABLE} WHERE username = ?`;
  const value = [username];

  const [data] = await connection.execute(query, value);
  const [result] = data as IUser[];

  return result;
}