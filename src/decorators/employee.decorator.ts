import {
  ExecutionContext,
  NotFoundException,
  createParamDecorator,
} from '@nestjs/common';

export const EmployeeDecorator = createParamDecorator(
  (filter: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    if (request.employee) {
      request.employee[filter];
      if (filter) {
      } else {
        return request.employee;
      }
    } else {
      throw new NotFoundException(
        'The employee data was not found upon request.',
      );
    }
  },
);
