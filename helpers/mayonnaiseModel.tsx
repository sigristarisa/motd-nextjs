import prisma from "@prisma/client";
import { Mayonnaise } from "./types";
const dbClient = new prisma.PrismaClient();

export default class Mayo {
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

  static fromClient(json: Mayonnaise) {
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

  static async findById(id: number): Promise<Mayonnaise | null> {
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

    return foundMayonnaise ? foundMayonnaise : null;
  }
}
