import path from 'path';
import { readExcelFile, TestRecord } from './ExcelHelper';

export function loadTestData(): TestRecord[] {
    const filepath = path.resolve(process.cwd(), 'test_data', 'qa', 'Test_Data1.xlsx');
    return readExcelFile(filepath);
}