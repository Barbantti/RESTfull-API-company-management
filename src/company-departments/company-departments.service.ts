import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { IDepartments } from 'src/interfaces/interfaces';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompanyDepartmentsService {
  constructor(private readonly prisma: PrismaService) {}

  // Create new Department
  async createNewDepartment(data: IDepartments) {
    console.log('createNewDepartment: ', data);
    if (data) {
      const { name, isActive } = data;
      return await this.prisma.departments.create({
        data: {
          name,
          isActive,
        },
      });
    } else {
      throw new NotFoundException(
        'Please insert valid data to create new department.',
      );
    }
  }

  // Search for all departments
  async getAllDepartments() {
    console.log('getAllDepartments: ', );
    return await this.prisma.departments.findMany({ where: {} });
  }

  // Search a department by id
  async getDepartmentById(id: string) {
    console.log('getDepartmentById: ', id);
    await this.checkDepartmentId(id);

    if (id) {
      return await this.prisma.departments.findUnique({
        where: {
          id,
        },
      });
    } else {
      throw new NotFoundException('Please insert a valid data to search.');
    }
  }

  // Updating department data
  async updateDepartmentData(id: string, data: IDepartments) {
    await this.checkDepartmentId(id);
    console.log('updateDepartmentData: ', id, data);

    if (id && data) {
      return await this.prisma.departments.update({
        where: { id: id },
        data: {
          name: data.name,
          isActive: data.isActive,
        },
      });
    } else {
      throw new NotFoundException('Please a insert valid data to update.');
    }
  }

  // Deleting a department data as need
  async deleteDepartmentData(id: string) {
    await this.checkDepartmentId(id);
    console.log('deleteDepartmentData: ', id);

    if (id) {
      await this.prisma.departments.delete({
        where: {
          id,
        },
      });
    } else {
      throw new NotFoundException(`Department data ${id}, does not exist!.`);
    }
  }

  // Checking if department exist
  async checkDepartmentId(id: string) {
    console.log('checkDepartmentId: ', id);
    if (
      !(await this.prisma.departments.count({
        where: { id },
      }))
    ) {
      throw new BadRequestException(`Department data ${id}, does not exist!`);
    }
  }

  // Checking if employee id exist in a junction dept
  async checkEmployeeId(employeeId: string) {
    console.log('checkEmployeeId: ', employeeId);
    if (
      !(await this.prisma.deptEmployee.findFirst({
        where: {
          employeeId,
        },
      }))
    ) {
      throw new BadRequestException(
        `Employee id ${employeeId}, does not exist on this department`,
      );
    }
  }
}
