-- AlterTable
ALTER TABLE `Employees` ADD COLUMN `departmentsDepartmentId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Departments` (
    `departmentId` VARCHAR(191) NOT NULL,
    `management` VARCHAR(75) NOT NULL,
    `humanResources` VARCHAR(75) NOT NULL,
    `financialSector` VARCHAR(75) NOT NULL,
    `commercialSector` VARCHAR(75) NOT NULL,
    `operationalSector` VARCHAR(75) NOT NULL,
    `administrativeSector` VARCHAR(75) NOT NULL,

    PRIMARY KEY (`departmentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Budgets` (
    `budgetId` VARCHAR(191) NOT NULL,
    `servicePrice` VARCHAR(75) NOT NULL,
    `serviceDescription` VARCHAR(75) NOT NULL,
    `serviceStatus` ENUM('notRequested', 'requested', 'approved', 'recused', 'inProduction', 'finished') NULL DEFAULT 'notRequested',
    `paymentStatus` ENUM('notPaid', 'pending', 'denied', 'paid') NULL DEFAULT 'notPaid',
    `customerCustomerId` VARCHAR(191) NULL,

    PRIMARY KEY (`budgetId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceProvided` (
    `serviceProvidedId` VARCHAR(191) NOT NULL,
    `serviceStatus` ENUM('notRequested', 'requested', 'approved', 'recused', 'inProduction', 'finished') NOT NULL,
    `paymentStatus` ENUM('notPaid', 'pending', 'denied', 'paid') NOT NULL,
    `customerCustomerId` VARCHAR(191) NOT NULL,
    `budgetsBudgetId` VARCHAR(191) NOT NULL,
    `employeesEmployeeId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`serviceProvidedId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Employees` ADD CONSTRAINT `Employees_departmentsDepartmentId_fkey` FOREIGN KEY (`departmentsDepartmentId`) REFERENCES `Departments`(`departmentId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Budgets` ADD CONSTRAINT `Budgets_customerCustomerId_fkey` FOREIGN KEY (`customerCustomerId`) REFERENCES `Customer`(`customerId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceProvided` ADD CONSTRAINT `ServiceProvided_customerCustomerId_fkey` FOREIGN KEY (`customerCustomerId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceProvided` ADD CONSTRAINT `ServiceProvided_budgetsBudgetId_fkey` FOREIGN KEY (`budgetsBudgetId`) REFERENCES `Budgets`(`budgetId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceProvided` ADD CONSTRAINT `ServiceProvided_employeesEmployeeId_fkey` FOREIGN KEY (`employeesEmployeeId`) REFERENCES `Employees`(`employeeId`) ON DELETE RESTRICT ON UPDATE CASCADE;
