import * as XLSX from "xlsx";
import * as fs from "fs";
import * as path from "path";

function getInputConfig() {
  const inputPath = path.resolve(__dirname, "../../../input.json");
  const rawData = fs.readFileSync(inputPath, "utf-8");
  return JSON.parse(rawData);
}
export function readExcel(): any[] | null {
  const config = getInputConfig();
  const fileName = config.testDataFile;
  if (!fileName) {
    console.log("No Excel file provided → Skipping Excel read.");
    return null;
  }
  const filePath = path.resolve(__dirname, "../data", fileName);
  if (!fs.existsSync(filePath)) {
    console.log("⚠️ File not found. Creating sample Excel...");
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    const sampleData = [
      { username: "user1", password: "pass1" },
      { username: "user2", password: "pass2" }
    ];
    const worksheet = XLSX.utils.json_to_sheet(sampleData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, filePath);
  }
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(sheet);
}

