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


}
export default Toolbox;
