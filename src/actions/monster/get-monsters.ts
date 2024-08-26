"use server";

import prisma from "@/lib/prisma";

export const getMonsters = async () => {
  return await prisma.monster.findMany({
    select: {
      id: true,
      name: true,
      attack: true,
      defense: true,
      hp: true,
      speed: true,
      imageUrl: true,
    },
  });
};
