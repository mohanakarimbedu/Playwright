import * as EXCEL from 'xlsx';
import fs from 'fs';

export interface TestRecord {
    fromCity: string;
    toCity: string;
}

export function readExcelFile(filePath: string): TestRecord[] {
    const file = fs.readFileSync(filePath);
    const workbook = EXCEL.read(file);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rawdata: any[] = EXCEL.utils.sheet_to_json(sheet, { header: 1 });

    return rawdata
        .slice(1)                                   // header row వదిలేయి
        .filter((row: any[]) => row[0] && row[1])   // ఖాళీ rows తీసేయి
        .map((row: any[]) => ({
            fromCity: String(row[0]).trim(),
            toCity: String(row[1]).trim(),
        }));
}