// Interfaces

import {
  DeptAreas,
  DeptEmployee,
  PaymentStatus,
  RoleLevel,
  ServiceStatus,
} from 'prisma/prismaClient';

export interface ICustomer {
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  employees: IEmployees[];
  departments: IDepartments[];
  customerBudgets: ICustomerBudgets[];
}

export interface ICustomerLogin {
  email: string;
  password: string;
}

export interface IEmployees {
  firstName: string;
  lastName: string;
  birthDate: string;
  hireDate: string;
  email: string;
  phone: string;
  address: string;
  wage: string;
  role: string;
  roleLevel: RoleLevel;
  positionTitle: string;
  password: string;
  department: string;
}

export interface IDepartments {
  name: DeptAreas;
  isActive: boolean;
  employees: DeptEmployee[];
}

export interface ICustomerBudgets {
  servicePrice: string;
  serviceDescription: string;
  service: ServiceStatus;
  payment: PaymentStatus;
}
