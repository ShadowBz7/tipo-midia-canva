const express = require('express');
const router  = express.Router();
const db      = require('../db');

// GET all
router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM projects ORDER BY updated_at DESC');
  res.json(rows);
});

// GET one
router.get('/:id', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM projects WHERE id = ?', [req.params.id]);
  if (!rows.length) return res.status(404).json({ error: 'Not found' });
  res.json(rows[0]);
});

// CREATE
router.post('/', async (req, res) => {
  const { name, type, extension, author, description } = req.body;
  const [result] = await db.query(
    'INSERT INTO projects (name,type,extension,author,description) VALUES (?,?,?,?,?)',
    [name, type, extension, author, description]
  );
  const [rows] = await db.query('SELECT * FROM projects WHERE id = ?', [result.insertId]);
  res.status(201).json(rows[0]);
});

// UPDATE
router.put('/:id', async (req, res) => {
  const { name, type, extension, author, description } = req.body;
  await db.query(
    'UPDATE projects SET name=?,type=?,extension=?,author=?,description=? WHERE id=?',
    [name, type, extension, author, description, req.params.id]
  );
  const [rows] = await db.query('SELECT * FROM projects WHERE id = ?', [req.params.id]);
  res.json(rows[0]);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await db.query('DELETE FROM projects WHERE id = ?', [req.params.id]);
  res.status(204).end();
});

module.exports = router;
