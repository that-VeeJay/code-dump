"use server";

export async function create() {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  console.log(title, body);
}
