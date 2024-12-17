import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const id = event.context.params.id;

  const address = await prisma.addresses.update({
    where: {
      id: Number(id),
    },
    data: {
      name: body.name,
      address: body.address,
      zipCode: body.zipCode,
      city: body.city,
      country: body.country,
    },
  });

  return address;
});
