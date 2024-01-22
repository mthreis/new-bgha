import pg from "pg";

//host.docker.internal
const postgres = new pg.Pool({
    connectionString: "postgresql://postgres:mat87@host.docker.internal:5433/postgres"
});

console.log("Connected to DB.");

async function main() {
    const result = await postgres.query(`select datname from pg_database;`);
    console.log("databases ", result.rows.map(r => r.datname));
}

main();

export default postgres;