import { getAlles, getFachById, getNotenByFachId, getSecretKey } from "../database";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";

export async function generatePDF(id) {
    try {
        const newId = parseInt(id);
        let htmlContent = `
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
                h1 { background-color: orange; color: white; text-align: center; padding: 15px; margin: 0; }
                h2 { color: #333; margin-top: 20px; text-align: center; }
                table { width: 80%; margin: 20px auto; border-collapse: collapse; }
                th, td { border: 1px solid #ddd; padding: 10px; text-align: center; }
                th { background-color: #f4a261; color: white; }
                tr:nth-child(even) { background-color: #f9f9f9; }
                .key { color: #f4a261; font-weight: bold; text-align: center; margin-top: 20px; }
                .fat { font-weight: bold;}
            </style>
        </head>
        <body>
        <h1>Deine Noten</h1>`;

        const data = await getAlles(newId);
        const groupedData = data.reduce((acc, curr) => {
            if (!acc[curr.fach_id]) {
                acc[curr.fach_id] = {
                    name: curr.name,
                    noten: []
                };
            }
            acc[curr.fach_id].noten.push({
                titel: curr.titel,
                wert: curr.wert,
                gewichtung: curr.gewichtung
            });
            return acc;
        }, {});

        Object.values(groupedData).forEach(fach => {
            htmlContent += `
                <h2>${fach.name}</h2>
                <table>
                    <tr>
                        <th>Titel</th>
                        <th>Wert</th>
                        <th>Gewichtung</th>
                    </tr>
                    ${fach.noten.map(note => `
                    <tr>
                        <td>${note.titel}</td>
                        <td>${note.wert}</td>
                        <td>${note.gewichtung}</td>
                    </tr>`).join('')}
                    <tr>
                        <td class="fat">Durchschnitt</td>
                        <td class="fat">${berechneNotenDurchschnitt(fach.noten)}</td>
                        <td>---</td>
                    </tr>
                </table>`;
        });

        htmlContent += `<p class="key">Key: ${await getSecretKey()}</p></body></html>`;

        const { uri } = await Print.printToFileAsync({ html: htmlContent });
        await Sharing.shareAsync(uri);
    } catch (error) {
        console.error("Fehler beim Generieren des PDFs:", error);
    }
}

function berechneNotenDurchschnitt(noten) {
    let summe = 0;

    for (const note of noten) {
        summe += note.wert * note.gewichtung;
    }

    if (summe === 0) {
        return "-"
    }

    let summeGewichtungen = 0
    for (const note of noten) {
        summeGewichtungen += note.gewichtung;
    }

    const durchschnitt = summe / summeGewichtungen

    return durchschnitt.toFixed(2);
}
