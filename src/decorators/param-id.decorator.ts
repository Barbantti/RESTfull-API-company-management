import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const GetId = createParamDecorator(
  (_data: string, context: ExecutionContext) => {
    const takeId = context.switchToHttp().getRequest().params.id;
    console.log('TAKE ID DECORATOR: ', takeId);
    return takeId;
  },
);
