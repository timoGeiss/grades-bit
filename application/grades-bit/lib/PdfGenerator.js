import {getAlles, getFachById, getNotenByFachId} from "../database";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";

export async function generatePDF(id) {
    const newId = parseInt(id)
    let htmlContent = `<h1>Deine Noten</h1>`;

    if (newId !== 0) {
        const fach = await getFachById(newId)
        const noten = await getNotenByFachId(newId);
        htmlContent += `
            <h2>${fach.name}</h2>
            <ul>
                ${noten.map(note => `<li>${note.titel}: ${note.wert} Gewichtung: ${note.gewichtung}</li>`).join('')}
            </ul>
        `;
    } else {
        const data = await getAlles()
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
      <ul>
        ${fach.noten.map(note => `<li>${note.titel}: ${note.wert} Gewichtung: ${note.gewichtung}</li>`).join('')}
      </ul>
    `;
        });
    }

    const { uri } = await Print.printToFileAsync({
        html: htmlContent,
    });

    await console.log("PDF generated at:", uri);
    await Sharing.shareAsync(uri);
}