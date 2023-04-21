import { expect, type Page, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(
    "http://localhost:3000/podcast/1535809341/episode/1000609597323"
  );
});

test.describe("New Search", () => {
  test("should be in episode detail", async ({ page }) => {
    await page.getByText("by The Joe Budden Network");

    await page.getByText("Description");

    await page.getByText(`Episode 619 | "Hate to be Frank"`);
  });
});
