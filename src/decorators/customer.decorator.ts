import {
  ExecutionContext,
  NotFoundException,
  createParamDecorator,
} from '@nestjs/common';

export const CustomerDecorator = createParamDecorator(
  (filter: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    if (request.customer) {
      request.customer[filter];
      if (filter) {
      } else {
        console.log('request.customer', request.customer)
        return request.customer;
      }
    } else {
      throw new NotFoundException(
        'The customer data was not found upon request.',
      );
    }
  },
);
