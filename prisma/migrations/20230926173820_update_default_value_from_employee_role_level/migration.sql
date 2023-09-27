-- AlterTable
ALTER TABLE `Employees` MODIFY `roleLevel` ENUM('customer', 'employee', 'developer') NULL DEFAULT 'employee';
