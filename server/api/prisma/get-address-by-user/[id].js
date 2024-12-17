import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;

  const address = await prisma.addresses.findFirst({
    where: {
      userId: Number(id),
    },
  });

  return address;
});
