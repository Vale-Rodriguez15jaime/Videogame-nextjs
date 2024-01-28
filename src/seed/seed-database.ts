import prisma from "../lib/prisma";
import { initialData } from "./seed";

async function main() {
  await prisma.monster.deleteMany();

  const { monsters } = initialData;

  await prisma.monster.createMany({ data: monsters });
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
