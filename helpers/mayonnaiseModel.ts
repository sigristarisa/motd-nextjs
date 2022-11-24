import prisma from "@prisma/client";
import { Mayonnaise } from "./types";
const dbClient = new prisma.PrismaClient();

export class Mayo {
  id: number;
  name: string;
  ingredient: string;
  portion: string;
  combination: object[];

  constructor(
    id: number,
    name: string,
    ingredient: string,
    portion: string,
    combination: object[]
  ) {
    this.id = id;
    this.name = name;
    this.ingredient = ingredient;
    this.portion = portion;
    this.combination = combination;
  }

  static async fromClient(json: Mayonnaise) {
    const { id } = json;
    return new Mayo(+id, "", "", "", []);
  }

  static fromDb(mayonnaise: Mayonnaise) {
    return new Mayo(
      mayonnaise.id,
      mayonnaise.name,
      mayonnaise.ingredient,
      mayonnaise.portion,
      mayonnaise.combination
    );
  }

  static async findById(id: number) {
    const foundMayonnaise: Mayonnaise | null =
      await dbClient.mayonnaise.findFirst({
        where: { id },
        include: {
          combination: {
            include: {
              dish: true,
            },
          },
        },
      });

    if (foundMayonnaise) {
      return Mayo.fromDb(foundMayonnaise);
    }
    return null;
  }
}
