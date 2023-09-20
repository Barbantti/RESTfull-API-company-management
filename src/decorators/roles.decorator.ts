import { SetMetadata } from '@nestjs/common';

export const Roles = (roleLevels: string[]) =>
  SetMetadata('roleLevels', roleLevels);
console.log('ROLE LEVEL: ', Roles);
