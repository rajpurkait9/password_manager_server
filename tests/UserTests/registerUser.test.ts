import { describe, test, expect } from "@jest/globals";

describe("registerUser module", () => {
  test("create user", async () => {
    const response = await fetch("http://localhost:9000/api/v1/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "test",
        email: "rajpurkait9@gmail.com",
        password: "test",
      }),
    });
    expect(response.status).toBe(201);
  });
});
