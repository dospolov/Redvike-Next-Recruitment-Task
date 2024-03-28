import { test, expect } from "@playwright/test"

test("should navigate to the pokemon page", async ({ page }) => {
  await page.goto("http://localhost:3000/")
  await page.click("text=bulbasaur")
  await expect(page).toHaveURL("http://localhost:3000/pokemon/bulbasaur")
  await expect(page.locator("h3")).toContainText("bulbasaur")
})
