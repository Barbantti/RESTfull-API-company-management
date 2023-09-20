// Customer role

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { CompanyEmployeesService } from 'src/company-employees/company-employees.service';

@Injectable()
export class EmployeeRoleGuard implements CanActivate {
  constructor(
    private readonly companyEmployeesService: CompanyEmployeesService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const employeeId = request.employee.id;

    const employeeRoleLevel =
      await this.companyEmployeesService.getEmployeeRoleLevel(employeeId);
    if (employeeRoleLevel === 'employee' || employeeRoleLevel === 'developer') {
      console.log('CHECK EMPLOYEE ROLE LEVEL: "ACCESS ALLOWED"');
      return true;
    }

    return false;
  }
}
