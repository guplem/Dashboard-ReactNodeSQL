/*
  Warnings:

  - You are about to drop the column `metricId` on the `Evaluation` table. All the data in the column will be lost.
  - You are about to drop the `Metric` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Evaluation` DROP FOREIGN KEY `Evaluation_metricId_fkey`;

-- AlterTable
ALTER TABLE `Evaluation` DROP COLUMN `metricId`,
    ADD COLUMN `accuracy` DECIMAL(65, 30) NULL,
    ADD COLUMN `helpfulness` DECIMAL(65, 30) NULL,
    ADD COLUMN `relevancy` DECIMAL(65, 30) NULL,
    ADD COLUMN `toxicity` DECIMAL(65, 30) NULL;

-- DropTable
DROP TABLE `Metric`;
