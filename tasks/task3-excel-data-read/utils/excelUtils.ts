import * as XLSX from "xlsx";
import * as fs from "fs";
import * as path from "path";

export function readExcel(fileName?: string): any[] {
  if (!fileName) {
    throw new Error("❌ Excel file name not given");
  }
  const filePath = path.resolve(__dirname, "../data", fileName);
  if (!fs.existsSync(filePath)) {
    throw new Error(`❌ File not found: ${filePath}`);
  }
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(sheet);
}
