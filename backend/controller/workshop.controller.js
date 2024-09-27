require("dotenv").config();
const db = require("../db");

class workshopController {

    async getDemoTable() {
        try {
            const result = await db.query(
                "SELECT * FROM  pern_demo;",
                []
            );
            return result.rows;
        } catch (error) {
            return error;
        }
    }

    async addDemoInfo(req) {
        try {
            const result = await db.query(
                "INSERT INTO pern_demo (pern_name, pern_role, pern_year) VALUES ($1, $2, $3);",
                [req.body.pern_name, req.body.pern_role, req.body.pern_year]
            );
            return result.rows[0];
        } catch (error) {
            return error;
        }
    }
}

module.exports = new workshopController();