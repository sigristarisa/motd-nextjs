import { rawMayonnaise } from "./rawMayonnaise";
import { rawDishes } from "./rawDishes";
import { rawCombinations } from "./rawCombinations";
import prisma from "@prisma/client";
import { MayonnaiseSeed, DishSeed, CombinationSeed } from "../../helpers/types";
const dbClient = new prisma.PrismaClient();

const seed = async (): Promise<void> => {
  await createMayonaisseData();
  await createDishData();
  await createCombinationData();
  process.exit(0);
};

const createMayonaisseData = async (): Promise<MayonnaiseSeed[]> => {
  const mayonnaiseArr = [];

  for (const mayonnaise of rawMayonnaise) {
    const createdMayonnaise = await dbClient.mayonnaise.create({
      data: mayonnaise,
    });
    mayonnaiseArr.push(createdMayonnaise);
  }

  return mayonnaiseArr;
};

const createDishData = async (): Promise<DishSeed[]> => {
  const dishArr = [];

  for (const dish of rawDishes) {
    const createdDish = await dbClient.dish.create({
      data: dish,
    });
    dishArr.push(createdDish);
  }
  return dishArr;
};

const createCombinationData = async (): Promise<CombinationSeed[]> => {
  const combinationArr = [];

  for (const combination of rawCombinations) {
    const createdCombination = await dbClient.combination.create({
      data: {
        mayonnaise: {
          connect: { id: combination.mayonnaiseId },
        },
        dish: {
          connect: { id: combination.dishId },
        },
      },
    });
    combinationArr.push(createdCombination);
  }
  return combinationArr;
};

seed()
  .catch(async (e) => {
    console.error(e);
  })
  .then(() => process.exit(1));
