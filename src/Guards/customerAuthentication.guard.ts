import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthenticationService } from 'src/authentication/authentication.service';
import { CustomerService } from 'src/customer/customer.service';

@Injectable()
export class CustomerAuthenticationGuard implements CanActivate {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly customerService: CustomerService,
  ) {}
  // Customer guard
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    const { authorization } = request.headers;

    try {
      const data =
        await this.authenticationService.checkCustomerTokenValidation(
          (authorization ?? '').split(' ')[1],
        );
      request.tokenPayload = data;

      request.customer = await this.customerService.getCustomerById(data.id);

      return true;
    } catch (error) {
      return false;
    }
  }
}
