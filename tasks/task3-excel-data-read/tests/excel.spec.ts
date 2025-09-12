import { test, expect } from "@playwright/test";
import { readExcel } from "../utils/excelUtils";

test("Excel data driven test", async () => {
  const excelData = readExcel();
  if (!excelData) {
    test.skip(true, "No Excel file provided in input.json");
    return;
  }
  for (const row of excelData) {
    console.log("Row Data:", row);
    expect(row.username).not.toBeNull();
    expect(row.password).not.toBeNull();
  }
});
