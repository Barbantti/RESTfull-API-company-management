import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ICustomer } from 'src/interfaces/interfaces';
import { PrismaService } from 'src/prisma/prisma.service';
import * as moment from 'moment';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService) {}

  //   createNewCustomer
  async createNewCustomer(data: ICustomer) {
    console.log('createNewCustomer: ', data);
    if (data) {
      // Checking min length pass
      console.log('DATA:', data);
      if (data.password.length < 6) {
        new NotFoundException('Please insert min 6 charters on password');
      }
      // Encrypting customerPassword
      data.password = await bcrypt.hash(
        data.password.toString(),
        await bcrypt.genSalt(),
      );
      // Treating formatData
      if (data.birthDate) {
        data.birthDate = moment(data.birthDate, 'DD-MM-YYYY').format(
          'YYYY-MM-DDT00:00:00.000-00:00',
        );
      }
      // Checking if email already exist on db
      const checkIsEmailOnDb = await this.prisma.customer.findUnique({
        where: {
          email: data.email,
        },
      });
      if (checkIsEmailOnDb) {
        throw new NotFoundException('Email already in use.');
      }

      const newCustomer = await this.prisma.customer.create({
        data,
      });

      return newCustomer;
    } else {
      throw new NotFoundException(
        'Please insert valid data to create new customer.',
      );
    }
  }

  // Search all customer on db
  async getAllCustomer() {
    console.log('getAllCustomer: ', );
    return await this.prisma.customer.findMany();
  }

  // Search a customer by id
  async getCustomerById(id: string) {
    console.log('getCustomerById: ', id);
    await this.checkCustomerId(id);

    if (id) {
      return await this.prisma.customer.findUnique({
        where: {
          id,
        },
      });
    } else {
      throw new NotFoundException('Please insert a valid data to search.');
    }
  }
  // Updating customer data
  async updateCustomerData(data: ICustomer, id: string) {
    await this.checkCustomerId(id);
    console.log('updateCustomerData: ', data, id);

    if (id) {
      // Checking min length pass
      if (data.password.length < 6) {
        return new NotFoundException(
          'Please insert min 6 charters on password',
        );
      }
      // Encrypting customerPassword
      data.password = await bcrypt.hash(
        data.password.toString(),
        await bcrypt.genSalt(),
      );
      // Treating formatData
      data.birthDate = moment(data.birthDate, 'DD-MM-YYYY').format(
        'YYYY-MM-DDT00:00:00.000-00:00',
      );
      const updateCustomer = await this.prisma.customer.update({
        data,
        where: {
          id,
        },
      });

      return updateCustomer;
    } else {
      return new NotFoundException('Customer data not found.');
    }
  }

  // Deleting customer data as need
  async deleteCustomerData(id: string) {
    await this.checkCustomerId(id);
    console.log('deleteCustomerData: ', id);

    if (id) {
      return await this.prisma.customer.delete({
        where: {
          id,
        },
      });
    } else {
      throw new NotFoundException(`Customer data ${id}, does not exist!.`);
    }
  }

  // Checking if customer exist
  async checkCustomerId(id: string) {
    console.log('checkCustomerId: ', id);
    if (
      !(await this.prisma.customer.count({
        where: {
          id,
        },
      }))
    ) {
      throw new NotFoundException(`Customer data ${id}, does not exist!`);
    }
  }

  // Checking if budget exist
  async checkBudgetId(id: string) {
    console.log('checkBudgetId: ', id);
    if (
      !(await this.prisma.budgets.count({
        where: {
          id,
        },
      }))
    ) {
      throw new BadRequestException(`Budget data ${id}, does not exist.`);
    }
  }

  // Checking if employee exist
  async checkEmployeeId(id: string) {
    console.log('checkEmployeeId: ', id);
    if (
      !(await this.prisma.employees.findFirst({
        where: {
          id,
        },
      }))
    ) {
      throw new BadRequestException(`Employee data ${id}, does not exist.`);
    }
  }

  // Get customer role level
  async getCustomerRoleLevel(customerId: string) {
    console.log('getCustomerRoleLevel: ', customerId);
    const customer = await this.prisma.customer.findUnique({
      where: {
        id: customerId,
      },
      select: {
        roleLevel: true,
      },
    });

    return customer ? customer.roleLevel : null;
  }
}
