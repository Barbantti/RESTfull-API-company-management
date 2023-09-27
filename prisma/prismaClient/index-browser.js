
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.2.0
 * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
 */
Prisma.prismaVersion = {
  client: "5.2.0",
  engine: "61e140623197a131c2a6189271ffee05a7aa9a59"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CustomerScalarFieldEnum = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  birthDate: 'birthDate',
  email: 'email',
  phone: 'phone',
  address: 'address',
  roleLevel: 'roleLevel',
  password: 'password',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EmployeesScalarFieldEnum = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  birthDate: 'birthDate',
  hireDate: 'hireDate',
  email: 'email',
  phone: 'phone',
  address: 'address',
  wage: 'wage',
  role: 'role',
  roleLevel: 'roleLevel',
  positionTitle: 'positionTitle',
  password: 'password',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  department: 'department'
};

exports.Prisma.DepartmentsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DeptEmployeeScalarFieldEnum = {
  guid_deptEmp: 'guid_deptEmp',
  employeeId: 'employeeId',
  deptId: 'deptId'
};

exports.Prisma.BudgetsScalarFieldEnum = {
  id: 'id',
  servicePrice: 'servicePrice',
  serviceDescription: 'serviceDescription',
  serviceStatus: 'serviceStatus',
  paymentStatus: 'paymentStatus',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  customerId: 'customerId'
};

exports.Prisma.ServiceProvidedScalarFieldEnum = {
  id: 'id',
  serviceStatus: 'serviceStatus',
  paymentStatus: 'paymentStatus',
  customerId: 'customerId',
  budgetId: 'budgetId',
  employeeId: 'employeeId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.RoleLevel = exports.$Enums.RoleLevel = {
  customer: 'customer',
  employee: 'employee',
  developer: 'developer'
};

exports.DeptAreas = exports.$Enums.DeptAreas = {
  management: 'management',
  humanResources: 'humanResources',
  financialSector: 'financialSector',
  commercialSector: 'commercialSector',
  operationalSector: 'operationalSector',
  administrativeSector: 'administrativeSector',
  other: 'other'
};

exports.ServiceStatus = exports.$Enums.ServiceStatus = {
  notRequested: 'notRequested',
  requested: 'requested',
  approved: 'approved',
  recused: 'recused',
  inProduction: 'inProduction',
  finished: 'finished'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  notPaid: 'notPaid',
  pending: 'pending',
  denied: 'denied',
  paid: 'paid'
};

exports.Prisma.ModelName = {
  Customer: 'Customer',
  Employees: 'Employees',
  Departments: 'Departments',
  DeptEmployee: 'DeptEmployee',
  Budgets: 'Budgets',
  ServiceProvided: 'ServiceProvided'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
