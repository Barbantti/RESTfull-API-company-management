// DTO to budget data

import {
  Budgets,
  DeptEmployee,
  PaymentStatus,
  ServiceProvided,
  ServiceStatus,
} from 'prisma/prismaClient';

export class NewBudgetDTO {
  servicePrice: string;
  serviceDescription: string;
  customerId: string;
  budgetId: string;
  employeeId: string;
  serviceStatus: ServiceStatus;
  paymentStatus: PaymentStatus;
}
