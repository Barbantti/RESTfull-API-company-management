
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Employees
 * 
 */
export type Employees = $Result.DefaultSelection<Prisma.$EmployeesPayload>
/**
 * Model Departments
 * 
 */
export type Departments = $Result.DefaultSelection<Prisma.$DepartmentsPayload>
/**
 * Model DeptEmployee
 * 
 */
export type DeptEmployee = $Result.DefaultSelection<Prisma.$DeptEmployeePayload>
/**
 * Model Budgets
 * 
 */
export type Budgets = $Result.DefaultSelection<Prisma.$BudgetsPayload>
/**
 * Model ServiceProvided
 * 
 */
export type ServiceProvided = $Result.DefaultSelection<Prisma.$ServiceProvidedPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleLevel: {
  customer: 'customer',
  employee: 'employee',
  developer: 'developer'
};

export type RoleLevel = (typeof RoleLevel)[keyof typeof RoleLevel]


export const DeptAreas: {
  management: 'management',
  humanResources: 'humanResources',
  financialSector: 'financialSector',
  commercialSector: 'commercialSector',
  operationalSector: 'operationalSector',
  administrativeSector: 'administrativeSector',
  other: 'other'
};

export type DeptAreas = (typeof DeptAreas)[keyof typeof DeptAreas]


export const ServiceStatus: {
  notRequested: 'notRequested',
  requested: 'requested',
  approved: 'approved',
  recused: 'recused',
  inProduction: 'inProduction',
  finished: 'finished'
};

export type ServiceStatus = (typeof ServiceStatus)[keyof typeof ServiceStatus]


export const PaymentStatus: {
  notPaid: 'notPaid',
  pending: 'pending',
  denied: 'denied',
  paid: 'paid'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type RoleLevel = $Enums.RoleLevel

export const RoleLevel: typeof $Enums.RoleLevel

export type DeptAreas = $Enums.DeptAreas

export const DeptAreas: typeof $Enums.DeptAreas

export type ServiceStatus = $Enums.ServiceStatus

export const ServiceStatus: typeof $Enums.ServiceStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.employees`: Exposes CRUD operations for the **Employees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employees.findMany()
    * ```
    */
  get employees(): Prisma.EmployeesDelegate<ExtArgs>;

  /**
   * `prisma.departments`: Exposes CRUD operations for the **Departments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.departments.findMany()
    * ```
    */
  get departments(): Prisma.DepartmentsDelegate<ExtArgs>;

  /**
   * `prisma.deptEmployee`: Exposes CRUD operations for the **DeptEmployee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeptEmployees
    * const deptEmployees = await prisma.deptEmployee.findMany()
    * ```
    */
  get deptEmployee(): Prisma.DeptEmployeeDelegate<ExtArgs>;

  /**
   * `prisma.budgets`: Exposes CRUD operations for the **Budgets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Budgets
    * const budgets = await prisma.budgets.findMany()
    * ```
    */
  get budgets(): Prisma.BudgetsDelegate<ExtArgs>;

  /**
   * `prisma.serviceProvided`: Exposes CRUD operations for the **ServiceProvided** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceProvideds
    * const serviceProvideds = await prisma.serviceProvided.findMany()
    * ```
    */
  get serviceProvided(): Prisma.ServiceProvidedDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.2.0
   * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Customer: 'Customer',
    Employees: 'Employees',
    Departments: 'Departments',
    DeptEmployee: 'DeptEmployee',
    Budgets: 'Budgets',
    ServiceProvided: 'ServiceProvided'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'customer' | 'employees' | 'departments' | 'deptEmployee' | 'budgets' | 'serviceProvided'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>,
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Employees: {
        payload: Prisma.$EmployeesPayload<ExtArgs>
        fields: Prisma.EmployeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          findFirst: {
            args: Prisma.EmployeesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          findMany: {
            args: Prisma.EmployeesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>[]
          }
          create: {
            args: Prisma.EmployeesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          createMany: {
            args: Prisma.EmployeesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EmployeesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          update: {
            args: Prisma.EmployeesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          deleteMany: {
            args: Prisma.EmployeesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EmployeesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          aggregate: {
            args: Prisma.EmployeesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEmployees>
          }
          groupBy: {
            args: Prisma.EmployeesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EmployeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeesCountArgs<ExtArgs>,
            result: $Utils.Optional<EmployeesCountAggregateOutputType> | number
          }
        }
      }
      Departments: {
        payload: Prisma.$DepartmentsPayload<ExtArgs>
        fields: Prisma.DepartmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          findFirst: {
            args: Prisma.DepartmentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          findMany: {
            args: Prisma.DepartmentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>[]
          }
          create: {
            args: Prisma.DepartmentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          createMany: {
            args: Prisma.DepartmentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DepartmentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          update: {
            args: Prisma.DepartmentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DepartmentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          aggregate: {
            args: Prisma.DepartmentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDepartments>
          }
          groupBy: {
            args: Prisma.DepartmentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DepartmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentsCountArgs<ExtArgs>,
            result: $Utils.Optional<DepartmentsCountAggregateOutputType> | number
          }
        }
      }
      DeptEmployee: {
        payload: Prisma.$DeptEmployeePayload<ExtArgs>
        fields: Prisma.DeptEmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeptEmployeeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeptEmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeptEmployeeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeptEmployeePayload>
          }
          findFirst: {
            args: Prisma.DeptEmployeeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeptEmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeptEmployeeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeptEmployeePayload>
          }
          findMany: {
            args: Prisma.DeptEmployeeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeptEmployeePayload>[]
          }
          create: {
            args: Prisma.DeptEmployeeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeptEmployeePayload>
          }
          createMany: {
            args: Prisma.DeptEmployeeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DeptEmployeeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeptEmployeePayload>
          }
          update: {
            args: Prisma.DeptEmployeeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeptEmployeePayload>
          }
          deleteMany: {
            args: Prisma.DeptEmployeeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DeptEmployeeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DeptEmployeeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeptEmployeePayload>
          }
          aggregate: {
            args: Prisma.DeptEmployeeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDeptEmployee>
          }
          groupBy: {
            args: Prisma.DeptEmployeeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DeptEmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeptEmployeeCountArgs<ExtArgs>,
            result: $Utils.Optional<DeptEmployeeCountAggregateOutputType> | number
          }
        }
      }
      Budgets: {
        payload: Prisma.$BudgetsPayload<ExtArgs>
        fields: Prisma.BudgetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BudgetsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BudgetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BudgetsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BudgetsPayload>
          }
          findFirst: {
            args: Prisma.BudgetsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BudgetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BudgetsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BudgetsPayload>
          }
          findMany: {
            args: Prisma.BudgetsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BudgetsPayload>[]
          }
          create: {
            args: Prisma.BudgetsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BudgetsPayload>
          }
          createMany: {
            args: Prisma.BudgetsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BudgetsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BudgetsPayload>
          }
          update: {
            args: Prisma.BudgetsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BudgetsPayload>
          }
          deleteMany: {
            args: Prisma.BudgetsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BudgetsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BudgetsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BudgetsPayload>
          }
          aggregate: {
            args: Prisma.BudgetsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBudgets>
          }
          groupBy: {
            args: Prisma.BudgetsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BudgetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BudgetsCountArgs<ExtArgs>,
            result: $Utils.Optional<BudgetsCountAggregateOutputType> | number
          }
        }
      }
      ServiceProvided: {
        payload: Prisma.$ServiceProvidedPayload<ExtArgs>
        fields: Prisma.ServiceProvidedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceProvidedFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceProvidedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceProvidedFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceProvidedPayload>
          }
          findFirst: {
            args: Prisma.ServiceProvidedFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceProvidedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceProvidedFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceProvidedPayload>
          }
          findMany: {
            args: Prisma.ServiceProvidedFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceProvidedPayload>[]
          }
          create: {
            args: Prisma.ServiceProvidedCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceProvidedPayload>
          }
          createMany: {
            args: Prisma.ServiceProvidedCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ServiceProvidedDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceProvidedPayload>
          }
          update: {
            args: Prisma.ServiceProvidedUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceProvidedPayload>
          }
          deleteMany: {
            args: Prisma.ServiceProvidedDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceProvidedUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ServiceProvidedUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceProvidedPayload>
          }
          aggregate: {
            args: Prisma.ServiceProvidedAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateServiceProvided>
          }
          groupBy: {
            args: Prisma.ServiceProvidedGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ServiceProvidedGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceProvidedCountArgs<ExtArgs>,
            result: $Utils.Optional<ServiceProvidedCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    budgets: number
    serviceProvided: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    budgets?: boolean | CustomerCountOutputTypeCountBudgetsArgs
    serviceProvided?: boolean | CustomerCountOutputTypeCountServiceProvidedArgs
  }

  // Custom InputTypes

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountBudgetsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BudgetsWhereInput
  }


  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountServiceProvidedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ServiceProvidedWhereInput
  }



  /**
   * Count Type EmployeesCountOutputType
   */

  export type EmployeesCountOutputType = {
    serviceProvided: number
    departments: number
  }

  export type EmployeesCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    serviceProvided?: boolean | EmployeesCountOutputTypeCountServiceProvidedArgs
    departments?: boolean | EmployeesCountOutputTypeCountDepartmentsArgs
  }

  // Custom InputTypes

  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeesCountOutputType
     */
    select?: EmployeesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeCountServiceProvidedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ServiceProvidedWhereInput
  }


  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeCountDepartmentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DeptEmployeeWhereInput
  }



  /**
   * Count Type DepartmentsCountOutputType
   */

  export type DepartmentsCountOutputType = {
    employees: number
  }

  export type DepartmentsCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    employees?: boolean | DepartmentsCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes

  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentsCountOutputType
     */
    select?: DepartmentsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DeptEmployeeWhereInput
  }



  /**
   * Count Type BudgetsCountOutputType
   */

  export type BudgetsCountOutputType = {
    servicesProvided: number
  }

  export type BudgetsCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    servicesProvided?: boolean | BudgetsCountOutputTypeCountServicesProvidedArgs
  }

  // Custom InputTypes

  /**
   * BudgetsCountOutputType without action
   */
  export type BudgetsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetsCountOutputType
     */
    select?: BudgetsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BudgetsCountOutputType without action
   */
  export type BudgetsCountOutputTypeCountServicesProvidedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ServiceProvidedWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    birthDate: Date | null
    email: string | null
    phone: string | null
    address: string | null
    roleLevel: $Enums.RoleLevel | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    birthDate: Date | null
    email: string | null
    phone: string | null
    address: string | null
    roleLevel: $Enums.RoleLevel | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    birthDate: number
    email: number
    phone: number
    address: number
    roleLevel: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    email?: true
    phone?: true
    address?: true
    roleLevel?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    email?: true
    phone?: true
    address?: true
    roleLevel?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    email?: true
    phone?: true
    address?: true
    roleLevel?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    birthDate: Date
    email: string
    phone: string
    address: string
    roleLevel: $Enums.RoleLevel | null
    password: string
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    roleLevel?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    budgets?: boolean | Customer$budgetsArgs<ExtArgs>
    serviceProvided?: boolean | Customer$serviceProvidedArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    roleLevel?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    budgets?: boolean | Customer$budgetsArgs<ExtArgs>
    serviceProvided?: boolean | Customer$serviceProvidedArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CustomerPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      budgets: Prisma.$BudgetsPayload<ExtArgs>[]
      serviceProvided: Prisma.$ServiceProvidedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      firstName: string
      lastName: string
      birthDate: Date
      email: string
      phone: string
      address: string
      roleLevel: $Enums.RoleLevel | null
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }


  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
    **/
    create<T extends CustomerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Customers.
     *     @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
    **/
    delete<T extends CustomerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
    **/
    upsert<T extends CustomerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    budgets<T extends Customer$budgetsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$budgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetsPayload<ExtArgs>, T, 'findMany'> | Null>;

    serviceProvided<T extends Customer$serviceProvidedArgs<ExtArgs> = {}>(args?: Subset<T, Customer$serviceProvidedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceProvidedPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly firstName: FieldRef<"Customer", 'String'>
    readonly lastName: FieldRef<"Customer", 'String'>
    readonly birthDate: FieldRef<"Customer", 'DateTime'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly roleLevel: FieldRef<"Customer", 'RoleLevel'>
    readonly password: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }


  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }


  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer.budgets
   */
  export type Customer$budgetsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budgets
     */
    select?: BudgetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BudgetsInclude<ExtArgs> | null
    where?: BudgetsWhereInput
    orderBy?: BudgetsOrderByWithRelationInput | BudgetsOrderByWithRelationInput[]
    cursor?: BudgetsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BudgetsScalarFieldEnum | BudgetsScalarFieldEnum[]
  }


  /**
   * Customer.serviceProvided
   */
  export type Customer$serviceProvidedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvided
     */
    select?: ServiceProvidedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceProvidedInclude<ExtArgs> | null
    where?: ServiceProvidedWhereInput
    orderBy?: ServiceProvidedOrderByWithRelationInput | ServiceProvidedOrderByWithRelationInput[]
    cursor?: ServiceProvidedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceProvidedScalarFieldEnum | ServiceProvidedScalarFieldEnum[]
  }


  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
  }



  /**
   * Model Employees
   */

  export type AggregateEmployees = {
    _count: EmployeesCountAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  export type EmployeesMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    birthDate: Date | null
    hireDate: Date | null
    email: string | null
    phone: string | null
    address: string | null
    wage: string | null
    role: string | null
    roleLevel: $Enums.RoleLevel | null
    positionTitle: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    department: string | null
  }

  export type EmployeesMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    birthDate: Date | null
    hireDate: Date | null
    email: string | null
    phone: string | null
    address: string | null
    wage: string | null
    role: string | null
    roleLevel: $Enums.RoleLevel | null
    positionTitle: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    department: string | null
  }

  export type EmployeesCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    birthDate: number
    hireDate: number
    email: number
    phone: number
    address: number
    wage: number
    role: number
    roleLevel: number
    positionTitle: number
    password: number
    createdAt: number
    updatedAt: number
    department: number
    _all: number
  }


  export type EmployeesMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    hireDate?: true
    email?: true
    phone?: true
    address?: true
    wage?: true
    role?: true
    roleLevel?: true
    positionTitle?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    department?: true
  }

  export type EmployeesMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    hireDate?: true
    email?: true
    phone?: true
    address?: true
    wage?: true
    role?: true
    roleLevel?: true
    positionTitle?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    department?: true
  }

  export type EmployeesCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    hireDate?: true
    email?: true
    phone?: true
    address?: true
    wage?: true
    role?: true
    roleLevel?: true
    positionTitle?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    department?: true
    _all?: true
  }

  export type EmployeesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to aggregate.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeesMaxAggregateInputType
  }

  export type GetEmployeesAggregateType<T extends EmployeesAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployees[P]>
      : GetScalarType<T[P], AggregateEmployees[P]>
  }




  export type EmployeesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EmployeesWhereInput
    orderBy?: EmployeesOrderByWithAggregationInput | EmployeesOrderByWithAggregationInput[]
    by: EmployeesScalarFieldEnum[] | EmployeesScalarFieldEnum
    having?: EmployeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeesCountAggregateInputType | true
    _min?: EmployeesMinAggregateInputType
    _max?: EmployeesMaxAggregateInputType
  }

  export type EmployeesGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    birthDate: Date
    hireDate: Date
    email: string
    phone: string
    address: string
    wage: string
    role: string
    roleLevel: $Enums.RoleLevel | null
    positionTitle: string
    password: string
    createdAt: Date
    updatedAt: Date
    department: string | null
    _count: EmployeesCountAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  type GetEmployeesGroupByPayload<T extends EmployeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
        }
      >
    >


  export type EmployeesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    hireDate?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    wage?: boolean
    role?: boolean
    roleLevel?: boolean
    positionTitle?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean
    serviceProvided?: boolean | Employees$serviceProvidedArgs<ExtArgs>
    departments?: boolean | Employees$departmentsArgs<ExtArgs>
    _count?: boolean | EmployeesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>

  export type EmployeesSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    hireDate?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    wage?: boolean
    role?: boolean
    roleLevel?: boolean
    positionTitle?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean
  }

  export type EmployeesInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    serviceProvided?: boolean | Employees$serviceProvidedArgs<ExtArgs>
    departments?: boolean | Employees$departmentsArgs<ExtArgs>
    _count?: boolean | EmployeesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EmployeesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Employees"
    objects: {
      serviceProvided: Prisma.$ServiceProvidedPayload<ExtArgs>[]
      departments: Prisma.$DeptEmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      firstName: string
      lastName: string
      birthDate: Date
      hireDate: Date
      email: string
      phone: string
      address: string
      wage: string
      role: string
      roleLevel: $Enums.RoleLevel | null
      positionTitle: string
      password: string
      createdAt: Date
      updatedAt: Date
      department: string | null
    }, ExtArgs["result"]["employees"]>
    composites: {}
  }


  type EmployeesGetPayload<S extends boolean | null | undefined | EmployeesDefaultArgs> = $Result.GetResult<Prisma.$EmployeesPayload, S>

  type EmployeesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<EmployeesFindManyArgs, 'select' | 'include'> & {
      select?: EmployeesCountAggregateInputType | true
    }

  export interface EmployeesDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employees'], meta: { name: 'Employees' } }
    /**
     * Find zero or one Employees that matches the filter.
     * @param {EmployeesFindUniqueArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmployeesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeesFindUniqueArgs<ExtArgs>>
    ): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Employees that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EmployeesFindUniqueOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EmployeesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesFindFirstArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmployeesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeesFindFirstArgs<ExtArgs>>
    ): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Employees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesFindFirstOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EmployeesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employees.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employees.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeesWithIdOnly = await prisma.employees.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EmployeesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Employees.
     * @param {EmployeesCreateArgs} args - Arguments to create a Employees.
     * @example
     * // Create one Employees
     * const Employees = await prisma.employees.create({
     *   data: {
     *     // ... data to create a Employees
     *   }
     * })
     * 
    **/
    create<T extends EmployeesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeesCreateArgs<ExtArgs>>
    ): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Employees.
     *     @param {EmployeesCreateManyArgs} args - Arguments to create many Employees.
     *     @example
     *     // Create many Employees
     *     const employees = await prisma.employees.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmployeesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employees.
     * @param {EmployeesDeleteArgs} args - Arguments to delete one Employees.
     * @example
     * // Delete one Employees
     * const Employees = await prisma.employees.delete({
     *   where: {
     *     // ... filter to delete one Employees
     *   }
     * })
     * 
    **/
    delete<T extends EmployeesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeesDeleteArgs<ExtArgs>>
    ): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Employees.
     * @param {EmployeesUpdateArgs} args - Arguments to update one Employees.
     * @example
     * // Update one Employees
     * const employees = await prisma.employees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmployeesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeesUpdateArgs<ExtArgs>>
    ): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Employees.
     * @param {EmployeesDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmployeesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmployeesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employees.
     * @param {EmployeesUpsertArgs} args - Arguments to update or create a Employees.
     * @example
     * // Update or create a Employees
     * const employees = await prisma.employees.upsert({
     *   create: {
     *     // ... data to create a Employees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employees we want to update
     *   }
     * })
    **/
    upsert<T extends EmployeesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeesUpsertArgs<ExtArgs>>
    ): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employees.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeesCountArgs>(
      args?: Subset<T, EmployeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeesAggregateArgs>(args: Subset<T, EmployeesAggregateArgs>): Prisma.PrismaPromise<GetEmployeesAggregateType<T>>

    /**
     * Group by Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeesGroupByArgs['orderBy'] }
        : { orderBy?: EmployeesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employees model
   */
  readonly fields: EmployeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    serviceProvided<T extends Employees$serviceProvidedArgs<ExtArgs> = {}>(args?: Subset<T, Employees$serviceProvidedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceProvidedPayload<ExtArgs>, T, 'findMany'> | Null>;

    departments<T extends Employees$departmentsArgs<ExtArgs> = {}>(args?: Subset<T, Employees$departmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeptEmployeePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Employees model
   */ 
  interface EmployeesFieldRefs {
    readonly id: FieldRef<"Employees", 'String'>
    readonly firstName: FieldRef<"Employees", 'String'>
    readonly lastName: FieldRef<"Employees", 'String'>
    readonly birthDate: FieldRef<"Employees", 'DateTime'>
    readonly hireDate: FieldRef<"Employees", 'DateTime'>
    readonly email: FieldRef<"Employees", 'String'>
    readonly phone: FieldRef<"Employees", 'String'>
    readonly address: FieldRef<"Employees", 'String'>
    readonly wage: FieldRef<"Employees", 'String'>
    readonly role: FieldRef<"Employees", 'String'>
    readonly roleLevel: FieldRef<"Employees", 'RoleLevel'>
    readonly positionTitle: FieldRef<"Employees", 'String'>
    readonly password: FieldRef<"Employees", 'String'>
    readonly createdAt: FieldRef<"Employees", 'DateTime'>
    readonly updatedAt: FieldRef<"Employees", 'DateTime'>
    readonly department: FieldRef<"Employees", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Employees findUnique
   */
  export type EmployeesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where: EmployeesWhereUniqueInput
  }


  /**
   * Employees findUniqueOrThrow
   */
  export type EmployeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where: EmployeesWhereUniqueInput
  }


  /**
   * Employees findFirst
   */
  export type EmployeesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }


  /**
   * Employees findFirstOrThrow
   */
  export type EmployeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }


  /**
   * Employees findMany
   */
  export type EmployeesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }


  /**
   * Employees create
   */
  export type EmployeesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * The data needed to create a Employees.
     */
    data: XOR<EmployeesCreateInput, EmployeesUncheckedCreateInput>
  }


  /**
   * Employees createMany
   */
  export type EmployeesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeesCreateManyInput | EmployeesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Employees update
   */
  export type EmployeesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * The data needed to update a Employees.
     */
    data: XOR<EmployeesUpdateInput, EmployeesUncheckedUpdateInput>
    /**
     * Choose, which Employees to update.
     */
    where: EmployeesWhereUniqueInput
  }


  /**
   * Employees updateMany
   */
  export type EmployeesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeesUpdateManyMutationInput, EmployeesUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeesWhereInput
  }


  /**
   * Employees upsert
   */
  export type EmployeesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * The filter to search for the Employees to update in case it exists.
     */
    where: EmployeesWhereUniqueInput
    /**
     * In case the Employees found by the `where` argument doesn't exist, create a new Employees with this data.
     */
    create: XOR<EmployeesCreateInput, EmployeesUncheckedCreateInput>
    /**
     * In case the Employees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeesUpdateInput, EmployeesUncheckedUpdateInput>
  }


  /**
   * Employees delete
   */
  export type EmployeesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter which Employees to delete.
     */
    where: EmployeesWhereUniqueInput
  }


  /**
   * Employees deleteMany
   */
  export type EmployeesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeesWhereInput
  }


  /**
   * Employees.serviceProvided
   */
  export type Employees$serviceProvidedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvided
     */
    select?: ServiceProvidedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceProvidedInclude<ExtArgs> | null
    where?: ServiceProvidedWhereInput
    orderBy?: ServiceProvidedOrderByWithRelationInput | ServiceProvidedOrderByWithRelationInput[]
    cursor?: ServiceProvidedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceProvidedScalarFieldEnum | ServiceProvidedScalarFieldEnum[]
  }


  /**
   * Employees.departments
   */
  export type Employees$departmentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeptEmployee
     */
    select?: DeptEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeptEmployeeInclude<ExtArgs> | null
    where?: DeptEmployeeWhereInput
    orderBy?: DeptEmployeeOrderByWithRelationInput | DeptEmployeeOrderByWithRelationInput[]
    cursor?: DeptEmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeptEmployeeScalarFieldEnum | DeptEmployeeScalarFieldEnum[]
  }


  /**
   * Employees without action
   */
  export type EmployeesDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeesInclude<ExtArgs> | null
  }



  /**
   * Model Departments
   */

  export type AggregateDepartments = {
    _count: DepartmentsCountAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  export type DepartmentsMinAggregateOutputType = {
    id: string | null
    name: $Enums.DeptAreas | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentsMaxAggregateOutputType = {
    id: string | null
    name: $Enums.DeptAreas | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentsCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartmentsMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentsMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentsCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartmentsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to aggregate.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentsMaxAggregateInputType
  }

  export type GetDepartmentsAggregateType<T extends DepartmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartments[P]>
      : GetScalarType<T[P], AggregateDepartments[P]>
  }




  export type DepartmentsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DepartmentsWhereInput
    orderBy?: DepartmentsOrderByWithAggregationInput | DepartmentsOrderByWithAggregationInput[]
    by: DepartmentsScalarFieldEnum[] | DepartmentsScalarFieldEnum
    having?: DepartmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentsCountAggregateInputType | true
    _min?: DepartmentsMinAggregateInputType
    _max?: DepartmentsMaxAggregateInputType
  }

  export type DepartmentsGroupByOutputType = {
    id: string
    name: $Enums.DeptAreas
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: DepartmentsCountAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  type GetDepartmentsGroupByPayload<T extends DepartmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employees?: boolean | Departments$employeesArgs<ExtArgs>
    _count?: boolean | DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departments"]>

  export type DepartmentsSelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepartmentsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    employees?: boolean | Departments$employeesArgs<ExtArgs>
    _count?: boolean | DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DepartmentsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Departments"
    objects: {
      employees: Prisma.$DeptEmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: $Enums.DeptAreas
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["departments"]>
    composites: {}
  }


  type DepartmentsGetPayload<S extends boolean | null | undefined | DepartmentsDefaultArgs> = $Result.GetResult<Prisma.$DepartmentsPayload, S>

  type DepartmentsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DepartmentsFindManyArgs, 'select' | 'include'> & {
      select?: DepartmentsCountAggregateInputType | true
    }

  export interface DepartmentsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Departments'], meta: { name: 'Departments' } }
    /**
     * Find zero or one Departments that matches the filter.
     * @param {DepartmentsFindUniqueArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DepartmentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentsFindUniqueArgs<ExtArgs>>
    ): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Departments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DepartmentsFindUniqueOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DepartmentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsFindFirstArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DepartmentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentsFindFirstArgs<ExtArgs>>
    ): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Departments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsFindFirstOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DepartmentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.departments.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.departments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentsWithIdOnly = await prisma.departments.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DepartmentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Departments.
     * @param {DepartmentsCreateArgs} args - Arguments to create a Departments.
     * @example
     * // Create one Departments
     * const Departments = await prisma.departments.create({
     *   data: {
     *     // ... data to create a Departments
     *   }
     * })
     * 
    **/
    create<T extends DepartmentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentsCreateArgs<ExtArgs>>
    ): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Departments.
     *     @param {DepartmentsCreateManyArgs} args - Arguments to create many Departments.
     *     @example
     *     // Create many Departments
     *     const departments = await prisma.departments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DepartmentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Departments.
     * @param {DepartmentsDeleteArgs} args - Arguments to delete one Departments.
     * @example
     * // Delete one Departments
     * const Departments = await prisma.departments.delete({
     *   where: {
     *     // ... filter to delete one Departments
     *   }
     * })
     * 
    **/
    delete<T extends DepartmentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentsDeleteArgs<ExtArgs>>
    ): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Departments.
     * @param {DepartmentsUpdateArgs} args - Arguments to update one Departments.
     * @example
     * // Update one Departments
     * const departments = await prisma.departments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DepartmentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentsUpdateArgs<ExtArgs>>
    ): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentsDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.departments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DepartmentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const departments = await prisma.departments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DepartmentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Departments.
     * @param {DepartmentsUpsertArgs} args - Arguments to update or create a Departments.
     * @example
     * // Update or create a Departments
     * const departments = await prisma.departments.upsert({
     *   create: {
     *     // ... data to create a Departments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departments we want to update
     *   }
     * })
    **/
    upsert<T extends DepartmentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentsUpsertArgs<ExtArgs>>
    ): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.departments.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentsCountArgs>(
      args?: Subset<T, DepartmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentsAggregateArgs>(args: Subset<T, DepartmentsAggregateArgs>): Prisma.PrismaPromise<GetDepartmentsAggregateType<T>>

    /**
     * Group by Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentsGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Departments model
   */
  readonly fields: DepartmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Departments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    employees<T extends Departments$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Departments$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeptEmployeePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Departments model
   */ 
  interface DepartmentsFieldRefs {
    readonly id: FieldRef<"Departments", 'String'>
    readonly name: FieldRef<"Departments", 'DeptAreas'>
    readonly isActive: FieldRef<"Departments", 'Boolean'>
    readonly createdAt: FieldRef<"Departments", 'DateTime'>
    readonly updatedAt: FieldRef<"Departments", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Departments findUnique
   */
  export type DepartmentsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where: DepartmentsWhereUniqueInput
  }


  /**
   * Departments findUniqueOrThrow
   */
  export type DepartmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where: DepartmentsWhereUniqueInput
  }


  /**
   * Departments findFirst
   */
  export type DepartmentsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }


  /**
   * Departments findFirstOrThrow
   */
  export type DepartmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }


  /**
   * Departments findMany
   */
  export type DepartmentsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }


  /**
   * Departments create
   */
  export type DepartmentsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Departments.
     */
    data: XOR<DepartmentsCreateInput, DepartmentsUncheckedCreateInput>
  }


  /**
   * Departments createMany
   */
  export type DepartmentsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentsCreateManyInput | DepartmentsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Departments update
   */
  export type DepartmentsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Departments.
     */
    data: XOR<DepartmentsUpdateInput, DepartmentsUncheckedUpdateInput>
    /**
     * Choose, which Departments to update.
     */
    where: DepartmentsWhereUniqueInput
  }


  /**
   * Departments updateMany
   */
  export type DepartmentsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentsUpdateManyMutationInput, DepartmentsUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentsWhereInput
  }


  /**
   * Departments upsert
   */
  export type DepartmentsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Departments to update in case it exists.
     */
    where: DepartmentsWhereUniqueInput
    /**
     * In case the Departments found by the `where` argument doesn't exist, create a new Departments with this data.
     */
    create: XOR<DepartmentsCreateInput, DepartmentsUncheckedCreateInput>
    /**
     * In case the Departments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentsUpdateInput, DepartmentsUncheckedUpdateInput>
  }


  /**
   * Departments delete
   */
  export type DepartmentsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter which Departments to delete.
     */
    where: DepartmentsWhereUniqueInput
  }


  /**
   * Departments deleteMany
   */
  export type DepartmentsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentsWhereInput
  }


  /**
   * Departments.employees
   */
  export type Departments$employeesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeptEmployee
     */
    select?: DeptEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeptEmployeeInclude<ExtArgs> | null
    where?: DeptEmployeeWhereInput
    orderBy?: DeptEmployeeOrderByWithRelationInput | DeptEmployeeOrderByWithRelationInput[]
    cursor?: DeptEmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeptEmployeeScalarFieldEnum | DeptEmployeeScalarFieldEnum[]
  }


  /**
   * Departments without action
   */
  export type DepartmentsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentsInclude<ExtArgs> | null
  }



  /**
   * Model DeptEmployee
   */

  export type AggregateDeptEmployee = {
    _count: DeptEmployeeCountAggregateOutputType | null
    _min: DeptEmployeeMinAggregateOutputType | null
    _max: DeptEmployeeMaxAggregateOutputType | null
  }

  export type DeptEmployeeMinAggregateOutputType = {
    guid_deptEmp: string | null
    employeeId: string | null
    deptId: string | null
  }

  export type DeptEmployeeMaxAggregateOutputType = {
    guid_deptEmp: string | null
    employeeId: string | null
    deptId: string | null
  }

  export type DeptEmployeeCountAggregateOutputType = {
    guid_deptEmp: number
    employeeId: number
    deptId: number
    _all: number
  }


  export type DeptEmployeeMinAggregateInputType = {
    guid_deptEmp?: true
    employeeId?: true
    deptId?: true
  }

  export type DeptEmployeeMaxAggregateInputType = {
    guid_deptEmp?: true
    employeeId?: true
    deptId?: true
  }

  export type DeptEmployeeCountAggregateInputType = {
    guid_deptEmp?: true
    employeeId?: true
    deptId?: true
    _all?: true
  }

  export type DeptEmployeeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeptEmployee to aggregate.
     */
    where?: DeptEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeptEmployees to fetch.
     */
    orderBy?: DeptEmployeeOrderByWithRelationInput | DeptEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeptEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeptEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeptEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeptEmployees
    **/
    _count?: true | DeptEmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeptEmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeptEmployeeMaxAggregateInputType
  }

  export type GetDeptEmployeeAggregateType<T extends DeptEmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateDeptEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeptEmployee[P]>
      : GetScalarType<T[P], AggregateDeptEmployee[P]>
  }




  export type DeptEmployeeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DeptEmployeeWhereInput
    orderBy?: DeptEmployeeOrderByWithAggregationInput | DeptEmployeeOrderByWithAggregationInput[]
    by: DeptEmployeeScalarFieldEnum[] | DeptEmployeeScalarFieldEnum
    having?: DeptEmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeptEmployeeCountAggregateInputType | true
    _min?: DeptEmployeeMinAggregateInputType
    _max?: DeptEmployeeMaxAggregateInputType
  }

  export type DeptEmployeeGroupByOutputType = {
    guid_deptEmp: string
    employeeId: string
    deptId: string
    _count: DeptEmployeeCountAggregateOutputType | null
    _min: DeptEmployeeMinAggregateOutputType | null
    _max: DeptEmployeeMaxAggregateOutputType | null
  }

  type GetDeptEmployeeGroupByPayload<T extends DeptEmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeptEmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeptEmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeptEmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], DeptEmployeeGroupByOutputType[P]>
        }
      >
    >


  export type DeptEmployeeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guid_deptEmp?: boolean
    employeeId?: boolean
    deptId?: boolean
    employee?: boolean | EmployeesDefaultArgs<ExtArgs>
    departments?: boolean | DepartmentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deptEmployee"]>

  export type DeptEmployeeSelectScalar = {
    guid_deptEmp?: boolean
    employeeId?: boolean
    deptId?: boolean
  }

  export type DeptEmployeeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeesDefaultArgs<ExtArgs>
    departments?: boolean | DepartmentsDefaultArgs<ExtArgs>
  }


  export type $DeptEmployeePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "DeptEmployee"
    objects: {
      employee: Prisma.$EmployeesPayload<ExtArgs>
      departments: Prisma.$DepartmentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      guid_deptEmp: string
      employeeId: string
      deptId: string
    }, ExtArgs["result"]["deptEmployee"]>
    composites: {}
  }


  type DeptEmployeeGetPayload<S extends boolean | null | undefined | DeptEmployeeDefaultArgs> = $Result.GetResult<Prisma.$DeptEmployeePayload, S>

  type DeptEmployeeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DeptEmployeeFindManyArgs, 'select' | 'include'> & {
      select?: DeptEmployeeCountAggregateInputType | true
    }

  export interface DeptEmployeeDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeptEmployee'], meta: { name: 'DeptEmployee' } }
    /**
     * Find zero or one DeptEmployee that matches the filter.
     * @param {DeptEmployeeFindUniqueArgs} args - Arguments to find a DeptEmployee
     * @example
     * // Get one DeptEmployee
     * const deptEmployee = await prisma.deptEmployee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DeptEmployeeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DeptEmployeeFindUniqueArgs<ExtArgs>>
    ): Prisma__DeptEmployeeClient<$Result.GetResult<Prisma.$DeptEmployeePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DeptEmployee that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DeptEmployeeFindUniqueOrThrowArgs} args - Arguments to find a DeptEmployee
     * @example
     * // Get one DeptEmployee
     * const deptEmployee = await prisma.deptEmployee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DeptEmployeeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DeptEmployeeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DeptEmployeeClient<$Result.GetResult<Prisma.$DeptEmployeePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DeptEmployee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeptEmployeeFindFirstArgs} args - Arguments to find a DeptEmployee
     * @example
     * // Get one DeptEmployee
     * const deptEmployee = await prisma.deptEmployee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DeptEmployeeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DeptEmployeeFindFirstArgs<ExtArgs>>
    ): Prisma__DeptEmployeeClient<$Result.GetResult<Prisma.$DeptEmployeePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DeptEmployee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeptEmployeeFindFirstOrThrowArgs} args - Arguments to find a DeptEmployee
     * @example
     * // Get one DeptEmployee
     * const deptEmployee = await prisma.deptEmployee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DeptEmployeeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DeptEmployeeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DeptEmployeeClient<$Result.GetResult<Prisma.$DeptEmployeePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DeptEmployees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeptEmployeeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeptEmployees
     * const deptEmployees = await prisma.deptEmployee.findMany()
     * 
     * // Get first 10 DeptEmployees
     * const deptEmployees = await prisma.deptEmployee.findMany({ take: 10 })
     * 
     * // Only select the `guid_deptEmp`
     * const deptEmployeeWithGuid_deptEmpOnly = await prisma.deptEmployee.findMany({ select: { guid_deptEmp: true } })
     * 
    **/
    findMany<T extends DeptEmployeeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DeptEmployeeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeptEmployeePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DeptEmployee.
     * @param {DeptEmployeeCreateArgs} args - Arguments to create a DeptEmployee.
     * @example
     * // Create one DeptEmployee
     * const DeptEmployee = await prisma.deptEmployee.create({
     *   data: {
     *     // ... data to create a DeptEmployee
     *   }
     * })
     * 
    **/
    create<T extends DeptEmployeeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DeptEmployeeCreateArgs<ExtArgs>>
    ): Prisma__DeptEmployeeClient<$Result.GetResult<Prisma.$DeptEmployeePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DeptEmployees.
     *     @param {DeptEmployeeCreateManyArgs} args - Arguments to create many DeptEmployees.
     *     @example
     *     // Create many DeptEmployees
     *     const deptEmployee = await prisma.deptEmployee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DeptEmployeeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DeptEmployeeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DeptEmployee.
     * @param {DeptEmployeeDeleteArgs} args - Arguments to delete one DeptEmployee.
     * @example
     * // Delete one DeptEmployee
     * const DeptEmployee = await prisma.deptEmployee.delete({
     *   where: {
     *     // ... filter to delete one DeptEmployee
     *   }
     * })
     * 
    **/
    delete<T extends DeptEmployeeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DeptEmployeeDeleteArgs<ExtArgs>>
    ): Prisma__DeptEmployeeClient<$Result.GetResult<Prisma.$DeptEmployeePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DeptEmployee.
     * @param {DeptEmployeeUpdateArgs} args - Arguments to update one DeptEmployee.
     * @example
     * // Update one DeptEmployee
     * const deptEmployee = await prisma.deptEmployee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DeptEmployeeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DeptEmployeeUpdateArgs<ExtArgs>>
    ): Prisma__DeptEmployeeClient<$Result.GetResult<Prisma.$DeptEmployeePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DeptEmployees.
     * @param {DeptEmployeeDeleteManyArgs} args - Arguments to filter DeptEmployees to delete.
     * @example
     * // Delete a few DeptEmployees
     * const { count } = await prisma.deptEmployee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DeptEmployeeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DeptEmployeeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeptEmployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeptEmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeptEmployees
     * const deptEmployee = await prisma.deptEmployee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DeptEmployeeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DeptEmployeeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DeptEmployee.
     * @param {DeptEmployeeUpsertArgs} args - Arguments to update or create a DeptEmployee.
     * @example
     * // Update or create a DeptEmployee
     * const deptEmployee = await prisma.deptEmployee.upsert({
     *   create: {
     *     // ... data to create a DeptEmployee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeptEmployee we want to update
     *   }
     * })
    **/
    upsert<T extends DeptEmployeeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DeptEmployeeUpsertArgs<ExtArgs>>
    ): Prisma__DeptEmployeeClient<$Result.GetResult<Prisma.$DeptEmployeePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DeptEmployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeptEmployeeCountArgs} args - Arguments to filter DeptEmployees to count.
     * @example
     * // Count the number of DeptEmployees
     * const count = await prisma.deptEmployee.count({
     *   where: {
     *     // ... the filter for the DeptEmployees we want to count
     *   }
     * })
    **/
    count<T extends DeptEmployeeCountArgs>(
      args?: Subset<T, DeptEmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeptEmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeptEmployee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeptEmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeptEmployeeAggregateArgs>(args: Subset<T, DeptEmployeeAggregateArgs>): Prisma.PrismaPromise<GetDeptEmployeeAggregateType<T>>

    /**
     * Group by DeptEmployee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeptEmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeptEmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeptEmployeeGroupByArgs['orderBy'] }
        : { orderBy?: DeptEmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeptEmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeptEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeptEmployee model
   */
  readonly fields: DeptEmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeptEmployee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeptEmployeeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    employee<T extends EmployeesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeesDefaultArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    departments<T extends DepartmentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentsDefaultArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DeptEmployee model
   */ 
  interface DeptEmployeeFieldRefs {
    readonly guid_deptEmp: FieldRef<"DeptEmployee", 'String'>
    readonly employeeId: FieldRef<"DeptEmployee", 'String'>
    readonly deptId: FieldRef<"DeptEmployee", 'String'>
  }
    

  // Custom InputTypes

  /**
   * DeptEmployee findUnique
   */
  export type DeptEmployeeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeptEmployee
     */
    select?: DeptEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeptEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which DeptEmployee to fetch.
     */
    where: DeptEmployeeWhereUniqueInput
  }


  /**
   * DeptEmployee findUniqueOrThrow
   */
  export type DeptEmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeptEmployee
     */
    select?: DeptEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeptEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which DeptEmployee to fetch.
     */
    where: DeptEmployeeWhereUniqueInput
  }


  /**
   * DeptEmployee findFirst
   */
  export type DeptEmployeeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeptEmployee
     */
    select?: DeptEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeptEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which DeptEmployee to fetch.
     */
    where?: DeptEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeptEmployees to fetch.
     */
    orderBy?: DeptEmployeeOrderByWithRelationInput | DeptEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeptEmployees.
     */
    cursor?: DeptEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeptEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeptEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeptEmployees.
     */
    distinct?: DeptEmployeeScalarFieldEnum | DeptEmployeeScalarFieldEnum[]
  }


  /**
   * DeptEmployee findFirstOrThrow
   */
  export type DeptEmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeptEmployee
     */
    select?: DeptEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeptEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which DeptEmployee to fetch.
     */
    where?: DeptEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeptEmployees to fetch.
     */
    orderBy?: DeptEmployeeOrderByWithRelationInput | DeptEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeptEmployees.
     */
    cursor?: DeptEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeptEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeptEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeptEmployees.
     */
    distinct?: DeptEmployeeScalarFieldEnum | DeptEmployeeScalarFieldEnum[]
  }


  /**
   * DeptEmployee findMany
   */
  export type DeptEmployeeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeptEmployee
     */
    select?: DeptEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeptEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which DeptEmployees to fetch.
     */
    where?: DeptEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeptEmployees to fetch.
     */
    orderBy?: DeptEmployeeOrderByWithRelationInput | DeptEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeptEmployees.
     */
    cursor?: DeptEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeptEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeptEmployees.
     */
    skip?: number
    distinct?: DeptEmployeeScalarFieldEnum | DeptEmployeeScalarFieldEnum[]
  }


  /**
   * DeptEmployee create
   */
  export type DeptEmployeeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeptEmployee
     */
    select?: DeptEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeptEmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a DeptEmployee.
     */
    data: XOR<DeptEmployeeCreateInput, DeptEmployeeUncheckedCreateInput>
  }


  /**
   * DeptEmployee createMany
   */
  export type DeptEmployeeCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeptEmployees.
     */
    data: DeptEmployeeCreateManyInput | DeptEmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DeptEmployee update
   */
  export type DeptEmployeeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeptEmployee
     */
    select?: DeptEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeptEmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a DeptEmployee.
     */
    data: XOR<DeptEmployeeUpdateInput, DeptEmployeeUncheckedUpdateInput>
    /**
     * Choose, which DeptEmployee to update.
     */
    where: DeptEmployeeWhereUniqueInput
  }


  /**
   * DeptEmployee updateMany
   */
  export type DeptEmployeeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeptEmployees.
     */
    data: XOR<DeptEmployeeUpdateManyMutationInput, DeptEmployeeUncheckedUpdateManyInput>
    /**
     * Filter which DeptEmployees to update
     */
    where?: DeptEmployeeWhereInput
  }


  /**
   * DeptEmployee upsert
   */
  export type DeptEmployeeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeptEmployee
     */
    select?: DeptEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeptEmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the DeptEmployee to update in case it exists.
     */
    where: DeptEmployeeWhereUniqueInput
    /**
     * In case the DeptEmployee found by the `where` argument doesn't exist, create a new DeptEmployee with this data.
     */
    create: XOR<DeptEmployeeCreateInput, DeptEmployeeUncheckedCreateInput>
    /**
     * In case the DeptEmployee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeptEmployeeUpdateInput, DeptEmployeeUncheckedUpdateInput>
  }


  /**
   * DeptEmployee delete
   */
  export type DeptEmployeeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeptEmployee
     */
    select?: DeptEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeptEmployeeInclude<ExtArgs> | null
    /**
     * Filter which DeptEmployee to delete.
     */
    where: DeptEmployeeWhereUniqueInput
  }


  /**
   * DeptEmployee deleteMany
   */
  export type DeptEmployeeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeptEmployees to delete
     */
    where?: DeptEmployeeWhereInput
  }


  /**
   * DeptEmployee without action
   */
  export type DeptEmployeeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeptEmployee
     */
    select?: DeptEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeptEmployeeInclude<ExtArgs> | null
  }



  /**
   * Model Budgets
   */

  export type AggregateBudgets = {
    _count: BudgetsCountAggregateOutputType | null
    _min: BudgetsMinAggregateOutputType | null
    _max: BudgetsMaxAggregateOutputType | null
  }

  export type BudgetsMinAggregateOutputType = {
    id: string | null
    servicePrice: string | null
    serviceDescription: string | null
    serviceStatus: $Enums.ServiceStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    customerId: string | null
  }

  export type BudgetsMaxAggregateOutputType = {
    id: string | null
    servicePrice: string | null
    serviceDescription: string | null
    serviceStatus: $Enums.ServiceStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    customerId: string | null
  }

  export type BudgetsCountAggregateOutputType = {
    id: number
    servicePrice: number
    serviceDescription: number
    serviceStatus: number
    paymentStatus: number
    createdAt: number
    updatedAt: number
    customerId: number
    _all: number
  }


  export type BudgetsMinAggregateInputType = {
    id?: true
    servicePrice?: true
    serviceDescription?: true
    serviceStatus?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
    customerId?: true
  }

  export type BudgetsMaxAggregateInputType = {
    id?: true
    servicePrice?: true
    serviceDescription?: true
    serviceStatus?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
    customerId?: true
  }

  export type BudgetsCountAggregateInputType = {
    id?: true
    servicePrice?: true
    serviceDescription?: true
    serviceStatus?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
    customerId?: true
    _all?: true
  }

  export type BudgetsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budgets to aggregate.
     */
    where?: BudgetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetsOrderByWithRelationInput | BudgetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BudgetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Budgets
    **/
    _count?: true | BudgetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BudgetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BudgetsMaxAggregateInputType
  }

  export type GetBudgetsAggregateType<T extends BudgetsAggregateArgs> = {
        [P in keyof T & keyof AggregateBudgets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBudgets[P]>
      : GetScalarType<T[P], AggregateBudgets[P]>
  }




  export type BudgetsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BudgetsWhereInput
    orderBy?: BudgetsOrderByWithAggregationInput | BudgetsOrderByWithAggregationInput[]
    by: BudgetsScalarFieldEnum[] | BudgetsScalarFieldEnum
    having?: BudgetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BudgetsCountAggregateInputType | true
    _min?: BudgetsMinAggregateInputType
    _max?: BudgetsMaxAggregateInputType
  }

  export type BudgetsGroupByOutputType = {
    id: string
    servicePrice: string
    serviceDescription: string
    serviceStatus: $Enums.ServiceStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    createdAt: Date
    updatedAt: Date
    customerId: string | null
    _count: BudgetsCountAggregateOutputType | null
    _min: BudgetsMinAggregateOutputType | null
    _max: BudgetsMaxAggregateOutputType | null
  }

  type GetBudgetsGroupByPayload<T extends BudgetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BudgetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BudgetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BudgetsGroupByOutputType[P]>
            : GetScalarType<T[P], BudgetsGroupByOutputType[P]>
        }
      >
    >


  export type BudgetsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servicePrice?: boolean
    serviceDescription?: boolean
    serviceStatus?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customerId?: boolean
    servicesProvided?: boolean | Budgets$servicesProvidedArgs<ExtArgs>
    customer?: boolean | Budgets$customerArgs<ExtArgs>
    _count?: boolean | BudgetsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budgets"]>

  export type BudgetsSelectScalar = {
    id?: boolean
    servicePrice?: boolean
    serviceDescription?: boolean
    serviceStatus?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customerId?: boolean
  }

  export type BudgetsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    servicesProvided?: boolean | Budgets$servicesProvidedArgs<ExtArgs>
    customer?: boolean | Budgets$customerArgs<ExtArgs>
    _count?: boolean | BudgetsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BudgetsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Budgets"
    objects: {
      servicesProvided: Prisma.$ServiceProvidedPayload<ExtArgs>[]
      customer: Prisma.$CustomerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      servicePrice: string
      serviceDescription: string
      serviceStatus: $Enums.ServiceStatus | null
      paymentStatus: $Enums.PaymentStatus | null
      createdAt: Date
      updatedAt: Date
      customerId: string | null
    }, ExtArgs["result"]["budgets"]>
    composites: {}
  }


  type BudgetsGetPayload<S extends boolean | null | undefined | BudgetsDefaultArgs> = $Result.GetResult<Prisma.$BudgetsPayload, S>

  type BudgetsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<BudgetsFindManyArgs, 'select' | 'include'> & {
      select?: BudgetsCountAggregateInputType | true
    }

  export interface BudgetsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Budgets'], meta: { name: 'Budgets' } }
    /**
     * Find zero or one Budgets that matches the filter.
     * @param {BudgetsFindUniqueArgs} args - Arguments to find a Budgets
     * @example
     * // Get one Budgets
     * const budgets = await prisma.budgets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BudgetsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BudgetsFindUniqueArgs<ExtArgs>>
    ): Prisma__BudgetsClient<$Result.GetResult<Prisma.$BudgetsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Budgets that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BudgetsFindUniqueOrThrowArgs} args - Arguments to find a Budgets
     * @example
     * // Get one Budgets
     * const budgets = await prisma.budgets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BudgetsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BudgetsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BudgetsClient<$Result.GetResult<Prisma.$BudgetsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Budgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetsFindFirstArgs} args - Arguments to find a Budgets
     * @example
     * // Get one Budgets
     * const budgets = await prisma.budgets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BudgetsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BudgetsFindFirstArgs<ExtArgs>>
    ): Prisma__BudgetsClient<$Result.GetResult<Prisma.$BudgetsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Budgets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetsFindFirstOrThrowArgs} args - Arguments to find a Budgets
     * @example
     * // Get one Budgets
     * const budgets = await prisma.budgets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BudgetsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BudgetsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BudgetsClient<$Result.GetResult<Prisma.$BudgetsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Budgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Budgets
     * const budgets = await prisma.budgets.findMany()
     * 
     * // Get first 10 Budgets
     * const budgets = await prisma.budgets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const budgetsWithIdOnly = await prisma.budgets.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BudgetsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BudgetsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Budgets.
     * @param {BudgetsCreateArgs} args - Arguments to create a Budgets.
     * @example
     * // Create one Budgets
     * const Budgets = await prisma.budgets.create({
     *   data: {
     *     // ... data to create a Budgets
     *   }
     * })
     * 
    **/
    create<T extends BudgetsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BudgetsCreateArgs<ExtArgs>>
    ): Prisma__BudgetsClient<$Result.GetResult<Prisma.$BudgetsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Budgets.
     *     @param {BudgetsCreateManyArgs} args - Arguments to create many Budgets.
     *     @example
     *     // Create many Budgets
     *     const budgets = await prisma.budgets.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BudgetsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BudgetsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Budgets.
     * @param {BudgetsDeleteArgs} args - Arguments to delete one Budgets.
     * @example
     * // Delete one Budgets
     * const Budgets = await prisma.budgets.delete({
     *   where: {
     *     // ... filter to delete one Budgets
     *   }
     * })
     * 
    **/
    delete<T extends BudgetsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BudgetsDeleteArgs<ExtArgs>>
    ): Prisma__BudgetsClient<$Result.GetResult<Prisma.$BudgetsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Budgets.
     * @param {BudgetsUpdateArgs} args - Arguments to update one Budgets.
     * @example
     * // Update one Budgets
     * const budgets = await prisma.budgets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BudgetsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BudgetsUpdateArgs<ExtArgs>>
    ): Prisma__BudgetsClient<$Result.GetResult<Prisma.$BudgetsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Budgets.
     * @param {BudgetsDeleteManyArgs} args - Arguments to filter Budgets to delete.
     * @example
     * // Delete a few Budgets
     * const { count } = await prisma.budgets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BudgetsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BudgetsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Budgets
     * const budgets = await prisma.budgets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BudgetsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BudgetsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Budgets.
     * @param {BudgetsUpsertArgs} args - Arguments to update or create a Budgets.
     * @example
     * // Update or create a Budgets
     * const budgets = await prisma.budgets.upsert({
     *   create: {
     *     // ... data to create a Budgets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Budgets we want to update
     *   }
     * })
    **/
    upsert<T extends BudgetsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BudgetsUpsertArgs<ExtArgs>>
    ): Prisma__BudgetsClient<$Result.GetResult<Prisma.$BudgetsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetsCountArgs} args - Arguments to filter Budgets to count.
     * @example
     * // Count the number of Budgets
     * const count = await prisma.budgets.count({
     *   where: {
     *     // ... the filter for the Budgets we want to count
     *   }
     * })
    **/
    count<T extends BudgetsCountArgs>(
      args?: Subset<T, BudgetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BudgetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BudgetsAggregateArgs>(args: Subset<T, BudgetsAggregateArgs>): Prisma.PrismaPromise<GetBudgetsAggregateType<T>>

    /**
     * Group by Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BudgetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BudgetsGroupByArgs['orderBy'] }
        : { orderBy?: BudgetsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BudgetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Budgets model
   */
  readonly fields: BudgetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Budgets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BudgetsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    servicesProvided<T extends Budgets$servicesProvidedArgs<ExtArgs> = {}>(args?: Subset<T, Budgets$servicesProvidedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceProvidedPayload<ExtArgs>, T, 'findMany'> | Null>;

    customer<T extends Budgets$customerArgs<ExtArgs> = {}>(args?: Subset<T, Budgets$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Budgets model
   */ 
  interface BudgetsFieldRefs {
    readonly id: FieldRef<"Budgets", 'String'>
    readonly servicePrice: FieldRef<"Budgets", 'String'>
    readonly serviceDescription: FieldRef<"Budgets", 'String'>
    readonly serviceStatus: FieldRef<"Budgets", 'ServiceStatus'>
    readonly paymentStatus: FieldRef<"Budgets", 'PaymentStatus'>
    readonly createdAt: FieldRef<"Budgets", 'DateTime'>
    readonly updatedAt: FieldRef<"Budgets", 'DateTime'>
    readonly customerId: FieldRef<"Budgets", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Budgets findUnique
   */
  export type BudgetsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budgets
     */
    select?: BudgetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BudgetsInclude<ExtArgs> | null
    /**
     * Filter, which Budgets to fetch.
     */
    where: BudgetsWhereUniqueInput
  }


  /**
   * Budgets findUniqueOrThrow
   */
  export type BudgetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budgets
     */
    select?: BudgetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BudgetsInclude<ExtArgs> | null
    /**
     * Filter, which Budgets to fetch.
     */
    where: BudgetsWhereUniqueInput
  }


  /**
   * Budgets findFirst
   */
  export type BudgetsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budgets
     */
    select?: BudgetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BudgetsInclude<ExtArgs> | null
    /**
     * Filter, which Budgets to fetch.
     */
    where?: BudgetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetsOrderByWithRelationInput | BudgetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetsScalarFieldEnum | BudgetsScalarFieldEnum[]
  }


  /**
   * Budgets findFirstOrThrow
   */
  export type BudgetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budgets
     */
    select?: BudgetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BudgetsInclude<ExtArgs> | null
    /**
     * Filter, which Budgets to fetch.
     */
    where?: BudgetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetsOrderByWithRelationInput | BudgetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetsScalarFieldEnum | BudgetsScalarFieldEnum[]
  }


  /**
   * Budgets findMany
   */
  export type BudgetsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budgets
     */
    select?: BudgetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BudgetsInclude<ExtArgs> | null
    /**
     * Filter, which Budgets to fetch.
     */
    where?: BudgetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetsOrderByWithRelationInput | BudgetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Budgets.
     */
    cursor?: BudgetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    distinct?: BudgetsScalarFieldEnum | BudgetsScalarFieldEnum[]
  }


  /**
   * Budgets create
   */
  export type BudgetsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budgets
     */
    select?: BudgetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BudgetsInclude<ExtArgs> | null
    /**
     * The data needed to create a Budgets.
     */
    data: XOR<BudgetsCreateInput, BudgetsUncheckedCreateInput>
  }


  /**
   * Budgets createMany
   */
  export type BudgetsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Budgets.
     */
    data: BudgetsCreateManyInput | BudgetsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Budgets update
   */
  export type BudgetsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budgets
     */
    select?: BudgetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BudgetsInclude<ExtArgs> | null
    /**
     * The data needed to update a Budgets.
     */
    data: XOR<BudgetsUpdateInput, BudgetsUncheckedUpdateInput>
    /**
     * Choose, which Budgets to update.
     */
    where: BudgetsWhereUniqueInput
  }


  /**
   * Budgets updateMany
   */
  export type BudgetsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Budgets.
     */
    data: XOR<BudgetsUpdateManyMutationInput, BudgetsUncheckedUpdateManyInput>
    /**
     * Filter which Budgets to update
     */
    where?: BudgetsWhereInput
  }


  /**
   * Budgets upsert
   */
  export type BudgetsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budgets
     */
    select?: BudgetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BudgetsInclude<ExtArgs> | null
    /**
     * The filter to search for the Budgets to update in case it exists.
     */
    where: BudgetsWhereUniqueInput
    /**
     * In case the Budgets found by the `where` argument doesn't exist, create a new Budgets with this data.
     */
    create: XOR<BudgetsCreateInput, BudgetsUncheckedCreateInput>
    /**
     * In case the Budgets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BudgetsUpdateInput, BudgetsUncheckedUpdateInput>
  }


  /**
   * Budgets delete
   */
  export type BudgetsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budgets
     */
    select?: BudgetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BudgetsInclude<ExtArgs> | null
    /**
     * Filter which Budgets to delete.
     */
    where: BudgetsWhereUniqueInput
  }


  /**
   * Budgets deleteMany
   */
  export type BudgetsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budgets to delete
     */
    where?: BudgetsWhereInput
  }


  /**
   * Budgets.servicesProvided
   */
  export type Budgets$servicesProvidedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvided
     */
    select?: ServiceProvidedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceProvidedInclude<ExtArgs> | null
    where?: ServiceProvidedWhereInput
    orderBy?: ServiceProvidedOrderByWithRelationInput | ServiceProvidedOrderByWithRelationInput[]
    cursor?: ServiceProvidedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceProvidedScalarFieldEnum | ServiceProvidedScalarFieldEnum[]
  }


  /**
   * Budgets.customer
   */
  export type Budgets$customerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }


  /**
   * Budgets without action
   */
  export type BudgetsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budgets
     */
    select?: BudgetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BudgetsInclude<ExtArgs> | null
  }



  /**
   * Model ServiceProvided
   */

  export type AggregateServiceProvided = {
    _count: ServiceProvidedCountAggregateOutputType | null
    _min: ServiceProvidedMinAggregateOutputType | null
    _max: ServiceProvidedMaxAggregateOutputType | null
  }

  export type ServiceProvidedMinAggregateOutputType = {
    id: string | null
    serviceStatus: $Enums.ServiceStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    customerId: string | null
    budgetId: string | null
    employeeId: string | null
  }

  export type ServiceProvidedMaxAggregateOutputType = {
    id: string | null
    serviceStatus: $Enums.ServiceStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    customerId: string | null
    budgetId: string | null
    employeeId: string | null
  }

  export type ServiceProvidedCountAggregateOutputType = {
    id: number
    serviceStatus: number
    paymentStatus: number
    customerId: number
    budgetId: number
    employeeId: number
    _all: number
  }


  export type ServiceProvidedMinAggregateInputType = {
    id?: true
    serviceStatus?: true
    paymentStatus?: true
    customerId?: true
    budgetId?: true
    employeeId?: true
  }

  export type ServiceProvidedMaxAggregateInputType = {
    id?: true
    serviceStatus?: true
    paymentStatus?: true
    customerId?: true
    budgetId?: true
    employeeId?: true
  }

  export type ServiceProvidedCountAggregateInputType = {
    id?: true
    serviceStatus?: true
    paymentStatus?: true
    customerId?: true
    budgetId?: true
    employeeId?: true
    _all?: true
  }

  export type ServiceProvidedAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceProvided to aggregate.
     */
    where?: ServiceProvidedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceProvideds to fetch.
     */
    orderBy?: ServiceProvidedOrderByWithRelationInput | ServiceProvidedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceProvidedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceProvideds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceProvideds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceProvideds
    **/
    _count?: true | ServiceProvidedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceProvidedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceProvidedMaxAggregateInputType
  }

  export type GetServiceProvidedAggregateType<T extends ServiceProvidedAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceProvided]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceProvided[P]>
      : GetScalarType<T[P], AggregateServiceProvided[P]>
  }




  export type ServiceProvidedGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ServiceProvidedWhereInput
    orderBy?: ServiceProvidedOrderByWithAggregationInput | ServiceProvidedOrderByWithAggregationInput[]
    by: ServiceProvidedScalarFieldEnum[] | ServiceProvidedScalarFieldEnum
    having?: ServiceProvidedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceProvidedCountAggregateInputType | true
    _min?: ServiceProvidedMinAggregateInputType
    _max?: ServiceProvidedMaxAggregateInputType
  }

  export type ServiceProvidedGroupByOutputType = {
    id: string
    serviceStatus: $Enums.ServiceStatus
    paymentStatus: $Enums.PaymentStatus
    customerId: string
    budgetId: string
    employeeId: string
    _count: ServiceProvidedCountAggregateOutputType | null
    _min: ServiceProvidedMinAggregateOutputType | null
    _max: ServiceProvidedMaxAggregateOutputType | null
  }

  type GetServiceProvidedGroupByPayload<T extends ServiceProvidedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceProvidedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceProvidedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceProvidedGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceProvidedGroupByOutputType[P]>
        }
      >
    >


  export type ServiceProvidedSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceStatus?: boolean
    paymentStatus?: boolean
    customerId?: boolean
    budgetId?: boolean
    employeeId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    budget?: boolean | BudgetsDefaultArgs<ExtArgs>
    employee?: boolean | EmployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceProvided"]>

  export type ServiceProvidedSelectScalar = {
    id?: boolean
    serviceStatus?: boolean
    paymentStatus?: boolean
    customerId?: boolean
    budgetId?: boolean
    employeeId?: boolean
  }

  export type ServiceProvidedInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    budget?: boolean | BudgetsDefaultArgs<ExtArgs>
    employee?: boolean | EmployeesDefaultArgs<ExtArgs>
  }


  export type $ServiceProvidedPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "ServiceProvided"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      budget: Prisma.$BudgetsPayload<ExtArgs>
      employee: Prisma.$EmployeesPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      serviceStatus: $Enums.ServiceStatus
      paymentStatus: $Enums.PaymentStatus
      customerId: string
      budgetId: string
      employeeId: string
    }, ExtArgs["result"]["serviceProvided"]>
    composites: {}
  }


  type ServiceProvidedGetPayload<S extends boolean | null | undefined | ServiceProvidedDefaultArgs> = $Result.GetResult<Prisma.$ServiceProvidedPayload, S>

  type ServiceProvidedCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ServiceProvidedFindManyArgs, 'select' | 'include'> & {
      select?: ServiceProvidedCountAggregateInputType | true
    }

  export interface ServiceProvidedDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceProvided'], meta: { name: 'ServiceProvided' } }
    /**
     * Find zero or one ServiceProvided that matches the filter.
     * @param {ServiceProvidedFindUniqueArgs} args - Arguments to find a ServiceProvided
     * @example
     * // Get one ServiceProvided
     * const serviceProvided = await prisma.serviceProvided.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ServiceProvidedFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceProvidedFindUniqueArgs<ExtArgs>>
    ): Prisma__ServiceProvidedClient<$Result.GetResult<Prisma.$ServiceProvidedPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ServiceProvided that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ServiceProvidedFindUniqueOrThrowArgs} args - Arguments to find a ServiceProvided
     * @example
     * // Get one ServiceProvided
     * const serviceProvided = await prisma.serviceProvided.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ServiceProvidedFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceProvidedFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ServiceProvidedClient<$Result.GetResult<Prisma.$ServiceProvidedPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ServiceProvided that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProvidedFindFirstArgs} args - Arguments to find a ServiceProvided
     * @example
     * // Get one ServiceProvided
     * const serviceProvided = await prisma.serviceProvided.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ServiceProvidedFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceProvidedFindFirstArgs<ExtArgs>>
    ): Prisma__ServiceProvidedClient<$Result.GetResult<Prisma.$ServiceProvidedPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ServiceProvided that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProvidedFindFirstOrThrowArgs} args - Arguments to find a ServiceProvided
     * @example
     * // Get one ServiceProvided
     * const serviceProvided = await prisma.serviceProvided.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ServiceProvidedFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceProvidedFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ServiceProvidedClient<$Result.GetResult<Prisma.$ServiceProvidedPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ServiceProvideds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProvidedFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceProvideds
     * const serviceProvideds = await prisma.serviceProvided.findMany()
     * 
     * // Get first 10 ServiceProvideds
     * const serviceProvideds = await prisma.serviceProvided.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceProvidedWithIdOnly = await prisma.serviceProvided.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ServiceProvidedFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceProvidedFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceProvidedPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ServiceProvided.
     * @param {ServiceProvidedCreateArgs} args - Arguments to create a ServiceProvided.
     * @example
     * // Create one ServiceProvided
     * const ServiceProvided = await prisma.serviceProvided.create({
     *   data: {
     *     // ... data to create a ServiceProvided
     *   }
     * })
     * 
    **/
    create<T extends ServiceProvidedCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceProvidedCreateArgs<ExtArgs>>
    ): Prisma__ServiceProvidedClient<$Result.GetResult<Prisma.$ServiceProvidedPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ServiceProvideds.
     *     @param {ServiceProvidedCreateManyArgs} args - Arguments to create many ServiceProvideds.
     *     @example
     *     // Create many ServiceProvideds
     *     const serviceProvided = await prisma.serviceProvided.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ServiceProvidedCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceProvidedCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServiceProvided.
     * @param {ServiceProvidedDeleteArgs} args - Arguments to delete one ServiceProvided.
     * @example
     * // Delete one ServiceProvided
     * const ServiceProvided = await prisma.serviceProvided.delete({
     *   where: {
     *     // ... filter to delete one ServiceProvided
     *   }
     * })
     * 
    **/
    delete<T extends ServiceProvidedDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceProvidedDeleteArgs<ExtArgs>>
    ): Prisma__ServiceProvidedClient<$Result.GetResult<Prisma.$ServiceProvidedPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ServiceProvided.
     * @param {ServiceProvidedUpdateArgs} args - Arguments to update one ServiceProvided.
     * @example
     * // Update one ServiceProvided
     * const serviceProvided = await prisma.serviceProvided.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ServiceProvidedUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceProvidedUpdateArgs<ExtArgs>>
    ): Prisma__ServiceProvidedClient<$Result.GetResult<Prisma.$ServiceProvidedPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ServiceProvideds.
     * @param {ServiceProvidedDeleteManyArgs} args - Arguments to filter ServiceProvideds to delete.
     * @example
     * // Delete a few ServiceProvideds
     * const { count } = await prisma.serviceProvided.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ServiceProvidedDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceProvidedDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceProvideds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProvidedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceProvideds
     * const serviceProvided = await prisma.serviceProvided.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ServiceProvidedUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceProvidedUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceProvided.
     * @param {ServiceProvidedUpsertArgs} args - Arguments to update or create a ServiceProvided.
     * @example
     * // Update or create a ServiceProvided
     * const serviceProvided = await prisma.serviceProvided.upsert({
     *   create: {
     *     // ... data to create a ServiceProvided
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceProvided we want to update
     *   }
     * })
    **/
    upsert<T extends ServiceProvidedUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceProvidedUpsertArgs<ExtArgs>>
    ): Prisma__ServiceProvidedClient<$Result.GetResult<Prisma.$ServiceProvidedPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ServiceProvideds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProvidedCountArgs} args - Arguments to filter ServiceProvideds to count.
     * @example
     * // Count the number of ServiceProvideds
     * const count = await prisma.serviceProvided.count({
     *   where: {
     *     // ... the filter for the ServiceProvideds we want to count
     *   }
     * })
    **/
    count<T extends ServiceProvidedCountArgs>(
      args?: Subset<T, ServiceProvidedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceProvidedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceProvided.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProvidedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceProvidedAggregateArgs>(args: Subset<T, ServiceProvidedAggregateArgs>): Prisma.PrismaPromise<GetServiceProvidedAggregateType<T>>

    /**
     * Group by ServiceProvided.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProvidedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceProvidedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceProvidedGroupByArgs['orderBy'] }
        : { orderBy?: ServiceProvidedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceProvidedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceProvidedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceProvided model
   */
  readonly fields: ServiceProvidedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceProvided.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceProvidedClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    budget<T extends BudgetsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BudgetsDefaultArgs<ExtArgs>>): Prisma__BudgetsClient<$Result.GetResult<Prisma.$BudgetsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    employee<T extends EmployeesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeesDefaultArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ServiceProvided model
   */ 
  interface ServiceProvidedFieldRefs {
    readonly id: FieldRef<"ServiceProvided", 'String'>
    readonly serviceStatus: FieldRef<"ServiceProvided", 'ServiceStatus'>
    readonly paymentStatus: FieldRef<"ServiceProvided", 'PaymentStatus'>
    readonly customerId: FieldRef<"ServiceProvided", 'String'>
    readonly budgetId: FieldRef<"ServiceProvided", 'String'>
    readonly employeeId: FieldRef<"ServiceProvided", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ServiceProvided findUnique
   */
  export type ServiceProvidedFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvided
     */
    select?: ServiceProvidedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceProvidedInclude<ExtArgs> | null
    /**
     * Filter, which ServiceProvided to fetch.
     */
    where: ServiceProvidedWhereUniqueInput
  }


  /**
   * ServiceProvided findUniqueOrThrow
   */
  export type ServiceProvidedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvided
     */
    select?: ServiceProvidedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceProvidedInclude<ExtArgs> | null
    /**
     * Filter, which ServiceProvided to fetch.
     */
    where: ServiceProvidedWhereUniqueInput
  }


  /**
   * ServiceProvided findFirst
   */
  export type ServiceProvidedFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvided
     */
    select?: ServiceProvidedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceProvidedInclude<ExtArgs> | null
    /**
     * Filter, which ServiceProvided to fetch.
     */
    where?: ServiceProvidedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceProvideds to fetch.
     */
    orderBy?: ServiceProvidedOrderByWithRelationInput | ServiceProvidedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceProvideds.
     */
    cursor?: ServiceProvidedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceProvideds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceProvideds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceProvideds.
     */
    distinct?: ServiceProvidedScalarFieldEnum | ServiceProvidedScalarFieldEnum[]
  }


  /**
   * ServiceProvided findFirstOrThrow
   */
  export type ServiceProvidedFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvided
     */
    select?: ServiceProvidedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceProvidedInclude<ExtArgs> | null
    /**
     * Filter, which ServiceProvided to fetch.
     */
    where?: ServiceProvidedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceProvideds to fetch.
     */
    orderBy?: ServiceProvidedOrderByWithRelationInput | ServiceProvidedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceProvideds.
     */
    cursor?: ServiceProvidedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceProvideds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceProvideds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceProvideds.
     */
    distinct?: ServiceProvidedScalarFieldEnum | ServiceProvidedScalarFieldEnum[]
  }


  /**
   * ServiceProvided findMany
   */
  export type ServiceProvidedFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvided
     */
    select?: ServiceProvidedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceProvidedInclude<ExtArgs> | null
    /**
     * Filter, which ServiceProvideds to fetch.
     */
    where?: ServiceProvidedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceProvideds to fetch.
     */
    orderBy?: ServiceProvidedOrderByWithRelationInput | ServiceProvidedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceProvideds.
     */
    cursor?: ServiceProvidedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceProvideds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceProvideds.
     */
    skip?: number
    distinct?: ServiceProvidedScalarFieldEnum | ServiceProvidedScalarFieldEnum[]
  }


  /**
   * ServiceProvided create
   */
  export type ServiceProvidedCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvided
     */
    select?: ServiceProvidedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceProvidedInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceProvided.
     */
    data: XOR<ServiceProvidedCreateInput, ServiceProvidedUncheckedCreateInput>
  }


  /**
   * ServiceProvided createMany
   */
  export type ServiceProvidedCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceProvideds.
     */
    data: ServiceProvidedCreateManyInput | ServiceProvidedCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ServiceProvided update
   */
  export type ServiceProvidedUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvided
     */
    select?: ServiceProvidedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceProvidedInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceProvided.
     */
    data: XOR<ServiceProvidedUpdateInput, ServiceProvidedUncheckedUpdateInput>
    /**
     * Choose, which ServiceProvided to update.
     */
    where: ServiceProvidedWhereUniqueInput
  }


  /**
   * ServiceProvided updateMany
   */
  export type ServiceProvidedUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceProvideds.
     */
    data: XOR<ServiceProvidedUpdateManyMutationInput, ServiceProvidedUncheckedUpdateManyInput>
    /**
     * Filter which ServiceProvideds to update
     */
    where?: ServiceProvidedWhereInput
  }


  /**
   * ServiceProvided upsert
   */
  export type ServiceProvidedUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvided
     */
    select?: ServiceProvidedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceProvidedInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceProvided to update in case it exists.
     */
    where: ServiceProvidedWhereUniqueInput
    /**
     * In case the ServiceProvided found by the `where` argument doesn't exist, create a new ServiceProvided with this data.
     */
    create: XOR<ServiceProvidedCreateInput, ServiceProvidedUncheckedCreateInput>
    /**
     * In case the ServiceProvided was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceProvidedUpdateInput, ServiceProvidedUncheckedUpdateInput>
  }


  /**
   * ServiceProvided delete
   */
  export type ServiceProvidedDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvided
     */
    select?: ServiceProvidedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceProvidedInclude<ExtArgs> | null
    /**
     * Filter which ServiceProvided to delete.
     */
    where: ServiceProvidedWhereUniqueInput
  }


  /**
   * ServiceProvided deleteMany
   */
  export type ServiceProvidedDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceProvideds to delete
     */
    where?: ServiceProvidedWhereInput
  }


  /**
   * ServiceProvided without action
   */
  export type ServiceProvidedDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvided
     */
    select?: ServiceProvidedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceProvidedInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustomerScalarFieldEnum: {
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

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const EmployeesScalarFieldEnum: {
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

  export type EmployeesScalarFieldEnum = (typeof EmployeesScalarFieldEnum)[keyof typeof EmployeesScalarFieldEnum]


  export const DepartmentsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartmentsScalarFieldEnum = (typeof DepartmentsScalarFieldEnum)[keyof typeof DepartmentsScalarFieldEnum]


  export const DeptEmployeeScalarFieldEnum: {
    guid_deptEmp: 'guid_deptEmp',
    employeeId: 'employeeId',
    deptId: 'deptId'
  };

  export type DeptEmployeeScalarFieldEnum = (typeof DeptEmployeeScalarFieldEnum)[keyof typeof DeptEmployeeScalarFieldEnum]


  export const BudgetsScalarFieldEnum: {
    id: 'id',
    servicePrice: 'servicePrice',
    serviceDescription: 'serviceDescription',
    serviceStatus: 'serviceStatus',
    paymentStatus: 'paymentStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    customerId: 'customerId'
  };

  export type BudgetsScalarFieldEnum = (typeof BudgetsScalarFieldEnum)[keyof typeof BudgetsScalarFieldEnum]


  export const ServiceProvidedScalarFieldEnum: {
    id: 'id',
    serviceStatus: 'serviceStatus',
    paymentStatus: 'paymentStatus',
    customerId: 'customerId',
    budgetId: 'budgetId',
    employeeId: 'employeeId'
  };

  export type ServiceProvidedScalarFieldEnum = (typeof ServiceProvidedScalarFieldEnum)[keyof typeof ServiceProvidedScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'RoleLevel'
   */
  export type EnumRoleLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleLevel'>
    


  /**
   * Reference to a field of type 'DeptAreas'
   */
  export type EnumDeptAreasFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeptAreas'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ServiceStatus'
   */
  export type EnumServiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    firstName?: StringFilter<"Customer"> | string
    lastName?: StringFilter<"Customer"> | string
    birthDate?: DateTimeFilter<"Customer"> | Date | string
    email?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    address?: StringFilter<"Customer"> | string
    roleLevel?: EnumRoleLevelNullableFilter<"Customer"> | $Enums.RoleLevel | null
    password?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    budgets?: BudgetsListRelationFilter
    serviceProvided?: ServiceProvidedListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    roleLevel?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    budgets?: BudgetsOrderByRelationAggregateInput
    serviceProvided?: ServiceProvidedOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    firstName?: StringFilter<"Customer"> | string
    lastName?: StringFilter<"Customer"> | string
    birthDate?: DateTimeFilter<"Customer"> | Date | string
    phone?: StringFilter<"Customer"> | string
    address?: StringFilter<"Customer"> | string
    roleLevel?: EnumRoleLevelNullableFilter<"Customer"> | $Enums.RoleLevel | null
    password?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    budgets?: BudgetsListRelationFilter
    serviceProvided?: ServiceProvidedListRelationFilter
  }, "id" | "email">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    roleLevel?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    firstName?: StringWithAggregatesFilter<"Customer"> | string
    lastName?: StringWithAggregatesFilter<"Customer"> | string
    birthDate?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringWithAggregatesFilter<"Customer"> | string
    address?: StringWithAggregatesFilter<"Customer"> | string
    roleLevel?: EnumRoleLevelNullableWithAggregatesFilter<"Customer"> | $Enums.RoleLevel | null
    password?: StringWithAggregatesFilter<"Customer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type EmployeesWhereInput = {
    AND?: EmployeesWhereInput | EmployeesWhereInput[]
    OR?: EmployeesWhereInput[]
    NOT?: EmployeesWhereInput | EmployeesWhereInput[]
    id?: StringFilter<"Employees"> | string
    firstName?: StringFilter<"Employees"> | string
    lastName?: StringFilter<"Employees"> | string
    birthDate?: DateTimeFilter<"Employees"> | Date | string
    hireDate?: DateTimeFilter<"Employees"> | Date | string
    email?: StringFilter<"Employees"> | string
    phone?: StringFilter<"Employees"> | string
    address?: StringFilter<"Employees"> | string
    wage?: StringFilter<"Employees"> | string
    role?: StringFilter<"Employees"> | string
    roleLevel?: EnumRoleLevelNullableFilter<"Employees"> | $Enums.RoleLevel | null
    positionTitle?: StringFilter<"Employees"> | string
    password?: StringFilter<"Employees"> | string
    createdAt?: DateTimeFilter<"Employees"> | Date | string
    updatedAt?: DateTimeFilter<"Employees"> | Date | string
    department?: StringNullableFilter<"Employees"> | string | null
    serviceProvided?: ServiceProvidedListRelationFilter
    departments?: DeptEmployeeListRelationFilter
  }

  export type EmployeesOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    hireDate?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    wage?: SortOrder
    role?: SortOrder
    roleLevel?: SortOrderInput | SortOrder
    positionTitle?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: SortOrderInput | SortOrder
    serviceProvided?: ServiceProvidedOrderByRelationAggregateInput
    departments?: DeptEmployeeOrderByRelationAggregateInput
  }

  export type EmployeesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: EmployeesWhereInput | EmployeesWhereInput[]
    OR?: EmployeesWhereInput[]
    NOT?: EmployeesWhereInput | EmployeesWhereInput[]
    firstName?: StringFilter<"Employees"> | string
    lastName?: StringFilter<"Employees"> | string
    birthDate?: DateTimeFilter<"Employees"> | Date | string
    hireDate?: DateTimeFilter<"Employees"> | Date | string
    phone?: StringFilter<"Employees"> | string
    address?: StringFilter<"Employees"> | string
    wage?: StringFilter<"Employees"> | string
    role?: StringFilter<"Employees"> | string
    roleLevel?: EnumRoleLevelNullableFilter<"Employees"> | $Enums.RoleLevel | null
    positionTitle?: StringFilter<"Employees"> | string
    password?: StringFilter<"Employees"> | string
    createdAt?: DateTimeFilter<"Employees"> | Date | string
    updatedAt?: DateTimeFilter<"Employees"> | Date | string
    department?: StringNullableFilter<"Employees"> | string | null
    serviceProvided?: ServiceProvidedListRelationFilter
    departments?: DeptEmployeeListRelationFilter
  }, "id" | "email">

  export type EmployeesOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    hireDate?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    wage?: SortOrder
    role?: SortOrder
    roleLevel?: SortOrderInput | SortOrder
    positionTitle?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: SortOrderInput | SortOrder
    _count?: EmployeesCountOrderByAggregateInput
    _max?: EmployeesMaxOrderByAggregateInput
    _min?: EmployeesMinOrderByAggregateInput
  }

  export type EmployeesScalarWhereWithAggregatesInput = {
    AND?: EmployeesScalarWhereWithAggregatesInput | EmployeesScalarWhereWithAggregatesInput[]
    OR?: EmployeesScalarWhereWithAggregatesInput[]
    NOT?: EmployeesScalarWhereWithAggregatesInput | EmployeesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employees"> | string
    firstName?: StringWithAggregatesFilter<"Employees"> | string
    lastName?: StringWithAggregatesFilter<"Employees"> | string
    birthDate?: DateTimeWithAggregatesFilter<"Employees"> | Date | string
    hireDate?: DateTimeWithAggregatesFilter<"Employees"> | Date | string
    email?: StringWithAggregatesFilter<"Employees"> | string
    phone?: StringWithAggregatesFilter<"Employees"> | string
    address?: StringWithAggregatesFilter<"Employees"> | string
    wage?: StringWithAggregatesFilter<"Employees"> | string
    role?: StringWithAggregatesFilter<"Employees"> | string
    roleLevel?: EnumRoleLevelNullableWithAggregatesFilter<"Employees"> | $Enums.RoleLevel | null
    positionTitle?: StringWithAggregatesFilter<"Employees"> | string
    password?: StringWithAggregatesFilter<"Employees"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Employees"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employees"> | Date | string
    department?: StringNullableWithAggregatesFilter<"Employees"> | string | null
  }

  export type DepartmentsWhereInput = {
    AND?: DepartmentsWhereInput | DepartmentsWhereInput[]
    OR?: DepartmentsWhereInput[]
    NOT?: DepartmentsWhereInput | DepartmentsWhereInput[]
    id?: StringFilter<"Departments"> | string
    name?: EnumDeptAreasFilter<"Departments"> | $Enums.DeptAreas
    isActive?: BoolFilter<"Departments"> | boolean
    createdAt?: DateTimeFilter<"Departments"> | Date | string
    updatedAt?: DateTimeFilter<"Departments"> | Date | string
    employees?: DeptEmployeeListRelationFilter
  }

  export type DepartmentsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employees?: DeptEmployeeOrderByRelationAggregateInput
  }

  export type DepartmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepartmentsWhereInput | DepartmentsWhereInput[]
    OR?: DepartmentsWhereInput[]
    NOT?: DepartmentsWhereInput | DepartmentsWhereInput[]
    name?: EnumDeptAreasFilter<"Departments"> | $Enums.DeptAreas
    isActive?: BoolFilter<"Departments"> | boolean
    createdAt?: DateTimeFilter<"Departments"> | Date | string
    updatedAt?: DateTimeFilter<"Departments"> | Date | string
    employees?: DeptEmployeeListRelationFilter
  }, "id">

  export type DepartmentsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepartmentsCountOrderByAggregateInput
    _max?: DepartmentsMaxOrderByAggregateInput
    _min?: DepartmentsMinOrderByAggregateInput
  }

  export type DepartmentsScalarWhereWithAggregatesInput = {
    AND?: DepartmentsScalarWhereWithAggregatesInput | DepartmentsScalarWhereWithAggregatesInput[]
    OR?: DepartmentsScalarWhereWithAggregatesInput[]
    NOT?: DepartmentsScalarWhereWithAggregatesInput | DepartmentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Departments"> | string
    name?: EnumDeptAreasWithAggregatesFilter<"Departments"> | $Enums.DeptAreas
    isActive?: BoolWithAggregatesFilter<"Departments"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Departments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Departments"> | Date | string
  }

  export type DeptEmployeeWhereInput = {
    AND?: DeptEmployeeWhereInput | DeptEmployeeWhereInput[]
    OR?: DeptEmployeeWhereInput[]
    NOT?: DeptEmployeeWhereInput | DeptEmployeeWhereInput[]
    guid_deptEmp?: StringFilter<"DeptEmployee"> | string
    employeeId?: StringFilter<"DeptEmployee"> | string
    deptId?: StringFilter<"DeptEmployee"> | string
    employee?: XOR<EmployeesRelationFilter, EmployeesWhereInput>
    departments?: XOR<DepartmentsRelationFilter, DepartmentsWhereInput>
  }

  export type DeptEmployeeOrderByWithRelationInput = {
    guid_deptEmp?: SortOrder
    employeeId?: SortOrder
    deptId?: SortOrder
    employee?: EmployeesOrderByWithRelationInput
    departments?: DepartmentsOrderByWithRelationInput
  }

  export type DeptEmployeeWhereUniqueInput = Prisma.AtLeast<{
    guid_deptEmp?: string
    AND?: DeptEmployeeWhereInput | DeptEmployeeWhereInput[]
    OR?: DeptEmployeeWhereInput[]
    NOT?: DeptEmployeeWhereInput | DeptEmployeeWhereInput[]
    employeeId?: StringFilter<"DeptEmployee"> | string
    deptId?: StringFilter<"DeptEmployee"> | string
    employee?: XOR<EmployeesRelationFilter, EmployeesWhereInput>
    departments?: XOR<DepartmentsRelationFilter, DepartmentsWhereInput>
  }, "guid_deptEmp">

  export type DeptEmployeeOrderByWithAggregationInput = {
    guid_deptEmp?: SortOrder
    employeeId?: SortOrder
    deptId?: SortOrder
    _count?: DeptEmployeeCountOrderByAggregateInput
    _max?: DeptEmployeeMaxOrderByAggregateInput
    _min?: DeptEmployeeMinOrderByAggregateInput
  }

  export type DeptEmployeeScalarWhereWithAggregatesInput = {
    AND?: DeptEmployeeScalarWhereWithAggregatesInput | DeptEmployeeScalarWhereWithAggregatesInput[]
    OR?: DeptEmployeeScalarWhereWithAggregatesInput[]
    NOT?: DeptEmployeeScalarWhereWithAggregatesInput | DeptEmployeeScalarWhereWithAggregatesInput[]
    guid_deptEmp?: StringWithAggregatesFilter<"DeptEmployee"> | string
    employeeId?: StringWithAggregatesFilter<"DeptEmployee"> | string
    deptId?: StringWithAggregatesFilter<"DeptEmployee"> | string
  }

  export type BudgetsWhereInput = {
    AND?: BudgetsWhereInput | BudgetsWhereInput[]
    OR?: BudgetsWhereInput[]
    NOT?: BudgetsWhereInput | BudgetsWhereInput[]
    id?: StringFilter<"Budgets"> | string
    servicePrice?: StringFilter<"Budgets"> | string
    serviceDescription?: StringFilter<"Budgets"> | string
    serviceStatus?: EnumServiceStatusNullableFilter<"Budgets"> | $Enums.ServiceStatus | null
    paymentStatus?: EnumPaymentStatusNullableFilter<"Budgets"> | $Enums.PaymentStatus | null
    createdAt?: DateTimeFilter<"Budgets"> | Date | string
    updatedAt?: DateTimeFilter<"Budgets"> | Date | string
    customerId?: StringNullableFilter<"Budgets"> | string | null
    servicesProvided?: ServiceProvidedListRelationFilter
    customer?: XOR<CustomerNullableRelationFilter, CustomerWhereInput> | null
  }

  export type BudgetsOrderByWithRelationInput = {
    id?: SortOrder
    servicePrice?: SortOrder
    serviceDescription?: SortOrder
    serviceStatus?: SortOrderInput | SortOrder
    paymentStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrderInput | SortOrder
    servicesProvided?: ServiceProvidedOrderByRelationAggregateInput
    customer?: CustomerOrderByWithRelationInput
  }

  export type BudgetsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BudgetsWhereInput | BudgetsWhereInput[]
    OR?: BudgetsWhereInput[]
    NOT?: BudgetsWhereInput | BudgetsWhereInput[]
    servicePrice?: StringFilter<"Budgets"> | string
    serviceDescription?: StringFilter<"Budgets"> | string
    serviceStatus?: EnumServiceStatusNullableFilter<"Budgets"> | $Enums.ServiceStatus | null
    paymentStatus?: EnumPaymentStatusNullableFilter<"Budgets"> | $Enums.PaymentStatus | null
    createdAt?: DateTimeFilter<"Budgets"> | Date | string
    updatedAt?: DateTimeFilter<"Budgets"> | Date | string
    customerId?: StringNullableFilter<"Budgets"> | string | null
    servicesProvided?: ServiceProvidedListRelationFilter
    customer?: XOR<CustomerNullableRelationFilter, CustomerWhereInput> | null
  }, "id">

  export type BudgetsOrderByWithAggregationInput = {
    id?: SortOrder
    servicePrice?: SortOrder
    serviceDescription?: SortOrder
    serviceStatus?: SortOrderInput | SortOrder
    paymentStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrderInput | SortOrder
    _count?: BudgetsCountOrderByAggregateInput
    _max?: BudgetsMaxOrderByAggregateInput
    _min?: BudgetsMinOrderByAggregateInput
  }

  export type BudgetsScalarWhereWithAggregatesInput = {
    AND?: BudgetsScalarWhereWithAggregatesInput | BudgetsScalarWhereWithAggregatesInput[]
    OR?: BudgetsScalarWhereWithAggregatesInput[]
    NOT?: BudgetsScalarWhereWithAggregatesInput | BudgetsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Budgets"> | string
    servicePrice?: StringWithAggregatesFilter<"Budgets"> | string
    serviceDescription?: StringWithAggregatesFilter<"Budgets"> | string
    serviceStatus?: EnumServiceStatusNullableWithAggregatesFilter<"Budgets"> | $Enums.ServiceStatus | null
    paymentStatus?: EnumPaymentStatusNullableWithAggregatesFilter<"Budgets"> | $Enums.PaymentStatus | null
    createdAt?: DateTimeWithAggregatesFilter<"Budgets"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Budgets"> | Date | string
    customerId?: StringNullableWithAggregatesFilter<"Budgets"> | string | null
  }

  export type ServiceProvidedWhereInput = {
    AND?: ServiceProvidedWhereInput | ServiceProvidedWhereInput[]
    OR?: ServiceProvidedWhereInput[]
    NOT?: ServiceProvidedWhereInput | ServiceProvidedWhereInput[]
    id?: StringFilter<"ServiceProvided"> | string
    serviceStatus?: EnumServiceStatusFilter<"ServiceProvided"> | $Enums.ServiceStatus
    paymentStatus?: EnumPaymentStatusFilter<"ServiceProvided"> | $Enums.PaymentStatus
    customerId?: StringFilter<"ServiceProvided"> | string
    budgetId?: StringFilter<"ServiceProvided"> | string
    employeeId?: StringFilter<"ServiceProvided"> | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    budget?: XOR<BudgetsRelationFilter, BudgetsWhereInput>
    employee?: XOR<EmployeesRelationFilter, EmployeesWhereInput>
  }

  export type ServiceProvidedOrderByWithRelationInput = {
    id?: SortOrder
    serviceStatus?: SortOrder
    paymentStatus?: SortOrder
    customerId?: SortOrder
    budgetId?: SortOrder
    employeeId?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    budget?: BudgetsOrderByWithRelationInput
    employee?: EmployeesOrderByWithRelationInput
  }

  export type ServiceProvidedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceProvidedWhereInput | ServiceProvidedWhereInput[]
    OR?: ServiceProvidedWhereInput[]
    NOT?: ServiceProvidedWhereInput | ServiceProvidedWhereInput[]
    serviceStatus?: EnumServiceStatusFilter<"ServiceProvided"> | $Enums.ServiceStatus
    paymentStatus?: EnumPaymentStatusFilter<"ServiceProvided"> | $Enums.PaymentStatus
    customerId?: StringFilter<"ServiceProvided"> | string
    budgetId?: StringFilter<"ServiceProvided"> | string
    employeeId?: StringFilter<"ServiceProvided"> | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    budget?: XOR<BudgetsRelationFilter, BudgetsWhereInput>
    employee?: XOR<EmployeesRelationFilter, EmployeesWhereInput>
  }, "id">

  export type ServiceProvidedOrderByWithAggregationInput = {
    id?: SortOrder
    serviceStatus?: SortOrder
    paymentStatus?: SortOrder
    customerId?: SortOrder
    budgetId?: SortOrder
    employeeId?: SortOrder
    _count?: ServiceProvidedCountOrderByAggregateInput
    _max?: ServiceProvidedMaxOrderByAggregateInput
    _min?: ServiceProvidedMinOrderByAggregateInput
  }

  export type ServiceProvidedScalarWhereWithAggregatesInput = {
    AND?: ServiceProvidedScalarWhereWithAggregatesInput | ServiceProvidedScalarWhereWithAggregatesInput[]
    OR?: ServiceProvidedScalarWhereWithAggregatesInput[]
    NOT?: ServiceProvidedScalarWhereWithAggregatesInput | ServiceProvidedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceProvided"> | string
    serviceStatus?: EnumServiceStatusWithAggregatesFilter<"ServiceProvided"> | $Enums.ServiceStatus
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"ServiceProvided"> | $Enums.PaymentStatus
    customerId?: StringWithAggregatesFilter<"ServiceProvided"> | string
    budgetId?: StringWithAggregatesFilter<"ServiceProvided"> | string
    employeeId?: StringWithAggregatesFilter<"ServiceProvided"> | string
  }

  export type CustomerCreateInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate: Date | string
    email: string
    phone: string
    address: string
    roleLevel?: $Enums.RoleLevel | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    budgets?: BudgetsCreateNestedManyWithoutCustomerInput
    serviceProvided?: ServiceProvidedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate: Date | string
    email: string
    phone: string
    address: string
    roleLevel?: $Enums.RoleLevel | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    budgets?: BudgetsUncheckedCreateNestedManyWithoutCustomerInput
    serviceProvided?: ServiceProvidedUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    roleLevel?: NullableEnumRoleLevelFieldUpdateOperationsInput | $Enums.RoleLevel | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    budgets?: BudgetsUpdateManyWithoutCustomerNestedInput
    serviceProvided?: ServiceProvidedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    roleLevel?: NullableEnumRoleLevelFieldUpdateOperationsInput | $Enums.RoleLevel | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    budgets?: BudgetsUncheckedUpdateManyWithoutCustomerNestedInput
    serviceProvided?: ServiceProvidedUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate: Date | string
    email: string
    phone: string
    address: string
    roleLevel?: $Enums.RoleLevel | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    roleLevel?: NullableEnumRoleLevelFieldUpdateOperationsInput | $Enums.RoleLevel | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    roleLevel?: NullableEnumRoleLevelFieldUpdateOperationsInput | $Enums.RoleLevel | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeesCreateInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate: Date | string
    hireDate: Date | string
    email: string
    phone: string
    address: string
    wage: string
    role: string
    roleLevel?: $Enums.RoleLevel | null
    positionTitle: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: string | null
    serviceProvided?: ServiceProvidedCreateNestedManyWithoutEmployeeInput
    departments?: DeptEmployeeCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeesUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate: Date | string
    hireDate: Date | string
    email: string
    phone: string
    address: string
    wage: string
    role: string
    roleLevel?: $Enums.RoleLevel | null
    positionTitle: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: string | null
    serviceProvided?: ServiceProvidedUncheckedCreateNestedManyWithoutEmployeeInput
    departments?: DeptEmployeeUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    wage?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    roleLevel?: NullableEnumRoleLevelFieldUpdateOperationsInput | $Enums.RoleLevel | null
    positionTitle?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    serviceProvided?: ServiceProvidedUpdateManyWithoutEmployeeNestedInput
    departments?: DeptEmployeeUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    wage?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    roleLevel?: NullableEnumRoleLevelFieldUpdateOperationsInput | $Enums.RoleLevel | null
    positionTitle?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    serviceProvided?: ServiceProvidedUncheckedUpdateManyWithoutEmployeeNestedInput
    departments?: DeptEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeesCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate: Date | string
    hireDate: Date | string
    email: string
    phone: string
    address: string
    wage: string
    role: string
    roleLevel?: $Enums.RoleLevel | null
    positionTitle: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: string | null
  }

  export type EmployeesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    wage?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    roleLevel?: NullableEnumRoleLevelFieldUpdateOperationsInput | $Enums.RoleLevel | null
    positionTitle?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    wage?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    roleLevel?: NullableEnumRoleLevelFieldUpdateOperationsInput | $Enums.RoleLevel | null
    positionTitle?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DepartmentsCreateInput = {
    id?: string
    name: $Enums.DeptAreas
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: DeptEmployeeCreateNestedManyWithoutDepartmentsInput
  }

  export type DepartmentsUncheckedCreateInput = {
    id?: string
    name: $Enums.DeptAreas
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: DeptEmployeeUncheckedCreateNestedManyWithoutDepartmentsInput
  }

  export type DepartmentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumDeptAreasFieldUpdateOperationsInput | $Enums.DeptAreas
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: DeptEmployeeUpdateManyWithoutDepartmentsNestedInput
  }

  export type DepartmentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumDeptAreasFieldUpdateOperationsInput | $Enums.DeptAreas
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: DeptEmployeeUncheckedUpdateManyWithoutDepartmentsNestedInput
  }

  export type DepartmentsCreateManyInput = {
    id?: string
    name: $Enums.DeptAreas
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumDeptAreasFieldUpdateOperationsInput | $Enums.DeptAreas
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumDeptAreasFieldUpdateOperationsInput | $Enums.DeptAreas
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeptEmployeeCreateInput = {
    guid_deptEmp?: string
    employee: EmployeesCreateNestedOneWithoutDepartmentsInput
    departments: DepartmentsCreateNestedOneWithoutEmployeesInput
  }

  export type DeptEmployeeUncheckedCreateInput = {
    guid_deptEmp?: string
    employeeId: string
    deptId: string
  }

  export type DeptEmployeeUpdateInput = {
    guid_deptEmp?: StringFieldUpdateOperationsInput | string
    employee?: EmployeesUpdateOneRequiredWithoutDepartmentsNestedInput
    departments?: DepartmentsUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type DeptEmployeeUncheckedUpdateInput = {
    guid_deptEmp?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    deptId?: StringFieldUpdateOperationsInput | string
  }

  export type DeptEmployeeCreateManyInput = {
    guid_deptEmp?: string
    employeeId: string
    deptId: string
  }

  export type DeptEmployeeUpdateManyMutationInput = {
    guid_deptEmp?: StringFieldUpdateOperationsInput | string
  }

  export type DeptEmployeeUncheckedUpdateManyInput = {
    guid_deptEmp?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    deptId?: StringFieldUpdateOperationsInput | string
  }

  export type BudgetsCreateInput = {
    id?: string
    servicePrice: string
    serviceDescription: string
    serviceStatus?: $Enums.ServiceStatus | null
    paymentStatus?: $Enums.PaymentStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesProvided?: ServiceProvidedCreateNestedManyWithoutBudgetInput
    customer?: CustomerCreateNestedOneWithoutBudgetsInput
  }

  export type BudgetsUncheckedCreateInput = {
    id?: string
    servicePrice: string
    serviceDescription: string
    serviceStatus?: $Enums.ServiceStatus | null
    paymentStatus?: $Enums.PaymentStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerId?: string | null
    servicesProvided?: ServiceProvidedUncheckedCreateNestedManyWithoutBudgetInput
  }

  export type BudgetsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicePrice?: StringFieldUpdateOperationsInput | string
    serviceDescription?: StringFieldUpdateOperationsInput | string
    serviceStatus?: NullableEnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus | null
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesProvided?: ServiceProvidedUpdateManyWithoutBudgetNestedInput
    customer?: CustomerUpdateOneWithoutBudgetsNestedInput
  }

  export type BudgetsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicePrice?: StringFieldUpdateOperationsInput | string
    serviceDescription?: StringFieldUpdateOperationsInput | string
    serviceStatus?: NullableEnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus | null
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    servicesProvided?: ServiceProvidedUncheckedUpdateManyWithoutBudgetNestedInput
  }

  export type BudgetsCreateManyInput = {
    id?: string
    servicePrice: string
    serviceDescription: string
    serviceStatus?: $Enums.ServiceStatus | null
    paymentStatus?: $Enums.PaymentStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerId?: string | null
  }

  export type BudgetsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicePrice?: StringFieldUpdateOperationsInput | string
    serviceDescription?: StringFieldUpdateOperationsInput | string
    serviceStatus?: NullableEnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus | null
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicePrice?: StringFieldUpdateOperationsInput | string
    serviceDescription?: StringFieldUpdateOperationsInput | string
    serviceStatus?: NullableEnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus | null
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceProvidedCreateInput = {
    id?: string
    serviceStatus: $Enums.ServiceStatus
    paymentStatus: $Enums.PaymentStatus
    customer: CustomerCreateNestedOneWithoutServiceProvidedInput
    budget: BudgetsCreateNestedOneWithoutServicesProvidedInput
    employee: EmployeesCreateNestedOneWithoutServiceProvidedInput
  }

  export type ServiceProvidedUncheckedCreateInput = {
    id?: string
    serviceStatus: $Enums.ServiceStatus
    paymentStatus: $Enums.PaymentStatus
    customerId: string
    budgetId: string
    employeeId: string
  }

  export type ServiceProvidedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceStatus?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    customer?: CustomerUpdateOneRequiredWithoutServiceProvidedNestedInput
    budget?: BudgetsUpdateOneRequiredWithoutServicesProvidedNestedInput
    employee?: EmployeesUpdateOneRequiredWithoutServiceProvidedNestedInput
  }

  export type ServiceProvidedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceStatus?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    customerId?: StringFieldUpdateOperationsInput | string
    budgetId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceProvidedCreateManyInput = {
    id?: string
    serviceStatus: $Enums.ServiceStatus
    paymentStatus: $Enums.PaymentStatus
    customerId: string
    budgetId: string
    employeeId: string
  }

  export type ServiceProvidedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceStatus?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type ServiceProvidedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceStatus?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    customerId?: StringFieldUpdateOperationsInput | string
    budgetId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleLevel | EnumRoleLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.RoleLevel[] | null
    notIn?: $Enums.RoleLevel[] | null
    not?: NestedEnumRoleLevelNullableFilter<$PrismaModel> | $Enums.RoleLevel | null
  }

  export type BudgetsListRelationFilter = {
    every?: BudgetsWhereInput
    some?: BudgetsWhereInput
    none?: BudgetsWhereInput
  }

  export type ServiceProvidedListRelationFilter = {
    every?: ServiceProvidedWhereInput
    some?: ServiceProvidedWhereInput
    none?: ServiceProvidedWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BudgetsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceProvidedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    roleLevel?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    roleLevel?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    roleLevel?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleLevel | EnumRoleLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.RoleLevel[] | null
    notIn?: $Enums.RoleLevel[] | null
    not?: NestedEnumRoleLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.RoleLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleLevelNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DeptEmployeeListRelationFilter = {
    every?: DeptEmployeeWhereInput
    some?: DeptEmployeeWhereInput
    none?: DeptEmployeeWhereInput
  }

  export type DeptEmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeesCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    hireDate?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    wage?: SortOrder
    role?: SortOrder
    roleLevel?: SortOrder
    positionTitle?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: SortOrder
  }

  export type EmployeesMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    hireDate?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    wage?: SortOrder
    role?: SortOrder
    roleLevel?: SortOrder
    positionTitle?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: SortOrder
  }

  export type EmployeesMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    hireDate?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    wage?: SortOrder
    role?: SortOrder
    roleLevel?: SortOrder
    positionTitle?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumDeptAreasFilter<$PrismaModel = never> = {
    equals?: $Enums.DeptAreas | EnumDeptAreasFieldRefInput<$PrismaModel>
    in?: $Enums.DeptAreas[]
    notIn?: $Enums.DeptAreas[]
    not?: NestedEnumDeptAreasFilter<$PrismaModel> | $Enums.DeptAreas
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DepartmentsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDeptAreasWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeptAreas | EnumDeptAreasFieldRefInput<$PrismaModel>
    in?: $Enums.DeptAreas[]
    notIn?: $Enums.DeptAreas[]
    not?: NestedEnumDeptAreasWithAggregatesFilter<$PrismaModel> | $Enums.DeptAreas
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeptAreasFilter<$PrismaModel>
    _max?: NestedEnumDeptAreasFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EmployeesRelationFilter = {
    is?: EmployeesWhereInput
    isNot?: EmployeesWhereInput
  }

  export type DepartmentsRelationFilter = {
    is?: DepartmentsWhereInput
    isNot?: DepartmentsWhereInput
  }

  export type DeptEmployeeCountOrderByAggregateInput = {
    guid_deptEmp?: SortOrder
    employeeId?: SortOrder
    deptId?: SortOrder
  }

  export type DeptEmployeeMaxOrderByAggregateInput = {
    guid_deptEmp?: SortOrder
    employeeId?: SortOrder
    deptId?: SortOrder
  }

  export type DeptEmployeeMinOrderByAggregateInput = {
    guid_deptEmp?: SortOrder
    employeeId?: SortOrder
    deptId?: SortOrder
  }

  export type EnumServiceStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ServiceStatus[] | null
    notIn?: $Enums.ServiceStatus[] | null
    not?: NestedEnumServiceStatusNullableFilter<$PrismaModel> | $Enums.ServiceStatus | null
  }

  export type EnumPaymentStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentStatus[] | null
    notIn?: $Enums.PaymentStatus[] | null
    not?: NestedEnumPaymentStatusNullableFilter<$PrismaModel> | $Enums.PaymentStatus | null
  }

  export type CustomerNullableRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type BudgetsCountOrderByAggregateInput = {
    id?: SortOrder
    servicePrice?: SortOrder
    serviceDescription?: SortOrder
    serviceStatus?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrder
  }

  export type BudgetsMaxOrderByAggregateInput = {
    id?: SortOrder
    servicePrice?: SortOrder
    serviceDescription?: SortOrder
    serviceStatus?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrder
  }

  export type BudgetsMinOrderByAggregateInput = {
    id?: SortOrder
    servicePrice?: SortOrder
    serviceDescription?: SortOrder
    serviceStatus?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrder
  }

  export type EnumServiceStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ServiceStatus[] | null
    notIn?: $Enums.ServiceStatus[] | null
    not?: NestedEnumServiceStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ServiceStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumServiceStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumServiceStatusNullableFilter<$PrismaModel>
  }

  export type EnumPaymentStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentStatus[] | null
    notIn?: $Enums.PaymentStatus[] | null
    not?: NestedEnumPaymentStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusNullableFilter<$PrismaModel>
  }

  export type EnumServiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[]
    notIn?: $Enums.ServiceStatus[]
    not?: NestedEnumServiceStatusFilter<$PrismaModel> | $Enums.ServiceStatus
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type BudgetsRelationFilter = {
    is?: BudgetsWhereInput
    isNot?: BudgetsWhereInput
  }

  export type ServiceProvidedCountOrderByAggregateInput = {
    id?: SortOrder
    serviceStatus?: SortOrder
    paymentStatus?: SortOrder
    customerId?: SortOrder
    budgetId?: SortOrder
    employeeId?: SortOrder
  }

  export type ServiceProvidedMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceStatus?: SortOrder
    paymentStatus?: SortOrder
    customerId?: SortOrder
    budgetId?: SortOrder
    employeeId?: SortOrder
  }

  export type ServiceProvidedMinOrderByAggregateInput = {
    id?: SortOrder
    serviceStatus?: SortOrder
    paymentStatus?: SortOrder
    customerId?: SortOrder
    budgetId?: SortOrder
    employeeId?: SortOrder
  }

  export type EnumServiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[]
    notIn?: $Enums.ServiceStatus[]
    not?: NestedEnumServiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.ServiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceStatusFilter<$PrismaModel>
    _max?: NestedEnumServiceStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type BudgetsCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BudgetsCreateWithoutCustomerInput, BudgetsUncheckedCreateWithoutCustomerInput> | BudgetsCreateWithoutCustomerInput[] | BudgetsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BudgetsCreateOrConnectWithoutCustomerInput | BudgetsCreateOrConnectWithoutCustomerInput[]
    createMany?: BudgetsCreateManyCustomerInputEnvelope
    connect?: BudgetsWhereUniqueInput | BudgetsWhereUniqueInput[]
  }

  export type ServiceProvidedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ServiceProvidedCreateWithoutCustomerInput, ServiceProvidedUncheckedCreateWithoutCustomerInput> | ServiceProvidedCreateWithoutCustomerInput[] | ServiceProvidedUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ServiceProvidedCreateOrConnectWithoutCustomerInput | ServiceProvidedCreateOrConnectWithoutCustomerInput[]
    createMany?: ServiceProvidedCreateManyCustomerInputEnvelope
    connect?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
  }

  export type BudgetsUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BudgetsCreateWithoutCustomerInput, BudgetsUncheckedCreateWithoutCustomerInput> | BudgetsCreateWithoutCustomerInput[] | BudgetsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BudgetsCreateOrConnectWithoutCustomerInput | BudgetsCreateOrConnectWithoutCustomerInput[]
    createMany?: BudgetsCreateManyCustomerInputEnvelope
    connect?: BudgetsWhereUniqueInput | BudgetsWhereUniqueInput[]
  }

  export type ServiceProvidedUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ServiceProvidedCreateWithoutCustomerInput, ServiceProvidedUncheckedCreateWithoutCustomerInput> | ServiceProvidedCreateWithoutCustomerInput[] | ServiceProvidedUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ServiceProvidedCreateOrConnectWithoutCustomerInput | ServiceProvidedCreateOrConnectWithoutCustomerInput[]
    createMany?: ServiceProvidedCreateManyCustomerInputEnvelope
    connect?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableEnumRoleLevelFieldUpdateOperationsInput = {
    set?: $Enums.RoleLevel | null
  }

  export type BudgetsUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BudgetsCreateWithoutCustomerInput, BudgetsUncheckedCreateWithoutCustomerInput> | BudgetsCreateWithoutCustomerInput[] | BudgetsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BudgetsCreateOrConnectWithoutCustomerInput | BudgetsCreateOrConnectWithoutCustomerInput[]
    upsert?: BudgetsUpsertWithWhereUniqueWithoutCustomerInput | BudgetsUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BudgetsCreateManyCustomerInputEnvelope
    set?: BudgetsWhereUniqueInput | BudgetsWhereUniqueInput[]
    disconnect?: BudgetsWhereUniqueInput | BudgetsWhereUniqueInput[]
    delete?: BudgetsWhereUniqueInput | BudgetsWhereUniqueInput[]
    connect?: BudgetsWhereUniqueInput | BudgetsWhereUniqueInput[]
    update?: BudgetsUpdateWithWhereUniqueWithoutCustomerInput | BudgetsUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BudgetsUpdateManyWithWhereWithoutCustomerInput | BudgetsUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BudgetsScalarWhereInput | BudgetsScalarWhereInput[]
  }

  export type ServiceProvidedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ServiceProvidedCreateWithoutCustomerInput, ServiceProvidedUncheckedCreateWithoutCustomerInput> | ServiceProvidedCreateWithoutCustomerInput[] | ServiceProvidedUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ServiceProvidedCreateOrConnectWithoutCustomerInput | ServiceProvidedCreateOrConnectWithoutCustomerInput[]
    upsert?: ServiceProvidedUpsertWithWhereUniqueWithoutCustomerInput | ServiceProvidedUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ServiceProvidedCreateManyCustomerInputEnvelope
    set?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    disconnect?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    delete?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    connect?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    update?: ServiceProvidedUpdateWithWhereUniqueWithoutCustomerInput | ServiceProvidedUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ServiceProvidedUpdateManyWithWhereWithoutCustomerInput | ServiceProvidedUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ServiceProvidedScalarWhereInput | ServiceProvidedScalarWhereInput[]
  }

  export type BudgetsUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BudgetsCreateWithoutCustomerInput, BudgetsUncheckedCreateWithoutCustomerInput> | BudgetsCreateWithoutCustomerInput[] | BudgetsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BudgetsCreateOrConnectWithoutCustomerInput | BudgetsCreateOrConnectWithoutCustomerInput[]
    upsert?: BudgetsUpsertWithWhereUniqueWithoutCustomerInput | BudgetsUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BudgetsCreateManyCustomerInputEnvelope
    set?: BudgetsWhereUniqueInput | BudgetsWhereUniqueInput[]
    disconnect?: BudgetsWhereUniqueInput | BudgetsWhereUniqueInput[]
    delete?: BudgetsWhereUniqueInput | BudgetsWhereUniqueInput[]
    connect?: BudgetsWhereUniqueInput | BudgetsWhereUniqueInput[]
    update?: BudgetsUpdateWithWhereUniqueWithoutCustomerInput | BudgetsUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BudgetsUpdateManyWithWhereWithoutCustomerInput | BudgetsUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BudgetsScalarWhereInput | BudgetsScalarWhereInput[]
  }

  export type ServiceProvidedUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ServiceProvidedCreateWithoutCustomerInput, ServiceProvidedUncheckedCreateWithoutCustomerInput> | ServiceProvidedCreateWithoutCustomerInput[] | ServiceProvidedUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ServiceProvidedCreateOrConnectWithoutCustomerInput | ServiceProvidedCreateOrConnectWithoutCustomerInput[]
    upsert?: ServiceProvidedUpsertWithWhereUniqueWithoutCustomerInput | ServiceProvidedUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ServiceProvidedCreateManyCustomerInputEnvelope
    set?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    disconnect?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    delete?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    connect?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    update?: ServiceProvidedUpdateWithWhereUniqueWithoutCustomerInput | ServiceProvidedUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ServiceProvidedUpdateManyWithWhereWithoutCustomerInput | ServiceProvidedUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ServiceProvidedScalarWhereInput | ServiceProvidedScalarWhereInput[]
  }

  export type ServiceProvidedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ServiceProvidedCreateWithoutEmployeeInput, ServiceProvidedUncheckedCreateWithoutEmployeeInput> | ServiceProvidedCreateWithoutEmployeeInput[] | ServiceProvidedUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ServiceProvidedCreateOrConnectWithoutEmployeeInput | ServiceProvidedCreateOrConnectWithoutEmployeeInput[]
    createMany?: ServiceProvidedCreateManyEmployeeInputEnvelope
    connect?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
  }

  export type DeptEmployeeCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<DeptEmployeeCreateWithoutEmployeeInput, DeptEmployeeUncheckedCreateWithoutEmployeeInput> | DeptEmployeeCreateWithoutEmployeeInput[] | DeptEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: DeptEmployeeCreateOrConnectWithoutEmployeeInput | DeptEmployeeCreateOrConnectWithoutEmployeeInput[]
    createMany?: DeptEmployeeCreateManyEmployeeInputEnvelope
    connect?: DeptEmployeeWhereUniqueInput | DeptEmployeeWhereUniqueInput[]
  }

  export type ServiceProvidedUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ServiceProvidedCreateWithoutEmployeeInput, ServiceProvidedUncheckedCreateWithoutEmployeeInput> | ServiceProvidedCreateWithoutEmployeeInput[] | ServiceProvidedUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ServiceProvidedCreateOrConnectWithoutEmployeeInput | ServiceProvidedCreateOrConnectWithoutEmployeeInput[]
    createMany?: ServiceProvidedCreateManyEmployeeInputEnvelope
    connect?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
  }

  export type DeptEmployeeUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<DeptEmployeeCreateWithoutEmployeeInput, DeptEmployeeUncheckedCreateWithoutEmployeeInput> | DeptEmployeeCreateWithoutEmployeeInput[] | DeptEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: DeptEmployeeCreateOrConnectWithoutEmployeeInput | DeptEmployeeCreateOrConnectWithoutEmployeeInput[]
    createMany?: DeptEmployeeCreateManyEmployeeInputEnvelope
    connect?: DeptEmployeeWhereUniqueInput | DeptEmployeeWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ServiceProvidedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ServiceProvidedCreateWithoutEmployeeInput, ServiceProvidedUncheckedCreateWithoutEmployeeInput> | ServiceProvidedCreateWithoutEmployeeInput[] | ServiceProvidedUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ServiceProvidedCreateOrConnectWithoutEmployeeInput | ServiceProvidedCreateOrConnectWithoutEmployeeInput[]
    upsert?: ServiceProvidedUpsertWithWhereUniqueWithoutEmployeeInput | ServiceProvidedUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ServiceProvidedCreateManyEmployeeInputEnvelope
    set?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    disconnect?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    delete?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    connect?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    update?: ServiceProvidedUpdateWithWhereUniqueWithoutEmployeeInput | ServiceProvidedUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ServiceProvidedUpdateManyWithWhereWithoutEmployeeInput | ServiceProvidedUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ServiceProvidedScalarWhereInput | ServiceProvidedScalarWhereInput[]
  }

  export type DeptEmployeeUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<DeptEmployeeCreateWithoutEmployeeInput, DeptEmployeeUncheckedCreateWithoutEmployeeInput> | DeptEmployeeCreateWithoutEmployeeInput[] | DeptEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: DeptEmployeeCreateOrConnectWithoutEmployeeInput | DeptEmployeeCreateOrConnectWithoutEmployeeInput[]
    upsert?: DeptEmployeeUpsertWithWhereUniqueWithoutEmployeeInput | DeptEmployeeUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: DeptEmployeeCreateManyEmployeeInputEnvelope
    set?: DeptEmployeeWhereUniqueInput | DeptEmployeeWhereUniqueInput[]
    disconnect?: DeptEmployeeWhereUniqueInput | DeptEmployeeWhereUniqueInput[]
    delete?: DeptEmployeeWhereUniqueInput | DeptEmployeeWhereUniqueInput[]
    connect?: DeptEmployeeWhereUniqueInput | DeptEmployeeWhereUniqueInput[]
    update?: DeptEmployeeUpdateWithWhereUniqueWithoutEmployeeInput | DeptEmployeeUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: DeptEmployeeUpdateManyWithWhereWithoutEmployeeInput | DeptEmployeeUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: DeptEmployeeScalarWhereInput | DeptEmployeeScalarWhereInput[]
  }

  export type ServiceProvidedUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ServiceProvidedCreateWithoutEmployeeInput, ServiceProvidedUncheckedCreateWithoutEmployeeInput> | ServiceProvidedCreateWithoutEmployeeInput[] | ServiceProvidedUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ServiceProvidedCreateOrConnectWithoutEmployeeInput | ServiceProvidedCreateOrConnectWithoutEmployeeInput[]
    upsert?: ServiceProvidedUpsertWithWhereUniqueWithoutEmployeeInput | ServiceProvidedUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ServiceProvidedCreateManyEmployeeInputEnvelope
    set?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    disconnect?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    delete?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    connect?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    update?: ServiceProvidedUpdateWithWhereUniqueWithoutEmployeeInput | ServiceProvidedUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ServiceProvidedUpdateManyWithWhereWithoutEmployeeInput | ServiceProvidedUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ServiceProvidedScalarWhereInput | ServiceProvidedScalarWhereInput[]
  }

  export type DeptEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<DeptEmployeeCreateWithoutEmployeeInput, DeptEmployeeUncheckedCreateWithoutEmployeeInput> | DeptEmployeeCreateWithoutEmployeeInput[] | DeptEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: DeptEmployeeCreateOrConnectWithoutEmployeeInput | DeptEmployeeCreateOrConnectWithoutEmployeeInput[]
    upsert?: DeptEmployeeUpsertWithWhereUniqueWithoutEmployeeInput | DeptEmployeeUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: DeptEmployeeCreateManyEmployeeInputEnvelope
    set?: DeptEmployeeWhereUniqueInput | DeptEmployeeWhereUniqueInput[]
    disconnect?: DeptEmployeeWhereUniqueInput | DeptEmployeeWhereUniqueInput[]
    delete?: DeptEmployeeWhereUniqueInput | DeptEmployeeWhereUniqueInput[]
    connect?: DeptEmployeeWhereUniqueInput | DeptEmployeeWhereUniqueInput[]
    update?: DeptEmployeeUpdateWithWhereUniqueWithoutEmployeeInput | DeptEmployeeUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: DeptEmployeeUpdateManyWithWhereWithoutEmployeeInput | DeptEmployeeUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: DeptEmployeeScalarWhereInput | DeptEmployeeScalarWhereInput[]
  }

  export type DeptEmployeeCreateNestedManyWithoutDepartmentsInput = {
    create?: XOR<DeptEmployeeCreateWithoutDepartmentsInput, DeptEmployeeUncheckedCreateWithoutDepartmentsInput> | DeptEmployeeCreateWithoutDepartmentsInput[] | DeptEmployeeUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: DeptEmployeeCreateOrConnectWithoutDepartmentsInput | DeptEmployeeCreateOrConnectWithoutDepartmentsInput[]
    createMany?: DeptEmployeeCreateManyDepartmentsInputEnvelope
    connect?: DeptEmployeeWhereUniqueInput | DeptEmployeeWhereUniqueInput[]
  }

  export type DeptEmployeeUncheckedCreateNestedManyWithoutDepartmentsInput = {
    create?: XOR<DeptEmployeeCreateWithoutDepartmentsInput, DeptEmployeeUncheckedCreateWithoutDepartmentsInput> | DeptEmployeeCreateWithoutDepartmentsInput[] | DeptEmployeeUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: DeptEmployeeCreateOrConnectWithoutDepartmentsInput | DeptEmployeeCreateOrConnectWithoutDepartmentsInput[]
    createMany?: DeptEmployeeCreateManyDepartmentsInputEnvelope
    connect?: DeptEmployeeWhereUniqueInput | DeptEmployeeWhereUniqueInput[]
  }

  export type EnumDeptAreasFieldUpdateOperationsInput = {
    set?: $Enums.DeptAreas
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DeptEmployeeUpdateManyWithoutDepartmentsNestedInput = {
    create?: XOR<DeptEmployeeCreateWithoutDepartmentsInput, DeptEmployeeUncheckedCreateWithoutDepartmentsInput> | DeptEmployeeCreateWithoutDepartmentsInput[] | DeptEmployeeUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: DeptEmployeeCreateOrConnectWithoutDepartmentsInput | DeptEmployeeCreateOrConnectWithoutDepartmentsInput[]
    upsert?: DeptEmployeeUpsertWithWhereUniqueWithoutDepartmentsInput | DeptEmployeeUpsertWithWhereUniqueWithoutDepartmentsInput[]
    createMany?: DeptEmployeeCreateManyDepartmentsInputEnvelope
    set?: DeptEmployeeWhereUniqueInput | DeptEmployeeWhereUniqueInput[]
    disconnect?: DeptEmployeeWhereUniqueInput | DeptEmployeeWhereUniqueInput[]
    delete?: DeptEmployeeWhereUniqueInput | DeptEmployeeWhereUniqueInput[]
    connect?: DeptEmployeeWhereUniqueInput | DeptEmployeeWhereUniqueInput[]
    update?: DeptEmployeeUpdateWithWhereUniqueWithoutDepartmentsInput | DeptEmployeeUpdateWithWhereUniqueWithoutDepartmentsInput[]
    updateMany?: DeptEmployeeUpdateManyWithWhereWithoutDepartmentsInput | DeptEmployeeUpdateManyWithWhereWithoutDepartmentsInput[]
    deleteMany?: DeptEmployeeScalarWhereInput | DeptEmployeeScalarWhereInput[]
  }

  export type DeptEmployeeUncheckedUpdateManyWithoutDepartmentsNestedInput = {
    create?: XOR<DeptEmployeeCreateWithoutDepartmentsInput, DeptEmployeeUncheckedCreateWithoutDepartmentsInput> | DeptEmployeeCreateWithoutDepartmentsInput[] | DeptEmployeeUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: DeptEmployeeCreateOrConnectWithoutDepartmentsInput | DeptEmployeeCreateOrConnectWithoutDepartmentsInput[]
    upsert?: DeptEmployeeUpsertWithWhereUniqueWithoutDepartmentsInput | DeptEmployeeUpsertWithWhereUniqueWithoutDepartmentsInput[]
    createMany?: DeptEmployeeCreateManyDepartmentsInputEnvelope
    set?: DeptEmployeeWhereUniqueInput | DeptEmployeeWhereUniqueInput[]
    disconnect?: DeptEmployeeWhereUniqueInput | DeptEmployeeWhereUniqueInput[]
    delete?: DeptEmployeeWhereUniqueInput | DeptEmployeeWhereUniqueInput[]
    connect?: DeptEmployeeWhereUniqueInput | DeptEmployeeWhereUniqueInput[]
    update?: DeptEmployeeUpdateWithWhereUniqueWithoutDepartmentsInput | DeptEmployeeUpdateWithWhereUniqueWithoutDepartmentsInput[]
    updateMany?: DeptEmployeeUpdateManyWithWhereWithoutDepartmentsInput | DeptEmployeeUpdateManyWithWhereWithoutDepartmentsInput[]
    deleteMany?: DeptEmployeeScalarWhereInput | DeptEmployeeScalarWhereInput[]
  }

  export type EmployeesCreateNestedOneWithoutDepartmentsInput = {
    create?: XOR<EmployeesCreateWithoutDepartmentsInput, EmployeesUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutDepartmentsInput
    connect?: EmployeesWhereUniqueInput
  }

  export type DepartmentsCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<DepartmentsCreateWithoutEmployeesInput, DepartmentsUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: DepartmentsCreateOrConnectWithoutEmployeesInput
    connect?: DepartmentsWhereUniqueInput
  }

  export type EmployeesUpdateOneRequiredWithoutDepartmentsNestedInput = {
    create?: XOR<EmployeesCreateWithoutDepartmentsInput, EmployeesUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutDepartmentsInput
    upsert?: EmployeesUpsertWithoutDepartmentsInput
    connect?: EmployeesWhereUniqueInput
    update?: XOR<XOR<EmployeesUpdateToOneWithWhereWithoutDepartmentsInput, EmployeesUpdateWithoutDepartmentsInput>, EmployeesUncheckedUpdateWithoutDepartmentsInput>
  }

  export type DepartmentsUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<DepartmentsCreateWithoutEmployeesInput, DepartmentsUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: DepartmentsCreateOrConnectWithoutEmployeesInput
    upsert?: DepartmentsUpsertWithoutEmployeesInput
    connect?: DepartmentsWhereUniqueInput
    update?: XOR<XOR<DepartmentsUpdateToOneWithWhereWithoutEmployeesInput, DepartmentsUpdateWithoutEmployeesInput>, DepartmentsUncheckedUpdateWithoutEmployeesInput>
  }

  export type ServiceProvidedCreateNestedManyWithoutBudgetInput = {
    create?: XOR<ServiceProvidedCreateWithoutBudgetInput, ServiceProvidedUncheckedCreateWithoutBudgetInput> | ServiceProvidedCreateWithoutBudgetInput[] | ServiceProvidedUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: ServiceProvidedCreateOrConnectWithoutBudgetInput | ServiceProvidedCreateOrConnectWithoutBudgetInput[]
    createMany?: ServiceProvidedCreateManyBudgetInputEnvelope
    connect?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
  }

  export type CustomerCreateNestedOneWithoutBudgetsInput = {
    create?: XOR<CustomerCreateWithoutBudgetsInput, CustomerUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBudgetsInput
    connect?: CustomerWhereUniqueInput
  }

  export type ServiceProvidedUncheckedCreateNestedManyWithoutBudgetInput = {
    create?: XOR<ServiceProvidedCreateWithoutBudgetInput, ServiceProvidedUncheckedCreateWithoutBudgetInput> | ServiceProvidedCreateWithoutBudgetInput[] | ServiceProvidedUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: ServiceProvidedCreateOrConnectWithoutBudgetInput | ServiceProvidedCreateOrConnectWithoutBudgetInput[]
    createMany?: ServiceProvidedCreateManyBudgetInputEnvelope
    connect?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
  }

  export type NullableEnumServiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.ServiceStatus | null
  }

  export type NullableEnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus | null
  }

  export type ServiceProvidedUpdateManyWithoutBudgetNestedInput = {
    create?: XOR<ServiceProvidedCreateWithoutBudgetInput, ServiceProvidedUncheckedCreateWithoutBudgetInput> | ServiceProvidedCreateWithoutBudgetInput[] | ServiceProvidedUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: ServiceProvidedCreateOrConnectWithoutBudgetInput | ServiceProvidedCreateOrConnectWithoutBudgetInput[]
    upsert?: ServiceProvidedUpsertWithWhereUniqueWithoutBudgetInput | ServiceProvidedUpsertWithWhereUniqueWithoutBudgetInput[]
    createMany?: ServiceProvidedCreateManyBudgetInputEnvelope
    set?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    disconnect?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    delete?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    connect?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    update?: ServiceProvidedUpdateWithWhereUniqueWithoutBudgetInput | ServiceProvidedUpdateWithWhereUniqueWithoutBudgetInput[]
    updateMany?: ServiceProvidedUpdateManyWithWhereWithoutBudgetInput | ServiceProvidedUpdateManyWithWhereWithoutBudgetInput[]
    deleteMany?: ServiceProvidedScalarWhereInput | ServiceProvidedScalarWhereInput[]
  }

  export type CustomerUpdateOneWithoutBudgetsNestedInput = {
    create?: XOR<CustomerCreateWithoutBudgetsInput, CustomerUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBudgetsInput
    upsert?: CustomerUpsertWithoutBudgetsInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutBudgetsInput, CustomerUpdateWithoutBudgetsInput>, CustomerUncheckedUpdateWithoutBudgetsInput>
  }

  export type ServiceProvidedUncheckedUpdateManyWithoutBudgetNestedInput = {
    create?: XOR<ServiceProvidedCreateWithoutBudgetInput, ServiceProvidedUncheckedCreateWithoutBudgetInput> | ServiceProvidedCreateWithoutBudgetInput[] | ServiceProvidedUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: ServiceProvidedCreateOrConnectWithoutBudgetInput | ServiceProvidedCreateOrConnectWithoutBudgetInput[]
    upsert?: ServiceProvidedUpsertWithWhereUniqueWithoutBudgetInput | ServiceProvidedUpsertWithWhereUniqueWithoutBudgetInput[]
    createMany?: ServiceProvidedCreateManyBudgetInputEnvelope
    set?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    disconnect?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    delete?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    connect?: ServiceProvidedWhereUniqueInput | ServiceProvidedWhereUniqueInput[]
    update?: ServiceProvidedUpdateWithWhereUniqueWithoutBudgetInput | ServiceProvidedUpdateWithWhereUniqueWithoutBudgetInput[]
    updateMany?: ServiceProvidedUpdateManyWithWhereWithoutBudgetInput | ServiceProvidedUpdateManyWithWhereWithoutBudgetInput[]
    deleteMany?: ServiceProvidedScalarWhereInput | ServiceProvidedScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutServiceProvidedInput = {
    create?: XOR<CustomerCreateWithoutServiceProvidedInput, CustomerUncheckedCreateWithoutServiceProvidedInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutServiceProvidedInput
    connect?: CustomerWhereUniqueInput
  }

  export type BudgetsCreateNestedOneWithoutServicesProvidedInput = {
    create?: XOR<BudgetsCreateWithoutServicesProvidedInput, BudgetsUncheckedCreateWithoutServicesProvidedInput>
    connectOrCreate?: BudgetsCreateOrConnectWithoutServicesProvidedInput
    connect?: BudgetsWhereUniqueInput
  }

  export type EmployeesCreateNestedOneWithoutServiceProvidedInput = {
    create?: XOR<EmployeesCreateWithoutServiceProvidedInput, EmployeesUncheckedCreateWithoutServiceProvidedInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutServiceProvidedInput
    connect?: EmployeesWhereUniqueInput
  }

  export type EnumServiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.ServiceStatus
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type CustomerUpdateOneRequiredWithoutServiceProvidedNestedInput = {
    create?: XOR<CustomerCreateWithoutServiceProvidedInput, CustomerUncheckedCreateWithoutServiceProvidedInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutServiceProvidedInput
    upsert?: CustomerUpsertWithoutServiceProvidedInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutServiceProvidedInput, CustomerUpdateWithoutServiceProvidedInput>, CustomerUncheckedUpdateWithoutServiceProvidedInput>
  }

  export type BudgetsUpdateOneRequiredWithoutServicesProvidedNestedInput = {
    create?: XOR<BudgetsCreateWithoutServicesProvidedInput, BudgetsUncheckedCreateWithoutServicesProvidedInput>
    connectOrCreate?: BudgetsCreateOrConnectWithoutServicesProvidedInput
    upsert?: BudgetsUpsertWithoutServicesProvidedInput
    connect?: BudgetsWhereUniqueInput
    update?: XOR<XOR<BudgetsUpdateToOneWithWhereWithoutServicesProvidedInput, BudgetsUpdateWithoutServicesProvidedInput>, BudgetsUncheckedUpdateWithoutServicesProvidedInput>
  }

  export type EmployeesUpdateOneRequiredWithoutServiceProvidedNestedInput = {
    create?: XOR<EmployeesCreateWithoutServiceProvidedInput, EmployeesUncheckedCreateWithoutServiceProvidedInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutServiceProvidedInput
    upsert?: EmployeesUpsertWithoutServiceProvidedInput
    connect?: EmployeesWhereUniqueInput
    update?: XOR<XOR<EmployeesUpdateToOneWithWhereWithoutServiceProvidedInput, EmployeesUpdateWithoutServiceProvidedInput>, EmployeesUncheckedUpdateWithoutServiceProvidedInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleLevel | EnumRoleLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.RoleLevel[] | null
    notIn?: $Enums.RoleLevel[] | null
    not?: NestedEnumRoleLevelNullableFilter<$PrismaModel> | $Enums.RoleLevel | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleLevel | EnumRoleLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.RoleLevel[] | null
    notIn?: $Enums.RoleLevel[] | null
    not?: NestedEnumRoleLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.RoleLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleLevelNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumDeptAreasFilter<$PrismaModel = never> = {
    equals?: $Enums.DeptAreas | EnumDeptAreasFieldRefInput<$PrismaModel>
    in?: $Enums.DeptAreas[]
    notIn?: $Enums.DeptAreas[]
    not?: NestedEnumDeptAreasFilter<$PrismaModel> | $Enums.DeptAreas
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumDeptAreasWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeptAreas | EnumDeptAreasFieldRefInput<$PrismaModel>
    in?: $Enums.DeptAreas[]
    notIn?: $Enums.DeptAreas[]
    not?: NestedEnumDeptAreasWithAggregatesFilter<$PrismaModel> | $Enums.DeptAreas
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeptAreasFilter<$PrismaModel>
    _max?: NestedEnumDeptAreasFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumServiceStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ServiceStatus[] | null
    notIn?: $Enums.ServiceStatus[] | null
    not?: NestedEnumServiceStatusNullableFilter<$PrismaModel> | $Enums.ServiceStatus | null
  }

  export type NestedEnumPaymentStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentStatus[] | null
    notIn?: $Enums.PaymentStatus[] | null
    not?: NestedEnumPaymentStatusNullableFilter<$PrismaModel> | $Enums.PaymentStatus | null
  }

  export type NestedEnumServiceStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ServiceStatus[] | null
    notIn?: $Enums.ServiceStatus[] | null
    not?: NestedEnumServiceStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ServiceStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumServiceStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumServiceStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentStatus[] | null
    notIn?: $Enums.PaymentStatus[] | null
    not?: NestedEnumPaymentStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumServiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[]
    notIn?: $Enums.ServiceStatus[]
    not?: NestedEnumServiceStatusFilter<$PrismaModel> | $Enums.ServiceStatus
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumServiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[]
    notIn?: $Enums.ServiceStatus[]
    not?: NestedEnumServiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.ServiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceStatusFilter<$PrismaModel>
    _max?: NestedEnumServiceStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type BudgetsCreateWithoutCustomerInput = {
    id?: string
    servicePrice: string
    serviceDescription: string
    serviceStatus?: $Enums.ServiceStatus | null
    paymentStatus?: $Enums.PaymentStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesProvided?: ServiceProvidedCreateNestedManyWithoutBudgetInput
  }

  export type BudgetsUncheckedCreateWithoutCustomerInput = {
    id?: string
    servicePrice: string
    serviceDescription: string
    serviceStatus?: $Enums.ServiceStatus | null
    paymentStatus?: $Enums.PaymentStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    servicesProvided?: ServiceProvidedUncheckedCreateNestedManyWithoutBudgetInput
  }

  export type BudgetsCreateOrConnectWithoutCustomerInput = {
    where: BudgetsWhereUniqueInput
    create: XOR<BudgetsCreateWithoutCustomerInput, BudgetsUncheckedCreateWithoutCustomerInput>
  }

  export type BudgetsCreateManyCustomerInputEnvelope = {
    data: BudgetsCreateManyCustomerInput | BudgetsCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ServiceProvidedCreateWithoutCustomerInput = {
    id?: string
    serviceStatus: $Enums.ServiceStatus
    paymentStatus: $Enums.PaymentStatus
    budget: BudgetsCreateNestedOneWithoutServicesProvidedInput
    employee: EmployeesCreateNestedOneWithoutServiceProvidedInput
  }

  export type ServiceProvidedUncheckedCreateWithoutCustomerInput = {
    id?: string
    serviceStatus: $Enums.ServiceStatus
    paymentStatus: $Enums.PaymentStatus
    budgetId: string
    employeeId: string
  }

  export type ServiceProvidedCreateOrConnectWithoutCustomerInput = {
    where: ServiceProvidedWhereUniqueInput
    create: XOR<ServiceProvidedCreateWithoutCustomerInput, ServiceProvidedUncheckedCreateWithoutCustomerInput>
  }

  export type ServiceProvidedCreateManyCustomerInputEnvelope = {
    data: ServiceProvidedCreateManyCustomerInput | ServiceProvidedCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type BudgetsUpsertWithWhereUniqueWithoutCustomerInput = {
    where: BudgetsWhereUniqueInput
    update: XOR<BudgetsUpdateWithoutCustomerInput, BudgetsUncheckedUpdateWithoutCustomerInput>
    create: XOR<BudgetsCreateWithoutCustomerInput, BudgetsUncheckedCreateWithoutCustomerInput>
  }

  export type BudgetsUpdateWithWhereUniqueWithoutCustomerInput = {
    where: BudgetsWhereUniqueInput
    data: XOR<BudgetsUpdateWithoutCustomerInput, BudgetsUncheckedUpdateWithoutCustomerInput>
  }

  export type BudgetsUpdateManyWithWhereWithoutCustomerInput = {
    where: BudgetsScalarWhereInput
    data: XOR<BudgetsUpdateManyMutationInput, BudgetsUncheckedUpdateManyWithoutCustomerInput>
  }

  export type BudgetsScalarWhereInput = {
    AND?: BudgetsScalarWhereInput | BudgetsScalarWhereInput[]
    OR?: BudgetsScalarWhereInput[]
    NOT?: BudgetsScalarWhereInput | BudgetsScalarWhereInput[]
    id?: StringFilter<"Budgets"> | string
    servicePrice?: StringFilter<"Budgets"> | string
    serviceDescription?: StringFilter<"Budgets"> | string
    serviceStatus?: EnumServiceStatusNullableFilter<"Budgets"> | $Enums.ServiceStatus | null
    paymentStatus?: EnumPaymentStatusNullableFilter<"Budgets"> | $Enums.PaymentStatus | null
    createdAt?: DateTimeFilter<"Budgets"> | Date | string
    updatedAt?: DateTimeFilter<"Budgets"> | Date | string
    customerId?: StringNullableFilter<"Budgets"> | string | null
  }

  export type ServiceProvidedUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ServiceProvidedWhereUniqueInput
    update: XOR<ServiceProvidedUpdateWithoutCustomerInput, ServiceProvidedUncheckedUpdateWithoutCustomerInput>
    create: XOR<ServiceProvidedCreateWithoutCustomerInput, ServiceProvidedUncheckedCreateWithoutCustomerInput>
  }

  export type ServiceProvidedUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ServiceProvidedWhereUniqueInput
    data: XOR<ServiceProvidedUpdateWithoutCustomerInput, ServiceProvidedUncheckedUpdateWithoutCustomerInput>
  }

  export type ServiceProvidedUpdateManyWithWhereWithoutCustomerInput = {
    where: ServiceProvidedScalarWhereInput
    data: XOR<ServiceProvidedUpdateManyMutationInput, ServiceProvidedUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ServiceProvidedScalarWhereInput = {
    AND?: ServiceProvidedScalarWhereInput | ServiceProvidedScalarWhereInput[]
    OR?: ServiceProvidedScalarWhereInput[]
    NOT?: ServiceProvidedScalarWhereInput | ServiceProvidedScalarWhereInput[]
    id?: StringFilter<"ServiceProvided"> | string
    serviceStatus?: EnumServiceStatusFilter<"ServiceProvided"> | $Enums.ServiceStatus
    paymentStatus?: EnumPaymentStatusFilter<"ServiceProvided"> | $Enums.PaymentStatus
    customerId?: StringFilter<"ServiceProvided"> | string
    budgetId?: StringFilter<"ServiceProvided"> | string
    employeeId?: StringFilter<"ServiceProvided"> | string
  }

  export type ServiceProvidedCreateWithoutEmployeeInput = {
    id?: string
    serviceStatus: $Enums.ServiceStatus
    paymentStatus: $Enums.PaymentStatus
    customer: CustomerCreateNestedOneWithoutServiceProvidedInput
    budget: BudgetsCreateNestedOneWithoutServicesProvidedInput
  }

  export type ServiceProvidedUncheckedCreateWithoutEmployeeInput = {
    id?: string
    serviceStatus: $Enums.ServiceStatus
    paymentStatus: $Enums.PaymentStatus
    customerId: string
    budgetId: string
  }

  export type ServiceProvidedCreateOrConnectWithoutEmployeeInput = {
    where: ServiceProvidedWhereUniqueInput
    create: XOR<ServiceProvidedCreateWithoutEmployeeInput, ServiceProvidedUncheckedCreateWithoutEmployeeInput>
  }

  export type ServiceProvidedCreateManyEmployeeInputEnvelope = {
    data: ServiceProvidedCreateManyEmployeeInput | ServiceProvidedCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type DeptEmployeeCreateWithoutEmployeeInput = {
    guid_deptEmp?: string
    departments: DepartmentsCreateNestedOneWithoutEmployeesInput
  }

  export type DeptEmployeeUncheckedCreateWithoutEmployeeInput = {
    guid_deptEmp?: string
    deptId: string
  }

  export type DeptEmployeeCreateOrConnectWithoutEmployeeInput = {
    where: DeptEmployeeWhereUniqueInput
    create: XOR<DeptEmployeeCreateWithoutEmployeeInput, DeptEmployeeUncheckedCreateWithoutEmployeeInput>
  }

  export type DeptEmployeeCreateManyEmployeeInputEnvelope = {
    data: DeptEmployeeCreateManyEmployeeInput | DeptEmployeeCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type ServiceProvidedUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: ServiceProvidedWhereUniqueInput
    update: XOR<ServiceProvidedUpdateWithoutEmployeeInput, ServiceProvidedUncheckedUpdateWithoutEmployeeInput>
    create: XOR<ServiceProvidedCreateWithoutEmployeeInput, ServiceProvidedUncheckedCreateWithoutEmployeeInput>
  }

  export type ServiceProvidedUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: ServiceProvidedWhereUniqueInput
    data: XOR<ServiceProvidedUpdateWithoutEmployeeInput, ServiceProvidedUncheckedUpdateWithoutEmployeeInput>
  }

  export type ServiceProvidedUpdateManyWithWhereWithoutEmployeeInput = {
    where: ServiceProvidedScalarWhereInput
    data: XOR<ServiceProvidedUpdateManyMutationInput, ServiceProvidedUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type DeptEmployeeUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: DeptEmployeeWhereUniqueInput
    update: XOR<DeptEmployeeUpdateWithoutEmployeeInput, DeptEmployeeUncheckedUpdateWithoutEmployeeInput>
    create: XOR<DeptEmployeeCreateWithoutEmployeeInput, DeptEmployeeUncheckedCreateWithoutEmployeeInput>
  }

  export type DeptEmployeeUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: DeptEmployeeWhereUniqueInput
    data: XOR<DeptEmployeeUpdateWithoutEmployeeInput, DeptEmployeeUncheckedUpdateWithoutEmployeeInput>
  }

  export type DeptEmployeeUpdateManyWithWhereWithoutEmployeeInput = {
    where: DeptEmployeeScalarWhereInput
    data: XOR<DeptEmployeeUpdateManyMutationInput, DeptEmployeeUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type DeptEmployeeScalarWhereInput = {
    AND?: DeptEmployeeScalarWhereInput | DeptEmployeeScalarWhereInput[]
    OR?: DeptEmployeeScalarWhereInput[]
    NOT?: DeptEmployeeScalarWhereInput | DeptEmployeeScalarWhereInput[]
    guid_deptEmp?: StringFilter<"DeptEmployee"> | string
    employeeId?: StringFilter<"DeptEmployee"> | string
    deptId?: StringFilter<"DeptEmployee"> | string
  }

  export type DeptEmployeeCreateWithoutDepartmentsInput = {
    guid_deptEmp?: string
    employee: EmployeesCreateNestedOneWithoutDepartmentsInput
  }

  export type DeptEmployeeUncheckedCreateWithoutDepartmentsInput = {
    guid_deptEmp?: string
    employeeId: string
  }

  export type DeptEmployeeCreateOrConnectWithoutDepartmentsInput = {
    where: DeptEmployeeWhereUniqueInput
    create: XOR<DeptEmployeeCreateWithoutDepartmentsInput, DeptEmployeeUncheckedCreateWithoutDepartmentsInput>
  }

  export type DeptEmployeeCreateManyDepartmentsInputEnvelope = {
    data: DeptEmployeeCreateManyDepartmentsInput | DeptEmployeeCreateManyDepartmentsInput[]
    skipDuplicates?: boolean
  }

  export type DeptEmployeeUpsertWithWhereUniqueWithoutDepartmentsInput = {
    where: DeptEmployeeWhereUniqueInput
    update: XOR<DeptEmployeeUpdateWithoutDepartmentsInput, DeptEmployeeUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<DeptEmployeeCreateWithoutDepartmentsInput, DeptEmployeeUncheckedCreateWithoutDepartmentsInput>
  }

  export type DeptEmployeeUpdateWithWhereUniqueWithoutDepartmentsInput = {
    where: DeptEmployeeWhereUniqueInput
    data: XOR<DeptEmployeeUpdateWithoutDepartmentsInput, DeptEmployeeUncheckedUpdateWithoutDepartmentsInput>
  }

  export type DeptEmployeeUpdateManyWithWhereWithoutDepartmentsInput = {
    where: DeptEmployeeScalarWhereInput
    data: XOR<DeptEmployeeUpdateManyMutationInput, DeptEmployeeUncheckedUpdateManyWithoutDepartmentsInput>
  }

  export type EmployeesCreateWithoutDepartmentsInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate: Date | string
    hireDate: Date | string
    email: string
    phone: string
    address: string
    wage: string
    role: string
    roleLevel?: $Enums.RoleLevel | null
    positionTitle: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: string | null
    serviceProvided?: ServiceProvidedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeesUncheckedCreateWithoutDepartmentsInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate: Date | string
    hireDate: Date | string
    email: string
    phone: string
    address: string
    wage: string
    role: string
    roleLevel?: $Enums.RoleLevel | null
    positionTitle: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: string | null
    serviceProvided?: ServiceProvidedUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeesCreateOrConnectWithoutDepartmentsInput = {
    where: EmployeesWhereUniqueInput
    create: XOR<EmployeesCreateWithoutDepartmentsInput, EmployeesUncheckedCreateWithoutDepartmentsInput>
  }

  export type DepartmentsCreateWithoutEmployeesInput = {
    id?: string
    name: $Enums.DeptAreas
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentsUncheckedCreateWithoutEmployeesInput = {
    id?: string
    name: $Enums.DeptAreas
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentsCreateOrConnectWithoutEmployeesInput = {
    where: DepartmentsWhereUniqueInput
    create: XOR<DepartmentsCreateWithoutEmployeesInput, DepartmentsUncheckedCreateWithoutEmployeesInput>
  }

  export type EmployeesUpsertWithoutDepartmentsInput = {
    update: XOR<EmployeesUpdateWithoutDepartmentsInput, EmployeesUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<EmployeesCreateWithoutDepartmentsInput, EmployeesUncheckedCreateWithoutDepartmentsInput>
    where?: EmployeesWhereInput
  }

  export type EmployeesUpdateToOneWithWhereWithoutDepartmentsInput = {
    where?: EmployeesWhereInput
    data: XOR<EmployeesUpdateWithoutDepartmentsInput, EmployeesUncheckedUpdateWithoutDepartmentsInput>
  }

  export type EmployeesUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    wage?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    roleLevel?: NullableEnumRoleLevelFieldUpdateOperationsInput | $Enums.RoleLevel | null
    positionTitle?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    serviceProvided?: ServiceProvidedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeesUncheckedUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    wage?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    roleLevel?: NullableEnumRoleLevelFieldUpdateOperationsInput | $Enums.RoleLevel | null
    positionTitle?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    serviceProvided?: ServiceProvidedUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type DepartmentsUpsertWithoutEmployeesInput = {
    update: XOR<DepartmentsUpdateWithoutEmployeesInput, DepartmentsUncheckedUpdateWithoutEmployeesInput>
    create: XOR<DepartmentsCreateWithoutEmployeesInput, DepartmentsUncheckedCreateWithoutEmployeesInput>
    where?: DepartmentsWhereInput
  }

  export type DepartmentsUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: DepartmentsWhereInput
    data: XOR<DepartmentsUpdateWithoutEmployeesInput, DepartmentsUncheckedUpdateWithoutEmployeesInput>
  }

  export type DepartmentsUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumDeptAreasFieldUpdateOperationsInput | $Enums.DeptAreas
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentsUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumDeptAreasFieldUpdateOperationsInput | $Enums.DeptAreas
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceProvidedCreateWithoutBudgetInput = {
    id?: string
    serviceStatus: $Enums.ServiceStatus
    paymentStatus: $Enums.PaymentStatus
    customer: CustomerCreateNestedOneWithoutServiceProvidedInput
    employee: EmployeesCreateNestedOneWithoutServiceProvidedInput
  }

  export type ServiceProvidedUncheckedCreateWithoutBudgetInput = {
    id?: string
    serviceStatus: $Enums.ServiceStatus
    paymentStatus: $Enums.PaymentStatus
    customerId: string
    employeeId: string
  }

  export type ServiceProvidedCreateOrConnectWithoutBudgetInput = {
    where: ServiceProvidedWhereUniqueInput
    create: XOR<ServiceProvidedCreateWithoutBudgetInput, ServiceProvidedUncheckedCreateWithoutBudgetInput>
  }

  export type ServiceProvidedCreateManyBudgetInputEnvelope = {
    data: ServiceProvidedCreateManyBudgetInput | ServiceProvidedCreateManyBudgetInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutBudgetsInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate: Date | string
    email: string
    phone: string
    address: string
    roleLevel?: $Enums.RoleLevel | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceProvided?: ServiceProvidedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutBudgetsInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate: Date | string
    email: string
    phone: string
    address: string
    roleLevel?: $Enums.RoleLevel | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceProvided?: ServiceProvidedUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutBudgetsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutBudgetsInput, CustomerUncheckedCreateWithoutBudgetsInput>
  }

  export type ServiceProvidedUpsertWithWhereUniqueWithoutBudgetInput = {
    where: ServiceProvidedWhereUniqueInput
    update: XOR<ServiceProvidedUpdateWithoutBudgetInput, ServiceProvidedUncheckedUpdateWithoutBudgetInput>
    create: XOR<ServiceProvidedCreateWithoutBudgetInput, ServiceProvidedUncheckedCreateWithoutBudgetInput>
  }

  export type ServiceProvidedUpdateWithWhereUniqueWithoutBudgetInput = {
    where: ServiceProvidedWhereUniqueInput
    data: XOR<ServiceProvidedUpdateWithoutBudgetInput, ServiceProvidedUncheckedUpdateWithoutBudgetInput>
  }

  export type ServiceProvidedUpdateManyWithWhereWithoutBudgetInput = {
    where: ServiceProvidedScalarWhereInput
    data: XOR<ServiceProvidedUpdateManyMutationInput, ServiceProvidedUncheckedUpdateManyWithoutBudgetInput>
  }

  export type CustomerUpsertWithoutBudgetsInput = {
    update: XOR<CustomerUpdateWithoutBudgetsInput, CustomerUncheckedUpdateWithoutBudgetsInput>
    create: XOR<CustomerCreateWithoutBudgetsInput, CustomerUncheckedCreateWithoutBudgetsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutBudgetsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutBudgetsInput, CustomerUncheckedUpdateWithoutBudgetsInput>
  }

  export type CustomerUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    roleLevel?: NullableEnumRoleLevelFieldUpdateOperationsInput | $Enums.RoleLevel | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceProvided?: ServiceProvidedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    roleLevel?: NullableEnumRoleLevelFieldUpdateOperationsInput | $Enums.RoleLevel | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceProvided?: ServiceProvidedUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateWithoutServiceProvidedInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate: Date | string
    email: string
    phone: string
    address: string
    roleLevel?: $Enums.RoleLevel | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    budgets?: BudgetsCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutServiceProvidedInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate: Date | string
    email: string
    phone: string
    address: string
    roleLevel?: $Enums.RoleLevel | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    budgets?: BudgetsUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutServiceProvidedInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutServiceProvidedInput, CustomerUncheckedCreateWithoutServiceProvidedInput>
  }

  export type BudgetsCreateWithoutServicesProvidedInput = {
    id?: string
    servicePrice: string
    serviceDescription: string
    serviceStatus?: $Enums.ServiceStatus | null
    paymentStatus?: $Enums.PaymentStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutBudgetsInput
  }

  export type BudgetsUncheckedCreateWithoutServicesProvidedInput = {
    id?: string
    servicePrice: string
    serviceDescription: string
    serviceStatus?: $Enums.ServiceStatus | null
    paymentStatus?: $Enums.PaymentStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerId?: string | null
  }

  export type BudgetsCreateOrConnectWithoutServicesProvidedInput = {
    where: BudgetsWhereUniqueInput
    create: XOR<BudgetsCreateWithoutServicesProvidedInput, BudgetsUncheckedCreateWithoutServicesProvidedInput>
  }

  export type EmployeesCreateWithoutServiceProvidedInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate: Date | string
    hireDate: Date | string
    email: string
    phone: string
    address: string
    wage: string
    role: string
    roleLevel?: $Enums.RoleLevel | null
    positionTitle: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: string | null
    departments?: DeptEmployeeCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeesUncheckedCreateWithoutServiceProvidedInput = {
    id?: string
    firstName: string
    lastName: string
    birthDate: Date | string
    hireDate: Date | string
    email: string
    phone: string
    address: string
    wage: string
    role: string
    roleLevel?: $Enums.RoleLevel | null
    positionTitle: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: string | null
    departments?: DeptEmployeeUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeesCreateOrConnectWithoutServiceProvidedInput = {
    where: EmployeesWhereUniqueInput
    create: XOR<EmployeesCreateWithoutServiceProvidedInput, EmployeesUncheckedCreateWithoutServiceProvidedInput>
  }

  export type CustomerUpsertWithoutServiceProvidedInput = {
    update: XOR<CustomerUpdateWithoutServiceProvidedInput, CustomerUncheckedUpdateWithoutServiceProvidedInput>
    create: XOR<CustomerCreateWithoutServiceProvidedInput, CustomerUncheckedCreateWithoutServiceProvidedInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutServiceProvidedInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutServiceProvidedInput, CustomerUncheckedUpdateWithoutServiceProvidedInput>
  }

  export type CustomerUpdateWithoutServiceProvidedInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    roleLevel?: NullableEnumRoleLevelFieldUpdateOperationsInput | $Enums.RoleLevel | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    budgets?: BudgetsUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutServiceProvidedInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    roleLevel?: NullableEnumRoleLevelFieldUpdateOperationsInput | $Enums.RoleLevel | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    budgets?: BudgetsUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type BudgetsUpsertWithoutServicesProvidedInput = {
    update: XOR<BudgetsUpdateWithoutServicesProvidedInput, BudgetsUncheckedUpdateWithoutServicesProvidedInput>
    create: XOR<BudgetsCreateWithoutServicesProvidedInput, BudgetsUncheckedCreateWithoutServicesProvidedInput>
    where?: BudgetsWhereInput
  }

  export type BudgetsUpdateToOneWithWhereWithoutServicesProvidedInput = {
    where?: BudgetsWhereInput
    data: XOR<BudgetsUpdateWithoutServicesProvidedInput, BudgetsUncheckedUpdateWithoutServicesProvidedInput>
  }

  export type BudgetsUpdateWithoutServicesProvidedInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicePrice?: StringFieldUpdateOperationsInput | string
    serviceDescription?: StringFieldUpdateOperationsInput | string
    serviceStatus?: NullableEnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus | null
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutBudgetsNestedInput
  }

  export type BudgetsUncheckedUpdateWithoutServicesProvidedInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicePrice?: StringFieldUpdateOperationsInput | string
    serviceDescription?: StringFieldUpdateOperationsInput | string
    serviceStatus?: NullableEnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus | null
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeesUpsertWithoutServiceProvidedInput = {
    update: XOR<EmployeesUpdateWithoutServiceProvidedInput, EmployeesUncheckedUpdateWithoutServiceProvidedInput>
    create: XOR<EmployeesCreateWithoutServiceProvidedInput, EmployeesUncheckedCreateWithoutServiceProvidedInput>
    where?: EmployeesWhereInput
  }

  export type EmployeesUpdateToOneWithWhereWithoutServiceProvidedInput = {
    where?: EmployeesWhereInput
    data: XOR<EmployeesUpdateWithoutServiceProvidedInput, EmployeesUncheckedUpdateWithoutServiceProvidedInput>
  }

  export type EmployeesUpdateWithoutServiceProvidedInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    wage?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    roleLevel?: NullableEnumRoleLevelFieldUpdateOperationsInput | $Enums.RoleLevel | null
    positionTitle?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    departments?: DeptEmployeeUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeesUncheckedUpdateWithoutServiceProvidedInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    wage?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    roleLevel?: NullableEnumRoleLevelFieldUpdateOperationsInput | $Enums.RoleLevel | null
    positionTitle?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    departments?: DeptEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type BudgetsCreateManyCustomerInput = {
    id?: string
    servicePrice: string
    serviceDescription: string
    serviceStatus?: $Enums.ServiceStatus | null
    paymentStatus?: $Enums.PaymentStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceProvidedCreateManyCustomerInput = {
    id?: string
    serviceStatus: $Enums.ServiceStatus
    paymentStatus: $Enums.PaymentStatus
    budgetId: string
    employeeId: string
  }

  export type BudgetsUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicePrice?: StringFieldUpdateOperationsInput | string
    serviceDescription?: StringFieldUpdateOperationsInput | string
    serviceStatus?: NullableEnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus | null
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesProvided?: ServiceProvidedUpdateManyWithoutBudgetNestedInput
  }

  export type BudgetsUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicePrice?: StringFieldUpdateOperationsInput | string
    serviceDescription?: StringFieldUpdateOperationsInput | string
    serviceStatus?: NullableEnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus | null
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicesProvided?: ServiceProvidedUncheckedUpdateManyWithoutBudgetNestedInput
  }

  export type BudgetsUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicePrice?: StringFieldUpdateOperationsInput | string
    serviceDescription?: StringFieldUpdateOperationsInput | string
    serviceStatus?: NullableEnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus | null
    paymentStatus?: NullableEnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceProvidedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceStatus?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    budget?: BudgetsUpdateOneRequiredWithoutServicesProvidedNestedInput
    employee?: EmployeesUpdateOneRequiredWithoutServiceProvidedNestedInput
  }

  export type ServiceProvidedUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceStatus?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    budgetId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceProvidedUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceStatus?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    budgetId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceProvidedCreateManyEmployeeInput = {
    id?: string
    serviceStatus: $Enums.ServiceStatus
    paymentStatus: $Enums.PaymentStatus
    customerId: string
    budgetId: string
  }

  export type DeptEmployeeCreateManyEmployeeInput = {
    guid_deptEmp?: string
    deptId: string
  }

  export type ServiceProvidedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceStatus?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    customer?: CustomerUpdateOneRequiredWithoutServiceProvidedNestedInput
    budget?: BudgetsUpdateOneRequiredWithoutServicesProvidedNestedInput
  }

  export type ServiceProvidedUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceStatus?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    customerId?: StringFieldUpdateOperationsInput | string
    budgetId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceProvidedUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceStatus?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    customerId?: StringFieldUpdateOperationsInput | string
    budgetId?: StringFieldUpdateOperationsInput | string
  }

  export type DeptEmployeeUpdateWithoutEmployeeInput = {
    guid_deptEmp?: StringFieldUpdateOperationsInput | string
    departments?: DepartmentsUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type DeptEmployeeUncheckedUpdateWithoutEmployeeInput = {
    guid_deptEmp?: StringFieldUpdateOperationsInput | string
    deptId?: StringFieldUpdateOperationsInput | string
  }

  export type DeptEmployeeUncheckedUpdateManyWithoutEmployeeInput = {
    guid_deptEmp?: StringFieldUpdateOperationsInput | string
    deptId?: StringFieldUpdateOperationsInput | string
  }

  export type DeptEmployeeCreateManyDepartmentsInput = {
    guid_deptEmp?: string
    employeeId: string
  }

  export type DeptEmployeeUpdateWithoutDepartmentsInput = {
    guid_deptEmp?: StringFieldUpdateOperationsInput | string
    employee?: EmployeesUpdateOneRequiredWithoutDepartmentsNestedInput
  }

  export type DeptEmployeeUncheckedUpdateWithoutDepartmentsInput = {
    guid_deptEmp?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type DeptEmployeeUncheckedUpdateManyWithoutDepartmentsInput = {
    guid_deptEmp?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceProvidedCreateManyBudgetInput = {
    id?: string
    serviceStatus: $Enums.ServiceStatus
    paymentStatus: $Enums.PaymentStatus
    customerId: string
    employeeId: string
  }

  export type ServiceProvidedUpdateWithoutBudgetInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceStatus?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    customer?: CustomerUpdateOneRequiredWithoutServiceProvidedNestedInput
    employee?: EmployeesUpdateOneRequiredWithoutServiceProvidedNestedInput
  }

  export type ServiceProvidedUncheckedUpdateWithoutBudgetInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceStatus?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    customerId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceProvidedUncheckedUpdateManyWithoutBudgetInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceStatus?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    customerId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmployeesCountOutputTypeDefaultArgs instead
     */
    export type EmployeesCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EmployeesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepartmentsCountOutputTypeDefaultArgs instead
     */
    export type DepartmentsCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BudgetsCountOutputTypeDefaultArgs instead
     */
    export type BudgetsCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = BudgetsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmployeesDefaultArgs instead
     */
    export type EmployeesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EmployeesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepartmentsDefaultArgs instead
     */
    export type DepartmentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = DepartmentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeptEmployeeDefaultArgs instead
     */
    export type DeptEmployeeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = DeptEmployeeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BudgetsDefaultArgs instead
     */
    export type BudgetsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = BudgetsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceProvidedDefaultArgs instead
     */
    export type ServiceProvidedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ServiceProvidedDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}