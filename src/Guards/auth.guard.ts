import { Injectable, CanActivate, ExecutionContext, BadRequestException } from '@nestjs/common';
import { AuthenticationService } from 'src/authentication/authentication.service';
import { CompanyEmployeesService } from 'src/company-employees/company-employees.service';
import { CustomerService } from 'src/customer/customer.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly companyEmployeesService: CompanyEmployeesService,
    private readonly customerService: CustomerService,
  ) {}

  async checkTokenValidation(token: string): Promise<any> {
    try {
      const data = await this.authenticationService.checkTokenValidation(token);
      return data;
    } catch (error) {
      throw new BadRequestException(
        'Error to validating token, please contact the operational sector for more information',
        error,
      );
    }
  }

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    const { authorization } = request.headers;

    const token = (authorization ?? '').split(' ')[1];

    if (token) {
      try {
        const data = await this.checkTokenValidation(token);

        if (data.aud === 'customer') {

          request.tokenPayload = data;

          const customer = await this.customerService.getCustomerById(data.id);

          if (customer) {
            request.customer = customer;

            return true;
          }
        } else if (data.aud === 'employee' || data.aud === 'developer') {

          request.tokenPayload = data;

          const employee = await this.companyEmployeesService.getEmployeeById(data.id);

          if (employee) {
            request.employee = employee;

            return true;
          }
        }
      } catch (error) {
        console.error('Error to token validate', error);
      }
    }

    console.log('RETORNOU FALSE!');
    return false;
  }
}
