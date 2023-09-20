/*
  Warnings:

  - You are about to drop the column `departmentsDepartmentId` on the `Employees` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Employees_departmentsDepartmentId_fkey` ON `Employees`;

-- AlterTable
ALTER TABLE `Employees` DROP COLUMN `departmentsDepartmentId`,
    ADD COLUMN `DepartmentId` VARCHAR(191) NULL;
