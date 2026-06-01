import { existsSync, mkdirSync } from 'node:fs'
import { dirname } from 'node:path'
import Database from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import bcrypt from 'bcryptjs'
import * as schema from './schema'

const DB_PATH = process.env.DB_PATH || './data/picnic.db'

const dir = dirname(DB_PATH)
if (dir && dir !== '.' && !existsSync(dir)) mkdirSync(dir, { recursive: true })

const sqlite = new Database(DB_PATH)
sqlite.pragma('journal_mode = WAL')
sqlite.pragma('foreign_keys = ON')

// Schema is created with idempotent DDL on boot (no migration tooling needed — VistterStream/SignBoard pattern).
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    name TEXT,
    role TEXT NOT NULL DEFAULT 'admin',
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    excerpt TEXT,
    body TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'General',
    status TEXT NOT NULL DEFAULT 'draft',
    hero_image TEXT,
    author TEXT,
    published_at TEXT,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
  CREATE INDEX IF NOT EXISTS idx_posts_status_published ON posts(status, published_at);
  CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
`)

export const db = drizzle(sqlite, { schema })

/** Seed the first admin from env on an empty users table. */
export function seedAdmin() {
  const count = sqlite.prepare('SELECT COUNT(*) AS n FROM users').get() as { n: number }
  if (count.n > 0) return
  const email = process.env.ADMIN_EMAIL || 'admin@wharfsidemb.com'
  const password = process.env.ADMIN_PASSWORD || 'picnic2026'
  const name = process.env.ADMIN_NAME || 'Wharfside Board'
  const hash = bcrypt.hashSync(password, 12)
  sqlite
    .prepare('INSERT INTO users (email, password_hash, name, role) VALUES (?, ?, ?, ?)')
    .run(email.toLowerCase(), hash, name, 'admin')
  console.log(`[seed] created admin user ${email}` + (process.env.ADMIN_PASSWORD ? '' : ' (default password — change it!)'))
}
