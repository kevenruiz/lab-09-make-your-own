import pool from '../lib/utils/pool.js';


class Toolbox {
  id;
  item;
  color;


  constructor(row) {
    this.id = row.id;
    this.item = row.item;
    this.color = row.color;

  }

  static async insert({ item, color }) {
    const { rows } = await pool.query(`
    INSERT INTO toolbox (item, color)
    VALUES ($1, $2)
    RETURNING *`, [item, color]
    );
    return new Toolbox(rows[0]);
  }

  static async findById(id) {
    const { rows } = await pool.query(`
    SELECT *
    FROM toolbox
    WHERE id = $1
    `, [id]);
    if (!rows[0]) return null;

    return new Toolbox(rows[0]);


  }

  static async findAll() {
    const { rows } = await pool.query(`
    SELECT * from toolbox
    `);
    return rows.map(row => new Toolbox(row));
  }

  static async delete(id) {
    const { rows } = await pool.query(`
    DELETE FROM toolbox
    WHERE id = $1
    RETURNING *
    `, [id]);
    return new Toolbox(rows[0]);
  }


}
export default Toolbox;
