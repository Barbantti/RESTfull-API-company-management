
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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


  const path = require('path')

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/leonardo/Documentos/workspace/RESTfullAPI-nest-prisma/company-management/prisma/prismaClient",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "5.2.0",
  "engineVersion": "61e140623197a131c2a6189271ffee05a7aa9a59",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL3ByaXNtYUNsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAibXlzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIEN1c3RvbWVyIHsKICBpZCAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICBmaXJzdE5hbWUgICAgICAgU3RyaW5nICAgICAgICAgICAgQGRiLlZhckNoYXIoNzUpCiAgbGFzdE5hbWUgICAgICAgIFN0cmluZyAgICAgICAgICAgIEBkYi5WYXJDaGFyKDc1KQogIGJpcnRoRGF0ZSAgICAgICBEYXRlVGltZSAgICAgICAgICBAZGIuRGF0ZQogIGVtYWlsICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICBAdW5pcXVlIEBkYi5WYXJDaGFyKDc1KQogIHBob25lICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICBAZGIuVmFyQ2hhcig3NSkKICBhZGRyZXNzICAgICAgICAgU3RyaW5nICAgICAgICAgICAgQGRiLlZhckNoYXIoNzUpCiAgcm9sZUxldmVsICAgICAgIFJvbGVMZXZlbD8gICAgICAgIEBkZWZhdWx0KGN1c3RvbWVyKQogIHBhc3N3b3JkICAgICAgICBTdHJpbmcgICAgICAgICAgICBAZGIuVmFyQ2hhcig3NSkKICBjcmVhdGVkQXQgICAgICAgRGF0ZVRpbWUgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICAgICAgIERhdGVUaW1lICAgICAgICAgIEB1cGRhdGVkQXQKICBidWRnZXRzICAgICAgICAgQnVkZ2V0c1tdCiAgc2VydmljZVByb3ZpZGVkIFNlcnZpY2VQcm92aWRlZFtdCn0KCm1vZGVsIEVtcGxveWVlcyB7CiAgaWQgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgZmlyc3ROYW1lICAgICAgIFN0cmluZyAgICAgICAgICAgIEBkYi5WYXJDaGFyKDc1KQogIGxhc3ROYW1lICAgICAgICBTdHJpbmcgICAgICAgICAgICBAZGIuVmFyQ2hhcig3NSkKICBiaXJ0aERhdGUgICAgICAgRGF0ZVRpbWUgICAgICAgICAgQGRiLkRhdGUKICBoaXJlRGF0ZSAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgQGRiLkRhdGUKICBlbWFpbCAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgQHVuaXF1ZSBAZGIuVmFyQ2hhcig3NSkKICBwaG9uZSAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgQGRiLlZhckNoYXIoNzUpCiAgYWRkcmVzcyAgICAgICAgIFN0cmluZyAgICAgICAgICAgIEBkYi5WYXJDaGFyKDc1KQogIHdhZ2UgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICBAZGIuVmFyQ2hhcig3NSkKICByb2xlICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgQGRiLlZhckNoYXIoNzUpCiAgcm9sZUxldmVsICAgICAgIFJvbGVMZXZlbD8gICAgICAgIEBkZWZhdWx0KGVtcGxveWVlKQogIHBvc2l0aW9uVGl0bGUgICBTdHJpbmcgICAgICAgICAgICBAZGIuVmFyQ2hhcig3NSkKICBwYXNzd29yZCAgICAgICAgU3RyaW5nICAgICAgICAgICAgQGRiLlZhckNoYXIoNzUpCiAgY3JlYXRlZEF0ICAgICAgIERhdGVUaW1lICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCAgICAgICBEYXRlVGltZSAgICAgICAgICBAdXBkYXRlZEF0CiAgZGVwYXJ0bWVudCAgICAgIFN0cmluZz8gICAgICAgICAgIEBkZWZhdWx0KHV1aWQoKSkKICBzZXJ2aWNlUHJvdmlkZWQgU2VydmljZVByb3ZpZGVkW10KICBkZXBhcnRtZW50cyAgICAgRGVwdEVtcGxveWVlW10KfQoKZW51bSBSb2xlTGV2ZWwgewogIGN1c3RvbWVyCiAgZW1wbG95ZWUKICBkZXZlbG9wZXIKfQoKbW9kZWwgRGVwYXJ0bWVudHMgewogIGlkICAgICAgICBTdHJpbmcgICAgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKQogIG5hbWUgICAgICBEZXB0QXJlYXMKICBpc0FjdGl2ZSAgQm9vbGVhbgogIGNyZWF0ZWRBdCBEYXRlVGltZSAgICAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgRGF0ZVRpbWUgICAgICAgQHVwZGF0ZWRBdAogIGVtcGxveWVlcyBEZXB0RW1wbG95ZWVbXQp9Cgptb2RlbCBEZXB0RW1wbG95ZWUgewogIGd1aWRfZGVwdEVtcCBTdHJpbmcgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKQogIGVtcGxveWVlSWQgICBTdHJpbmcKICBkZXB0SWQgICAgICAgU3RyaW5nCiAgZW1wbG95ZWUgICAgIEVtcGxveWVlcyAgIEByZWxhdGlvbihmaWVsZHM6IFtlbXBsb3llZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBkZXBhcnRtZW50cyAgRGVwYXJ0bWVudHMgQHJlbGF0aW9uKGZpZWxkczogW2RlcHRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCn0KCmVudW0gRGVwdEFyZWFzIHsKICBtYW5hZ2VtZW50CiAgaHVtYW5SZXNvdXJjZXMKICBmaW5hbmNpYWxTZWN0b3IKICBjb21tZXJjaWFsU2VjdG9yCiAgb3BlcmF0aW9uYWxTZWN0b3IKICBhZG1pbmlzdHJhdGl2ZVNlY3RvcgogIG90aGVyCn0KCm1vZGVsIEJ1ZGdldHMgewogIGlkICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKQogIHNlcnZpY2VQcmljZSAgICAgICBTdHJpbmcgICAgICAgICAgICBAZGIuVmFyQ2hhcig3NSkKICBzZXJ2aWNlRGVzY3JpcHRpb24gU3RyaW5nICAgICAgICAgICAgQGRiLlZhckNoYXIoNzUpCiAgc2VydmljZVN0YXR1cyAgICAgIFNlcnZpY2VTdGF0dXM/ICAgIEBkZWZhdWx0KG5vdFJlcXVlc3RlZCkKICBwYXltZW50U3RhdHVzICAgICAgUGF5bWVudFN0YXR1cz8gICAgQGRlZmF1bHQobm90UGFpZCkKICBjcmVhdGVkQXQgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICAgICAgICAgIERhdGVUaW1lICAgICAgICAgIEB1cGRhdGVkQXQKICBzZXJ2aWNlc1Byb3ZpZGVkICAgU2VydmljZVByb3ZpZGVkW10KICBjdXN0b21lciAgICAgICAgICAgQ3VzdG9tZXI/ICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2N1c3RvbWVySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGN1c3RvbWVySWQgICAgICAgICBTdHJpbmc/Cn0KCm1vZGVsIFNlcnZpY2VQcm92aWRlZCB7CiAgaWQgICAgICAgICAgICBTdHJpbmcgICAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgY3VzdG9tZXIgICAgICBDdXN0b21lciAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtjdXN0b21lcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICBidWRnZXQgICAgICAgIEJ1ZGdldHMgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2J1ZGdldElkXSwgcmVmZXJlbmNlczogW2lkXSkKICBlbXBsb3llZSAgICAgIEVtcGxveWVlcyAgICAgQHJlbGF0aW9uKGZpZWxkczogW2VtcGxveWVlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHNlcnZpY2VTdGF0dXMgU2VydmljZVN0YXR1cwogIHBheW1lbnRTdGF0dXMgUGF5bWVudFN0YXR1cwogIGN1c3RvbWVySWQgICAgU3RyaW5nCiAgYnVkZ2V0SWQgICAgICBTdHJpbmcKICBlbXBsb3llZUlkICAgIFN0cmluZwp9CgplbnVtIFNlcnZpY2VTdGF0dXMgewogIG5vdFJlcXVlc3RlZAogIHJlcXVlc3RlZAogIGFwcHJvdmVkCiAgcmVjdXNlZAogIGluUHJvZHVjdGlvbgogIGZpbmlzaGVkCn0KCmVudW0gUGF5bWVudFN0YXR1cyB7CiAgbm90UGFpZAogIHBlbmRpbmcKICBkZW5pZWQKICBwYWlkCn0K",
  "inlineSchemaHash": "1dde7c70bc9a031067b9b2e6758dc11345533ca90815cebd075a224981e98098"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/prismaClient",
    "prismaClient",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Customer\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"birthDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roleLevel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"RoleLevel\",\"default\":\"customer\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"budgets\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Budgets\",\"relationName\":\"BudgetsToCustomer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serviceProvided\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ServiceProvided\",\"relationName\":\"CustomerToServiceProvided\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Employees\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"birthDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hireDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roleLevel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"RoleLevel\",\"default\":\"employee\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"positionTitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"department\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serviceProvided\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ServiceProvided\",\"relationName\":\"EmployeesToServiceProvided\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"departments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DeptEmployee\",\"relationName\":\"DeptEmployeeToEmployees\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Departments\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DeptAreas\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"employees\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DeptEmployee\",\"relationName\":\"DepartmentsToDeptEmployee\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DeptEmployee\":{\"dbName\":null,\"fields\":[{\"name\":\"guid_deptEmp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"employeeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deptId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"employee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Employees\",\"relationName\":\"DeptEmployeeToEmployees\",\"relationFromFields\":[\"employeeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"departments\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Departments\",\"relationName\":\"DepartmentsToDeptEmployee\",\"relationFromFields\":[\"deptId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Budgets\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"servicePrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serviceDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serviceStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ServiceStatus\",\"default\":\"notRequested\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PaymentStatus\",\"default\":\"notPaid\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"servicesProvided\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ServiceProvided\",\"relationName\":\"BudgetsToServiceProvided\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Customer\",\"relationName\":\"BudgetsToCustomer\",\"relationFromFields\":[\"customerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ServiceProvided\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Customer\",\"relationName\":\"CustomerToServiceProvided\",\"relationFromFields\":[\"customerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"budget\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Budgets\",\"relationName\":\"BudgetsToServiceProvided\",\"relationFromFields\":[\"budgetId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"employee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Employees\",\"relationName\":\"EmployeesToServiceProvided\",\"relationFromFields\":[\"employeeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serviceStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ServiceStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PaymentStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"budgetId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"employeeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"RoleLevel\":{\"values\":[{\"name\":\"customer\",\"dbName\":null},{\"name\":\"employee\",\"dbName\":null},{\"name\":\"developer\",\"dbName\":null}],\"dbName\":null},\"DeptAreas\":{\"values\":[{\"name\":\"management\",\"dbName\":null},{\"name\":\"humanResources\",\"dbName\":null},{\"name\":\"financialSector\",\"dbName\":null},{\"name\":\"commercialSector\",\"dbName\":null},{\"name\":\"operationalSector\",\"dbName\":null},{\"name\":\"administrativeSector\",\"dbName\":null},{\"name\":\"other\",\"dbName\":null}],\"dbName\":null},\"ServiceStatus\":{\"values\":[{\"name\":\"notRequested\",\"dbName\":null},{\"name\":\"requested\",\"dbName\":null},{\"name\":\"approved\",\"dbName\":null},{\"name\":\"recused\",\"dbName\":null},{\"name\":\"inProduction\",\"dbName\":null},{\"name\":\"finished\",\"dbName\":null}],\"dbName\":null},\"PaymentStatus\":{\"values\":[{\"name\":\"notPaid\",\"dbName\":null},{\"name\":\"pending\",\"dbName\":null},{\"name\":\"denied\",\"dbName\":null},{\"name\":\"paid\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)



const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process.cwd(), "prisma/prismaClient/libquery_engine-debian-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/prismaClient/schema.prisma")
