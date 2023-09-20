import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthenticationService } from 'src/authentication/authentication.service';
import { CompanyEmployeesService } from 'src/company-employees/company-employees.service';

@Injectable()
export class EmployeeAuthenticationGuard implements CanActivate {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly companyEmployeesService: CompanyEmployeesService,
  ) {}
  // Employee guard
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    const { authorization } = request.headers;

    try {
      const data =
        await this.authenticationService.checkEmployeeTokenValidation(
          (authorization ?? '').split(' ')[1],
        );

      request.tokenPayload = data;

      request.employee = await this.companyEmployeesService.getEmployeeById(
        data.id,
      );

      return true;
    } catch (error) {
      return false;
    }
  }
}
