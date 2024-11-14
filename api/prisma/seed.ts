// This file is used to seed the database with initial data.
// https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const alicePost = await prisma.post.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      title: "Check out Prisma with Next.js",
      content: "https://www.prisma.io/nextjs",
    },
  });

  const bobPosts = await prisma.post.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,

      title: "Follow Prisma on Twitter",
      content: "https://twitter.com/prisma",
    },
  });

  const secondBobPost = await prisma.post.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      title: "Follow Nexus on Twitter",
      content: "https://twitter.com/nexusgql",
    },
  });

  console.log({ alicePost, bobPosts, secondBobPost });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error seeding data:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
