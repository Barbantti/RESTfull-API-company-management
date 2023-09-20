-- AlterTable
ALTER TABLE `Customer` ADD COLUMN `roleLevel` ENUM('customer', 'employee', 'developer') NULL DEFAULT 'customer';

-- AlterTable
ALTER TABLE `Employees` ADD COLUMN `roleLevel` ENUM('customer', 'employee', 'developer') NULL DEFAULT 'customer';
