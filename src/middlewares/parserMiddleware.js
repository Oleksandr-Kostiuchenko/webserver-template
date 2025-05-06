import express from 'express';

export const parserMiddleware = () => {
  return express.json();
};
