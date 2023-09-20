import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NewBudgetDTO } from './dto/new-budget.dto';
@Injectable()
export class ServiceProvidedService {
  constructor(private readonly prisma: PrismaService) {}

  // Associate a budget to customer and employee
  async createNewBudget(
    data: NewBudgetDTO,
    customerId: string,
    employeeData: any,
  ) {
    try {
      const { servicePrice, serviceDescription, serviceStatus, paymentStatus } =
        data;

      // Checking if budget already on service provided
      const checkIfBudgetExist = await this.prisma.budgets.findFirst({
        where: {
          servicePrice,
          serviceDescription,
          customerId,
        },
      });

      // If exist return bad request
      if (!checkIfBudgetExist) {
        const budgetData = await this.prisma.budgets.create({
          data: {
            servicePrice: servicePrice,
            serviceDescription: serviceDescription,
            customerId: customerId,
          },
        });

        // Checking if have budgetData and employeeData

        if ((budgetData && employeeData !== null) || undefined) {
          // Filtering employee data by department to take id
          const operationalSectorEmployees = employeeData.filter(
            (employee: any) => employee.department === 'operationalSector',
          );

          if (operationalSectorEmployees) {
            // Checking if budget already exist on service provided
            const existingAssoc = await this.prisma.serviceProvided.findFirst({
              where: {
                customerId: customerId,
                budgetId: budgetData.id,
                employeeId: operationalSectorEmployees.id,
                serviceStatus: serviceStatus,
                paymentStatus: paymentStatus,
              },
            });

            // If exist return bad request
            if (existingAssoc) {
              throw new BadRequestException(
                `Customer and employee already associated with this service provided.`,
              );
            }
            const takeOneEmp =
              operationalSectorEmployees[Math.floor(Math.random())];

            // Getting employee by id
            const employeeId = takeOneEmp.id;

            // Creating new service provided
            const serviceProvidedData =
              await this.prisma.serviceProvided.create({
                data: {
                  customerId: customerId,
                  budgetId: budgetData.id,
                  employeeId: employeeId,
                  serviceStatus: serviceStatus,
                  paymentStatus: paymentStatus,
                },
              });

            if (!serviceProvidedData) {
              throw new BadRequestException('Error to create service.');
            }

            return serviceProvidedData;
          } else {
            throw new NotFoundException(
              'Does not employee available at this department.',
            );
          }
        }
      } else {
        // Checking if have checkIfBudgetExist and employeeData
        if ((checkIfBudgetExist && employeeData !== null) || undefined) {
          // Filtering employee data by department to take id
          const operationalSectorEmployees = employeeData.filter(
            (employee: any) => employee.department === 'operationalSector',
          );

          if (operationalSectorEmployees) {
            // Checking if budget already exist on service provided
            const existingAssoc = await this.prisma.serviceProvided.findFirst({
              where: {
                customerId: customerId,
                budgetId: checkIfBudgetExist.id,
                employeeId: operationalSectorEmployees.id,
                serviceStatus: serviceStatus,
                paymentStatus: paymentStatus,
              },
            });

            // If already exist return bad request
            if (existingAssoc) {
              throw new BadRequestException(
                `Customer and employee already associated with this service provided.`,
              );
            }
            const takeOneEmp =
              operationalSectorEmployees[Math.floor(Math.random())];
            // Getting employee by id
            const employeeId = takeOneEmp.id;

            const serviceProvidedData =
              await this.prisma.serviceProvided.create({
                data: {
                  customerId: customerId,
                  budgetId: checkIfBudgetExist.id,
                  employeeId: employeeId,
                  serviceStatus: serviceStatus,
                  paymentStatus: paymentStatus,
                },
              });

            if (!serviceProvidedData) {
              throw new BadRequestException('Error to create service.');
            }

            return serviceProvidedData;
          } else {
            throw new NotFoundException(
              'Does not employee available at this department.',
            );
          }
        }
      }
    } catch (error) {
      throw new BadRequestException(
        'Has ocurred a error to create new service provided',
        error,
      );
    }
  }

  // Search all service Provided on db
  async getAllBudget() {
    return await this.prisma.serviceProvided.findMany();
  }

  // Search service provided by id
  async getBudgetById(id: string) {
    await this.checkServiceProvidedId(id);

    if (id) {
      return await this.prisma.serviceProvided.findUnique({
        where: {
          id,
        },
      });
    } else {
      throw new NotFoundException('Please insert a valid data to search.');
    }
  }

  // Updating service provided data by id
  async updateBudgetData(data: NewBudgetDTO, serviceId: string) {
    await this.checkServiceProvidedId(serviceId);

    if (data && serviceId) {
      return await this.prisma.serviceProvided.update({
        where: { id: serviceId },
        data: {
          paymentStatus: data.paymentStatus,
          serviceStatus: data.serviceStatus,
        },
      });
    } else {
      throw new NotFoundException('Please insert a valid data to update.');
    }
  }

  // Delete a service provided
  async deleteBudgetData(serviceId: string) {
    await this.checkServiceProvidedId(serviceId);

    if (serviceId) {
      return await this.prisma.serviceProvided.delete({
        where: {
          id: serviceId,
        },
      });
    } else {
      throw new NotFoundException(
        `Service provided data ${serviceId}, does not exist!.`,
      );
    }
  }

  // Checking if service provided id exist
  async checkServiceProvidedId(serviceId: string) {
    if (
      !(await this.prisma.serviceProvided.count({
        where: {
          id: serviceId,
        },
      }))
    ) {
      throw new NotFoundException(
        `Service provided data ${serviceId}, does not exist!`,
      );
    }
  }
}
