const express = require('express');
const router = express.Router();
const db = require('../db');

// Create Tournament
router.post('/', (req, res) => {
    const {
        name,
        location,
        prize,
        short_description,
        long_description,
        from_date,
        to_date,
        apply_date_start,
        apply_date_end,
        no_of_team,
        image,
        game
    } = req.body;

    const query = `INSERT INTO tournament (name, location, prize, short_description, long_description, from_date, to_date, apply_date_start, apply_date_end, no_of_team, image, game) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    db.query(query, [name, location, prize, short_description, long_description, from_date, to_date, apply_date_start, apply_date_end, no_of_team, image, game], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: result.insertId });
    });
});

// Read All Tournaments
router.get('/', (req, res) => {
    const query = 'SELECT * FROM tournament';
    db.query(query, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Read Single Tournament
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM tournament WHERE id = ?';
    db.query(query, [id], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Tournament not found' });
        }
        res.json(rows[0]);
    });
});

// Update Tournament
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {
        name,
        location,
        prize,
        short_description,
        long_description,
        from_date,
        to_date,
        apply_date_start,
        apply_date_end,
        no_of_team,
        image,
        game
    } = req.body;

    const query = `UPDATE tournament 
                   SET name = ?, location = ?, prize = ?, short_description = ?, long_description = ?, from_date = ?, to_date = ?, apply_date_start = ?, apply_date_end = ?, no_of_team = ?, image = ?, game = ? 
                   WHERE id = ?`;
    db.query(query, [name, location, prize, short_description, long_description, from_date, to_date, apply_date_start, apply_date_end, no_of_team, image, game, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Tournament updated successfully' });
    });
});

// Delete Tournament
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM tournament WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Tournament deleted successfully' });
    });
});

module.exports = router;
