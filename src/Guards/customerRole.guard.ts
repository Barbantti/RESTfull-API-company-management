// Customer role

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { CustomerService } from 'src/customer/customer.service';

@Injectable()
export class CustomerRoleGuard implements CanActivate {
  constructor(private readonly customerService: CustomerService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const customerId = request.customer.id;
    console.log('customerId', customerId);

    const customerRoleLevel =
      await this.customerService.getCustomerRoleLevel(customerId);
    if (customerRoleLevel === 'customer') {
      console.log('CHECK CUSTOMER ROLE LEVEL: "ACCESS ALLOWED"');

      return true;
    }

    return true;
  }
}
