import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;

  const product = await prisma.products.findFirst({
    where: {
      id: Number(id),
    },
  });

  return product;
});
