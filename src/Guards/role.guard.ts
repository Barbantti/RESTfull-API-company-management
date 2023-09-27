
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { CompanyEmployeesService } from 'src/company-employees/company-employees.service';
import { CustomerService } from 'src/customer/customer.service';


@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private readonly companyEmployeesService: CompanyEmployeesService,
    private readonly customerService: CustomerService
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    if (request.employee) {
      const employeeId = request.employee.id;
      const employeeRoleLevel = await this.companyEmployeesService.getEmployeeRoleLevel(employeeId);
      
      if (employeeRoleLevel === 'employee' || employeeRoleLevel === 'developer') {
        console.log('CHECK EMPLOYEE ROLE LEVEL: "ACCESS ALLOWED"');
        return true;
      }
    }

    if (request.customer) {
      const customerId = request.customer.id;
      const customerRoleLevel = await this.customerService.getCustomerRoleLevel(customerId);

      if (customerRoleLevel === 'customer') {
        console.log('CHECK CUSTOMER ROLE LEVEL: "ACCESS ALLOWED"');
        return true;
      }
    }

    return false;
  }
}
