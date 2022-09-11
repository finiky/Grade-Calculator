const db = require("./db");

module.exports = {
  getGradeScale: async () => {
    try {
      const result = await db.query(
        `SELECT
          level, grade, min_mark, max_mark
        FROM grade_scale 
        ORDER BY
          id
        `
      );
      const gradeScale = result.rows;
      return gradeScale;
    } catch (err) {
      throw Error(err);
    }
  },
};
