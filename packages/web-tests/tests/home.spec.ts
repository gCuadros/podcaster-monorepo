import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test.describe("New Search", () => {
  test("should allow me to search", async ({ page }) => {
    await page.getByText("The Joe Budden Podcast");

    // create a new todo locator
    const search = page.getByPlaceholder("Filter podcasts");

    // Type for autocomplete results.
    await search.fill("The Joe");

    // Make sure the list only has one todo item.
    await page.getByText("The Joe Budden Podcast");
  });
});
