import * as SQLite from 'expo-sqlite';

export async function main() {
    //Creates local SQLite database named dbFreelanceTracker
    const db = await SQLite.openDatabaseAsync('gradedb5');

    //Creates all tables and relations needed for our Project.
    await db.execAsync(`	
    PRAGMA foreign_keys = ON;
    
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
			
			CREATE TABLE IF NOT EXISTS "key" (
			    value TEXT NOT NULL
			);
	`);

    let result;
    const selectKeyStatement = await db.prepareAsync('SELECT * FROM key');
    try {
        result = await db.getAllAsync("SELECT * FROM key")
    } catch (e) {
        console.log(e)
    } finally {
        await selectKeyStatement.finalizeAsync()
    }

    if (result.length < 1) {
        const value = Math.random().toString(36);
        const insertProjectStatement = await db.prepareAsync(
            'INSERT INTO key (value) VALUES ($value)'
        );
        try {
            await insertProjectStatement.executeAsync({
                $value: value
            });
        } finally {
            await insertProjectStatement.finalizeAsync();
        }
    }

    return db;
}

export async function getSecretKey() {
    const db = await main();
    let result;
    const selectProjectsStatement = await db.prepareAsync('SELECT * FROM key');
    try {
        result = await db.getAllAsync("SELECT * FROM key");
    } catch (e) {
        console.log(e);
    } finally {
        await selectProjectsStatement.finalizeAsync();
    }
    return result[0].value;
}

export async function getAllFaecher() {
    const db = await main();
    let result;
    const selectProjectsStatement = await db.prepareAsync('SELECT * FROM fach');
    try {
        result = await db.getAllAsync("SELECT * FROM fach");
    } catch (e) {
        console.log(e);
    } finally {
        await selectProjectsStatement.finalizeAsync();
    }
    return result;
}

export async function getFachById(id) {
    const db = await main();
    let result;
    const selectProjectsStatement = await db.prepareAsync(`SELECT * FROM fach WHERE id = ${id}`);
    try {
        result = await db.getAllAsync(`SELECT * FROM fach WHERE id = ${id}`);
    } catch (e) {
        console.log(e);
    } finally {
        await selectProjectsStatement.finalizeAsync();
    }
    return result[0];
}

export async function getNotenByFachId(id) {
    const db = await main();
    let result;
    const selectTasksByProjectStatement = await db.prepareAsync(`SELECT * FROM note WHERE fach_id = ${id}`);

    try {
        result = await db.getAllAsync(`SELECT * FROM note WHERE fach_id = ${id}`);
    } catch (e) {
        console.log(e);
    } finally {
        await selectTasksByProjectStatement.finalizeAsync();
    }
    return result;
}

export async function getNoteById(id) {
    const db = await main();
    let result;
    const selectProjectsStatement = await db.prepareAsync(`SELECT * FROM note WHERE id = ${id}`);

    try {
        result = await db.getAllAsync(`SELECT * FROM note WHERE id = ${id}`);
    } catch (e) {
        console.log(e);
    } finally {
        await selectProjectsStatement.finalizeAsync();
    }
    return result[0];
}

export async function getAllNoten() {
    const db = await main();
    let result;
    const selectTasksByProjectStatement = await db.prepareAsync(`SELECT * FROM note`);

    try {
        result = await db.getAllAsync(`SELECT * FROM note`);
    } catch (e) {
        console.log(e);
    } finally {
        await selectTasksByProjectStatement.finalizeAsync();
    }
    return result;
}

export async function insertIntoFach(name) {
    const db = await main();
    let result;
    const insertProjectStatement = await db.prepareAsync(
        'INSERT INTO fach (name) VALUES ($name)'
    );
    try {
        result = await insertProjectStatement.executeAsync({
            $name: name
        });
    } finally {
        await insertProjectStatement.finalizeAsync();
    }
    return result;
}

export async function insertIntoNote(fach_id, titel, wert, gewichtung) {
    const noteMitPunkt = wert.toString().replace(",", ".");
    const gewichtungMitPunkt = gewichtung.toString().replace(",", ".");
    const db = await main();
    let result;
    const insertTaskStatement = await db.prepareAsync(
        'INSERT INTO note (fach_id, titel, wert, gewichtung) VALUES ($fach_id, $titel, $wert, $gewichtung)'
    );
    try {
        result = await insertTaskStatement.executeAsync({
            $fach_id: fach_id,
            $titel: titel,
            $wert: noteMitPunkt,
            $gewichtung: gewichtungMitPunkt,
        });
    } finally {
        await insertTaskStatement.finalizeAsync();
    }
    return result;
}

export async function updateFach(id, name) {
    const db = await main();
    let result;
    const insertProjectStatement = await db.prepareAsync(
        'UPDATE fach SET name = $name WHERE id = $id'
    );
    try {
        result = await insertProjectStatement.executeAsync({
            $name: name,
            $id: id
        });
    } finally {
        await insertProjectStatement.finalizeAsync();
    }
    return result;
}

export async function updateNote(id, titel, wert, gewichtung) {
    const noteMitPunkt = wert.toString().replace(",", ".");
    const gewichtungMitPunkt = gewichtung.toString().replace(",", ".");
    const db = await main();
    let result;
    const insertProjectStatement = await db.prepareAsync(
        'UPDATE note SET titel = $titel, wert = $wert, gewichtung = $gewichtung WHERE id = $id'
    );
    try {
        result = await insertProjectStatement.executeAsync({
            $id: id,
            $titel: titel,
            $wert: noteMitPunkt,
            $gewichtung: gewichtungMitPunkt,
        });
    } finally {
        await insertProjectStatement.finalizeAsync();
    }
    return result;
}

// !!!IMPORTANT!!! WHEN CALLING THIS FUNCTION ONLY USE `` STRINGS AND NOT ' ' or " " !!!
export async function removeFach(id) {
    const db = await main();
    let result;
    const deleteStatement = await db.prepareAsync(
        `DELETE FROM fach WHERE id = ${id}`
    );
    try {
        result = await deleteStatement.executeAsync({
            $id: id,
        })
    } catch (e) {
        console.log(e);
    } finally {
        await deleteStatement.finalizeAsync();
    }
    return result;
}

export async function removeNote(id) {
    const db = await main();
    let result;
    const deleteStatement = await db.prepareAsync(
        `DELETE FROM note WHERE id = ${id}`
    );
    try {
        result = await deleteStatement.executeAsync({
            $id: id,
        })
    } catch (e) {
        console.log(e);
    } finally {
        await deleteStatement.finalizeAsync();
    }
    return result;
}

export async function getAlles() {
    const db = await main();
    let result;
    const selectProjectsStatement = await db.prepareAsync('SELECT * FROM fach');
    try {
        result = await db.getAllAsync("SELECT * FROM fach JOIN note ON note.fach_id = fach.id");
    } catch (e) {
        console.log(e);
    } finally {
        await selectProjectsStatement.finalizeAsync();
    }
    return result;
}
