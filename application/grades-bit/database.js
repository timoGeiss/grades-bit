import * as SQLite from "expo-sqlite";
import {database} from "./constants";

export async function createConnection() {
    if (!(database && database.connection && database.connection.databaseName)) {
        try {
            database.connection = await SQLite.openDatabaseAsync("gradeDB");
        } catch (e) {
            alert(e);
            console.error(e);
        }
        console.info("DB: " + JSON.stringify(database.connection));
    }
}

export async function createTables() {
    const db = database.connection;
    const statement = `
			CREATE TABLE IF NOT EXISTS "note" (
				"id" INTEGER NOT NULL UNIQUE,
				"titel" TEXT NOT NULL,
                "wert" DOUBLE NOT NULL,
                "gewichtung" DOUBLE NOT NULL,
                "fach_id" INTEGER NOT NULL,
                FOREIGN KEY("fach_id") REFERENCES fach(id),
				PRIMARY KEY("id" AUTOINCREMENT)
			);
						
			CREATE TABLE IF NOT EXISTS "fach" (
				"id" INTEGER NOT NULL UNIQUE,
				"name" TEXT NOT NULL,
				PRIMARY KEY("id" AUTOINCREMENT)
			);
    `;
    try {
        await db.execAsync(statement);
    } catch (e) {
        alert("Error while creating database tables");
        console.error("Error in SQL-Create: ");
        console.warn("with Statement: ", statement);
    }

}

export async function checkIfTablesExist() {
    const db = database.connection;
    const expected_tables = ["note", "fach"];
    const actual_tables = [];
    let result = true;
    const statement = `
			SELECT * FROM SQLITE_SCHEMA;
	`;
    try {
        const tables = await db.getAllAsync(statement);
        tables.forEach(({name}) => {
            actual_tables.push(name);
        });
    } catch (e) {
        console.error("Error while checking Database: ", e);
        console.warn("Statement: " + statement);
    }
    expected_tables.forEach(table => {
        if (!actual_tables.includes(table)) {
            result = false;
        }
    });
    return result;
}

export async function insert(table, object) {
    const db = database.connection;
    const statement = `
		INSERT INTO ${table} (${Object.keys(object).map(key=>`, ${key}`).join("").substring(2)})
		VALUES (${Object.keys(object).map(attribute=>`, "${object[attribute]}"`).join("").substring(2)}})
		`;
    try {
        const result = await db.runAsync(statement);
        return result.lastInsertRowId;
    } catch (e) {
        alert("Error while inserting into database");
        console.error("Error in SQL-Insert: ");
        console.warn("with Statement: ", statement);
    }
}

export async function query(table) {
    const array = [];
    const db = database.connection;

    const statement = `
        SELECT * FROM ${table}
    `;

    try {
        const response = await db.getAllAsync(statement);
        for (const row of response) {
            array.push(row);
        }
    } catch (e) {
        alert("Error while querying database");
        console.error("Error in SQL-Query: ");
        console.warn("with Statement: ", statement);
    }
    return array;
}

export async function update(table, id, object) {
    const db = database.connection;

    const statement = `
		UPDATE ${table} SET
		${Object.keys(object).map(attribute => `, ${attribute} = "${object[attribute]}"`).join(" ").substring(2)}
		WHERE
		id = ${id}
	`;
    try {
        await db.execAsync(statement);
    } catch (e) {
        alert("Error while updating database");
        console.error("Error in SQL-Update: ");
        console.warn("with Statement: ", statement);
    }
}

export async function remove(table, id) {
    const db = database.connection;
    const statement = `
		DELETE FROM ${table}
		WHERE
		id = ${id}
		`;
    try {
        await db.execAsync(statement);
    } catch (e) {
        alert("Error while deleting from database");
        console.error("Error in SQL-Delete: ");
        console.warn("with Statement: ", statement);
    }
}

export async function insertStartData() {
    await insert("fach", {name: "Erstes Fach"});
    await insert("note", {titel: "Test 1", wert: 6, gewichtung: 1, fach_id: 1});
}