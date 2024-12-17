import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;

  const items = await prisma.items.findMany({
    take: 5, // Max rows

    where: {
      title: {
        contains: id,
        mode: "insensitive",
      },
    },
  });

  return items;
});
