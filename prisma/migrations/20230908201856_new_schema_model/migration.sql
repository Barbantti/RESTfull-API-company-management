/*
  Warnings:

  - You are about to drop the column `Department` on the `Employees` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Employees` DROP COLUMN `Department`,
    ADD COLUMN `department` VARCHAR(191) NULL;
