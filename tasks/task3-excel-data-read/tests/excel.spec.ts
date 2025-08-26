import { test} from "@playwright/test";
import { readExcel } from "../utils/excelUtils";

test("Excel data driven test", async () => {
  const fileName = "testData.xlsx"; 
  const excelData = readExcel(fileName);
  for (const row of excelData) {
    console.log("Row Data:", row);
  }
});

