import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { IEmployees } from 'src/interfaces/interfaces';
import { PrismaService } from 'src/prisma/prisma.service';
import { DeptAreas } from 'prisma/prismaClient';
import * as moment from 'moment';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CompanyEmployeesService {
  constructor(private readonly prisma: PrismaService) {}

  // create new employee
  async createNewEmployee(data: IEmployees) {
    // Checking min length pass
    if (data) {
      if (data.password.length < 6) {
        new NotFoundException('Please insert min 6 characters on password');
      }
      // Encrypting employee Password
      data.password = await bcrypt.hash(
        data.password.toString(),
        await bcrypt.genSalt(),
      );
      // Treating birth date
      if (data.birthDate) {
        data.birthDate = moment(data.birthDate, 'DD-MM-YYYY').format(
          'YYYY-MM-DDT00:00:00.000-00:00',
        );
      }
      // Treating hire date
      if (data.hireDate) {
        data.hireDate = moment(data.hireDate, 'DD-MM-YYYY').format(
          'YYYY-MM-DDT00:00:00.000-00:00',
        );
      }
      // Checking if email already exist on db
      const checkIsEmailOnDb = await this.prisma.employees.findUnique({
        where: {
          email: data.email,
        },
      });
      if (checkIsEmailOnDb) {
        throw new NotFoundException('Email already in use.');
      }

      const newEmployee = await this.prisma.employees.create({
        data,
      });

      if (data.department) {
        const departmentName = data.department as DeptAreas;
        await this.associateDepartmentToEmployee(
          newEmployee.id,
          departmentName,
        );
      }
      return newEmployee;
    } else {
      throw new NotFoundException(
        'Please insert valid data to create new employee.',
      );
    }
  }

  // Associate a department to employee
  async associateDepartmentToEmployee(
    employeeId: string,
    departmentName: DeptAreas,
  ) {
    // Assign employee to department
    const validDeptAreas: DeptAreas[] = Object.values(DeptAreas);

    if (validDeptAreas.includes(departmentName as DeptAreas)) {
      const departmentData = await this.prisma.departments.findFirst({
        where: {
          name: departmentName as DeptAreas,
        },
      });

      // Checking if employee already on dept table
      const existingAssoc = await this.prisma.deptEmployee.findFirst({
        where: {
          employeeId,
          departments: {
            name: departmentName,
          },
        },
      });

      if (existingAssoc) {
        throw new BadRequestException(
          'Employee already associated with this department.',
        );
      }

      // Update the employee's department by creating a new DeptEmployee entry
      if (departmentData?.id && employeeId) {
        const empId = employeeId.toString();
        const deptId = departmentData.id.toString();
        console.log('empId', empId);
        console.log('deptId', deptId);

        await this.prisma.deptEmployee.create({
          data: {
            employeeId: empId,
            deptId: deptId,
          },
        });
      }
    } else {
      throw new BadRequestException('Invalid department.');
    }
  }

  // Search all employees on db
  async getAllEmployee() {
    return await this.prisma.employees.findMany();
  }

  // Search a employee by id
  async getEmployeeById(id: string) {
    await this.checkEmployeeId(id);

    if (id) {
      return await this.prisma.employees.findUnique({
        where: {
          id,
        },
      });
    } else {
      throw new NotFoundException('Please insert a valid data to search.');
    }
  }

  // Updating employee data
  async updateEmployeeData(data: IEmployees, id: string) {
    await this.checkEmployeeId(id);

    if (data && id) {
      // Checking min length pass
      if (data.password.length < 6) {
        throw new BadRequestException(
          'Please insert min 6 characters on password',
        );
      }
      // Encrypting employee data
      data.password = await bcrypt.hash(
        data.password.toString(),
        await bcrypt.genSalt(),
      );

      // Treating hireDate
      data.hireDate = moment(data.hireDate, 'DD-MM-YYYY').format(
        'YYYY-MM-DDT00:00:00.000-00:00',
      );

      // Treating birthDate
      data.birthDate = moment(data.birthDate, 'DD-MM-YYYY').format(
        'YYYY-MM-DDT00:00:00.000-00:00',
      );

      // Fetch the department data
      if (data.department) {
        const departmentName = data.department as DeptAreas;
        await this.associateDepartmentToEmployee(id, departmentName);
      }

      return await this.prisma.employees.update({
        data,
        where: {
          id,
        },
      });
    } else {
      return new NotFoundException('Employee data not found.');
    }
  }

  // Deleting employee data as need
  async deleteEmployeeData(id: string) {
    await this.checkEmployeeId(id);

    if (id) {
      await this.prisma.employees.delete({
        where: {
          id,
        },
      });
    } else {
      throw new NotFoundException(`Employee data ${id}, does not exist!.`);
    }
  }

  // Checking if employee exist
  async checkEmployeeId(id: string) {
    if (
      !(await this.prisma.employees.count({
        where: {
          id,
        },
      }))
    ) {
      throw new BadRequestException(`Employee data ${id}, does not exist!`);
    }
  }

  // Checking if department exist
  async validateDepartmentId(id: string) {
    const departmentExists = await this.prisma.departments.count({
      where: {
        id,
      },
    });
    if (departmentExists === 0) {
      throw new BadRequestException(
        `Department with ID ${id}, does not exist!`,
      );
    }
  }

  // Get employee role level
  async getEmployeeRoleLevel(employeeId: string) {
    const employee = await this.prisma.employees.findUnique({
      where: {
        id: employeeId,
      },
      select: {
        roleLevel: true,
      },
    });

    return employee ? employee.roleLevel : null;
  }
}
