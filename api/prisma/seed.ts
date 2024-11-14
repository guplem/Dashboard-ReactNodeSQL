import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create sample posts
  await prisma.post.create({
    data: {
      title: 'First Post',
      content: 'This is the first post.',
    },
  });

  await prisma.post.create({
    data: {
      title: 'Second Post',
      content: 'This is the second post.',
    },
  });

  console.log('Seed data inserted!');
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
