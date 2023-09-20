/*
  Warnings:

  - You are about to drop the column `DepartmentId` on the `Employees` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Employees` DROP COLUMN `DepartmentId`,
    ADD COLUMN `Department` VARCHAR(191) NULL;
