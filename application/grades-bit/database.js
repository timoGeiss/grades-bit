import * as SQLite from "expo-sqlite";
import {database} from "./constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function createConnection() {
    if (!(database && database.connection && database.connection.databaseName)) {
        // database.id = JSON.parse(await AsyncStorage.getItem(lastBoardIdKey));
        try {
            database.connection = await SQLite.openDatabaseAsync("los PINGPONG");
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
			CREATE TABLE IF NOT EXISTS "grade" (
				"id" INTEGER NOT NULL UNIQUE,
				"title" TEXT NOT NULL,
                "value" DOUBLE NOT NULL,
                "weight" DOUBLE NOT NULL,
				PRIMARY KEY("id" AUTOINCREMENT)
			);
						
			CREATE TABLE IF NOT EXISTS "todo" (
				"id" INTEGER NOT NULL UNIQUE,
				"title" TEXT NOT NULL,
				"description" TEXT NOT NULL,
				"is_prioritised" BOOLEAN NOT NULL,
				"board_id" INTEGER,
				"state_id" INTEGER NOT NULL,
				"category_id" INTEGER NOT NULL,
				FOREIGN KEY("board_id") REFERENCES board(id),
				FOREIGN KEY("state_id") REFERENCES state(id),
				FOREIGN KEY("category_id") REFERENCES category(id),
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
    const expected_tables = ["board", "state", "category", "todo"];
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
		INSERT INTO ${table} (${Object.keys(object).map(key=>`, ${key}`).join("").substring(2)} ${table==="todo"?", board_id":""})
		VALUES (${Object.keys(object).map(attribute=>`, "${object[attribute]}"`).join("").substring(2)} ${table==="todo"?", " + database.id:""})
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

export async function query(table, where, filter) {
    const array = [];
    const db = database.connection;

    function equationBuilder(attribute, value, isExact) {
        return `${isExact ? `AND` : `OR`} ${attribute} ${isExact ? `= "${value}"` : `LIKE "%${value}%"`}`;

    }

    if (!where) {
        where = {};
    }
    if (!filter) {
        filter = {};

    }
    const statement = `
        SELECT * FROM ${table}
        ${table === "todo" || Object.keys(where).length > 0 || Object.keys(filter).length > 0 ? `WHERE` : ""}
        ${table === "todo" ? "board_id = " + database.id + " " + (
        Object.keys(where).length > 0 || Object.keys(filter).length > 0 ? "AND " : ""
    ): " "}
        ${Object.keys(where).length > 0 ? `(${Object.keys(where).map(attribute => equationBuilder(attribute, where[attribute], true)).join(" ").substring(4)})`:``}
        ${Object.keys(filter).length > 0 && Object.keys(where).length > 0 ? `AND`:``}
        ${Object.keys(filter).length > 0 ? `(${Object.keys(filter).map(attribute => equationBuilder(attribute, filter[attribute], false)).join(" ").substring(3)})`:``}
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

export async function update(table, id, object, idType) {
    const db = database.connection;

    const statement = `
		UPDATE ${table} SET
		${Object.keys(object).map(attribute => `, ${attribute} = "${object[attribute]}"`).join(" ").substring(2)}
		WHERE
		${idType ? idType : "id"} = ${id}
	`;
    try {
        await db.execAsync(statement);
    } catch (e) {
        alert("Error while updating database");
        console.error("Error in SQL-Update: ");
        console.warn("with Statement: ", statement);
    }
}

export async function remove(table, where) {
    if (!where) {
        return;
    }

    const db = database.connection;
    const statement = `
		DELETE FROM ${table}
		WHERE
		${Object.keys(where).map(attribute => `AND ${attribute} = "${where[attribute]}"`).join(" ").substring(4)}
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
    await AsyncStorage.setItem(lastBoardIdKey, "1");
    database.id = 1;
    await insert("board", {name: "First Board"});

    await insert("state", {name: "TODO"});
    await insert("state", {name: "IN PROGRESS"});
    await insert("state", {name: "DONE"});

    await insert("category", {name: "None", color: "#000000", weight: 1});
    await insert("category", {name: "Blue", color: "#0000ff", weight: 2});
    await insert("category", {name: "Red", color: "#ff0000", weight: 3});

    await insert("todo", {
        title: "Click Me",
        description: "This is my Description!",
        is_prioritised: true,
        state_id: 1,
        category_id: 1
    });

}