const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const pg = require('pg');

const app = express();
const port = 8080;

dotenv.config();

const dbConnectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: dbConnectionString });

app.use(bodyParser.json());

app.get('/api/categories', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM categories');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/api/user-forum-posts', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM user_forum_posts');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching user forum posts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/api/user-forum-posts', async (req, res) => {
  const { message, categoryId, username } = req.body;

  if (!message || !categoryId || !username) {
    return res.status(400).json({ error: 'Message, category, and username are required.' });
  }

  try {
    const result = await db.query(
      'INSERT INTO user_forum_posts (message, category_id, username) VALUES ($1, $2, $3) RETURNING *',
      [message, categoryId, username]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error creating user forum post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
