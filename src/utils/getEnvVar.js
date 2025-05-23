//* DOTENV
import dotenv from 'dotenv';
dotenv.config();

export const getEnvVar = (name, initialValue) => {
  const value = process.env[name];

  if (value) return value;

  if (initialValue) return initialValue;

  throw new Error(`Missing: process.env['${name}']`);
};
