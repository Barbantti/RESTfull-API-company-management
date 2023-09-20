/*
  Warnings:

  - The primary key for the `Budgets` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `budgetId` on the `Budgets` table. All the data in the column will be lost.
  - You are about to drop the column `customerCustomerId` on the `Budgets` table. All the data in the column will be lost.
  - The primary key for the `Customer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `customerId` on the `Customer` table. All the data in the column will be lost.
  - You are about to alter the column `birthDate` on the `Customer` table. The data in that column could be lost. The data in that column will be cast from `VarChar(75)` to `Date`.
  - The primary key for the `Departments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `administrativeSector` on the `Departments` table. All the data in the column will be lost.
  - You are about to drop the column `commercialSector` on the `Departments` table. All the data in the column will be lost.
  - You are about to drop the column `departmentId` on the `Departments` table. All the data in the column will be lost.
  - You are about to drop the column `financialSector` on the `Departments` table. All the data in the column will be lost.
  - You are about to drop the column `humanResources` on the `Departments` table. All the data in the column will be lost.
  - You are about to drop the column `management` on the `Departments` table. All the data in the column will be lost.
  - You are about to drop the column `operationalSector` on the `Departments` table. All the data in the column will be lost.
  - The primary key for the `Employees` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `employeeId` on the `Employees` table. All the data in the column will be lost.
  - You are about to alter the column `birthDate` on the `Employees` table. The data in that column could be lost. The data in that column will be cast from `VarChar(75)` to `Date`.
  - You are about to alter the column `hireDate` on the `Employees` table. The data in that column could be lost. The data in that column will be cast from `VarChar(75)` to `Date`.
  - The primary key for the `ServiceProvided` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `budgetsBudgetId` on the `ServiceProvided` table. All the data in the column will be lost.
  - You are about to drop the column `customerCustomerId` on the `ServiceProvided` table. All the data in the column will be lost.
  - You are about to drop the column `employeesEmployeeId` on the `ServiceProvided` table. All the data in the column will be lost.
  - You are about to drop the column `serviceProvidedId` on the `ServiceProvided` table. All the data in the column will be lost.
  - The required column `id` was added to the `Budgets` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `Customer` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `Departments` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `isActive` to the `Departments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Departments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Departments` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Employees` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `budgetId` to the `ServiceProvided` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerId` to the `ServiceProvided` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeId` to the `ServiceProvided` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `ServiceProvided` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE `Budgets` DROP FOREIGN KEY `Budgets_customerCustomerId_fkey`;

-- DropForeignKey
ALTER TABLE `Employees` DROP FOREIGN KEY `Employees_departmentsDepartmentId_fkey`;

-- DropForeignKey
ALTER TABLE `ServiceProvided` DROP FOREIGN KEY `ServiceProvided_budgetsBudgetId_fkey`;

-- DropForeignKey
ALTER TABLE `ServiceProvided` DROP FOREIGN KEY `ServiceProvided_customerCustomerId_fkey`;

-- DropForeignKey
ALTER TABLE `ServiceProvided` DROP FOREIGN KEY `ServiceProvided_employeesEmployeeId_fkey`;

-- AlterTable
ALTER TABLE `Budgets` DROP PRIMARY KEY,
    DROP COLUMN `budgetId`,
    DROP COLUMN `customerCustomerId`,
    ADD COLUMN `customerId` VARCHAR(191) NULL,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Customer` DROP PRIMARY KEY,
    DROP COLUMN `customerId`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    MODIFY `birthDate` DATE NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Departments` DROP PRIMARY KEY,
    DROP COLUMN `administrativeSector`,
    DROP COLUMN `commercialSector`,
    DROP COLUMN `departmentId`,
    DROP COLUMN `financialSector`,
    DROP COLUMN `humanResources`,
    DROP COLUMN `management`,
    DROP COLUMN `operationalSector`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD COLUMN `isActive` BOOLEAN NOT NULL,
    ADD COLUMN `name` ENUM('management', 'humanResources', 'financialSector', 'commercialSector', 'operationalSector', 'administrativeSector', 'other') NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Employees` DROP PRIMARY KEY,
    DROP COLUMN `employeeId`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    MODIFY `birthDate` DATE NOT NULL,
    MODIFY `hireDate` DATE NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `ServiceProvided` DROP PRIMARY KEY,
    DROP COLUMN `budgetsBudgetId`,
    DROP COLUMN `customerCustomerId`,
    DROP COLUMN `employeesEmployeeId`,
    DROP COLUMN `serviceProvidedId`,
    ADD COLUMN `budgetId` VARCHAR(191) NOT NULL,
    ADD COLUMN `customerId` VARCHAR(191) NOT NULL,
    ADD COLUMN `employeeId` VARCHAR(191) NOT NULL,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `DeptEmployee` (
    `guid_deptEmp` VARCHAR(191) NOT NULL,
    `employeeId` VARCHAR(191) NOT NULL,
    `deptId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`guid_deptEmp`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DeptEmployee` ADD CONSTRAINT `DeptEmployee_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DeptEmployee` ADD CONSTRAINT `DeptEmployee_deptId_fkey` FOREIGN KEY (`deptId`) REFERENCES `Departments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Budgets` ADD CONSTRAINT `Budgets_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceProvided` ADD CONSTRAINT `ServiceProvided_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceProvided` ADD CONSTRAINT `ServiceProvided_budgetId_fkey` FOREIGN KEY (`budgetId`) REFERENCES `Budgets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceProvided` ADD CONSTRAINT `ServiceProvided_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
