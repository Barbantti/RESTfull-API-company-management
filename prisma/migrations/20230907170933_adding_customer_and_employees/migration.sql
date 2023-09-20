-- CreateTable
CREATE TABLE `Customer` (
    `customerId` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(75) NOT NULL,
    `lastName` VARCHAR(75) NOT NULL,
    `birthDate` VARCHAR(75) NOT NULL,
    `email` VARCHAR(75) NOT NULL,
    `phone` VARCHAR(75) NOT NULL,
    `address` VARCHAR(75) NOT NULL,
    `password` VARCHAR(75) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Customer_email_key`(`email`),
    PRIMARY KEY (`customerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employees` (
    `employeeId` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(75) NOT NULL,
    `lastName` VARCHAR(75) NOT NULL,
    `birthDate` VARCHAR(75) NOT NULL,
    `hireDate` VARCHAR(75) NOT NULL,
    `email` VARCHAR(75) NOT NULL,
    `phone` VARCHAR(75) NOT NULL,
    `address` VARCHAR(75) NOT NULL,
    `wage` VARCHAR(75) NOT NULL,
    `role` VARCHAR(75) NOT NULL,
    `positionTitle` VARCHAR(75) NOT NULL,
    `password` VARCHAR(75) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Employees_email_key`(`email`),
    PRIMARY KEY (`employeeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
