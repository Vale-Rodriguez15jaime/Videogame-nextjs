"use server";

import { Monster } from "@/interfaces/monster.interface";
import { Players } from "@/interfaces/players.interface";
import prisma from "@/lib/prisma";

export const startBattle = async (players: Players) => {
  const { monster1Id, monster2Id } = players;
  if (!monster1Id || !monster2Id) {
    return;
  }

  const monster1 = await prisma.monster.findFirstOrThrow({
    where: {
      id: monster1Id,
    },
  });
  const monster2 = await prisma.monster.findFirstOrThrow({
    where: {
      id: monster2Id,
    },
  });

  let firstAttack = monster1.speed > monster2.speed ? monster1 : monster2;
  let secondAttack = monster1.speed > monster2.speed ? monster2 : monster1;

  if (monster1.speed === monster2.speed) {
    firstAttack = monster1.attack > monster2.attack ? monster1 : monster2;
    secondAttack = monster1.attack > monster2.attack ? monster2 : monster1;
  }

  let winner = null;

  do {
    secondAttack.hp = calcDamage(firstAttack, secondAttack);
    firstAttack.hp = calcDamage(secondAttack, firstAttack);

    if (secondAttack.hp <= 0) {
      winner = firstAttack;
    } else if (firstAttack.hp <= 0) {
      winner = secondAttack;
    }
  } while (!winner);

  const battle = await prisma.battle.create({
    data: {
      monster1Id,
      monster2Id,
      winnerId: winner.id,
    },
    select: {
      winner: {
        select: {
          id: true,
          name: true,
          attack: true,
          defense: true,
          hp: true,
          speed: true,
          imageUrl: true,
        },
      },
    },
  });

  return battle;
};

const calcDamage = (firstAttack: Monster, secondAttack: Monster) => {
  const damage = firstAttack.attack - secondAttack.defense;
  const newHp = secondAttack.hp - (damage > 0 ? damage : 1);
  return newHp;
};
