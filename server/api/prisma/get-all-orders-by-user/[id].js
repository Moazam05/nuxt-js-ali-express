import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const id = event.context.params.userId;

  const orders = await prisma.orders.findMany({
    where: {
      userId: Number(id),
    },
    orderBy: {
      id: "desc",
    },
    include: {
      orderItem: {
        include: {
          product: true,
        },
      },
    },
  });

  return orders;
});
