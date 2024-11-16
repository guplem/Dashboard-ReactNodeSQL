// This file is used to seed the database with initial data.
// https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding

import { PrismaClient, ProjectType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Demo posts

  await prisma.post.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      title: "Check out Prisma with Next.js",
      content: "https://www.prisma.io/nextjs",
    },
  });

  await prisma.post.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,

      title: "Follow Prisma on Twitter",
      content: "https://twitter.com/prisma",
    },
  });

  await prisma.post.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      title: "Follow Nexus on Twitter",
      content: "https://twitter.com/nexusgql",
    },
  });

  // LLMs projects and evaluations

  await prisma.project.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: "customer help",
      type: ProjectType.Chatbot,
      conformityProgress: 0.9,
    },
  });

  await prisma.project.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: "TOS extractor",
      type: ProjectType.RAG,
      conformityProgress: 0.7,
    },
  });

  await prisma.project.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      name: "pdf2json",
      type: ProjectType.Converter,
      conformityProgress: 0.2,
    },
  });

  // Systems

  await prisma.system.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: "Mixtral-8x7B-finetuned",
    },
  });

  await prisma.system.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: "Mixtral-8x7B-prompt01",
    },
  });

  await prisma.system.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      name: "Mixtral-8x7B-prompt02",
    },
  });

  await prisma.system.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      name: "Llama3_RAG_ch200_th07",
    },
  });

  await prisma.system.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      name: "Llama3_RAG_ch250_th07",
    },
  });

  await prisma.system.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      name: "Mixtral_RAG_ch200_th08",
    },
  });

  await prisma.system.upsert({
    where: { id: 7 },
    update: {},
    create: {
      id: 7,
      name: "Mixtral_RAG_ch200_th07",
    },
  });

  await prisma.system.upsert({
    where: { id: 8 },
    update: {},
    create: {
      id: 8,
      name: "GPT4o-base",
    },
  });

  await prisma.system.upsert({
    where: { id: 9 },
    update: {},
    create: {
      id: 9,
      name: "llama-11b-vision-instruct-base",
    },
  });

  // Datasets

  await prisma.dataset.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: "QandA01",
    },
  });

  await prisma.dataset.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: "QandA02",
    },
  });

  await prisma.dataset.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      name: "TOS01",
    },
  });

  await prisma.dataset.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      name: "CustomerPetition01",
    },
  });

  // Evaluations

  await prisma.evaluation.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      projectId: 1,
      systemId: 1,
      datasetId: 1,
      accuracy: 0.9,
      relevancy: 0.8,
      helpfulness: 0.7,
      toxicity: 0.1,
      score: 0.8,
    },
  });

  await prisma.evaluation.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      projectId: 1,
      systemId: 2,
      datasetId: 1,
      accuracy: 0.8,
      relevancy: 0.7,
      helpfulness: 0.6,
      toxicity: 0.2,
      score: 0.7,
    },
  });

  await prisma.evaluation.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      projectId: 1,
      systemId: 3,
      datasetId: 1,
      accuracy: 0.9,
      relevancy: 0.7,
      helpfulness: 0.9,
      toxicity: 0.1,
      score: 0.8,
    },
  });

  await prisma.evaluation.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      projectId: 1,
      systemId: 3,
      datasetId: 2,
      accuracy: 0.9,
      relevancy: 0.8,
      helpfulness: 0.6,
      toxicity: 0.2,
      score: 0.8,
    },
  });

  await prisma.evaluation.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      projectId: 2,
      systemId: 4,
      datasetId: 3,
      accuracy: 0.9,
      relevancy: 0.8,
      helpfulness: 0.7,
      toxicity: 0.1,
      score: 0.8,
    },
  });

  await prisma.evaluation.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      projectId: 2,
      systemId: 5,
      datasetId: 3,
      accuracy: 0.8,
      relevancy: 0.7,
      helpfulness: 0.6,
      toxicity: 0.2,
      score: 0.7,
    },
  });

  await prisma.evaluation.upsert({
    where: { id: 7 },
    update: {},
    create: {
      id: 7,
      projectId: 2,
      systemId: 6,
      datasetId: 3,
      accuracy: 0.9,
      relevancy: 0.7,
      helpfulness: 0.9,
      toxicity: 0.1,
      score: 0.8,
    },
  });

  await prisma.evaluation.upsert({
    where: { id: 8 },
    update: {},
    create: {
      id: 8,
      projectId: 2,
      systemId: 7,
      datasetId: 3,
      accuracy: 0.9,
      relevancy: 0.8,
      helpfulness: 0.6,
      toxicity: 0.2,
      score: 0.8,
    },
  });

  await prisma.evaluation.upsert({
    where: { id: 9 },
    update: {},
    create: {
      id: 9,
      projectId: 3,
      systemId: 8,
      datasetId: 4,
      accuracy: 0.9,
      relevancy: 0.8,
      helpfulness: 0.7,
      toxicity: 0.1,
      score: 0.8,
    },
  });

  await prisma.evaluation.upsert({
    where: { id: 10 },
    update: {},
    create: {
      id: 10,
      projectId: 3,
      systemId: 9,
      datasetId: 4,
      accuracy: 0.8,
      relevancy: 0.7,
      helpfulness: 0.6,
      toxicity: 0.2,
      score: 0.7,
    },
  });
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
