import { Module, forwardRef } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthenticationModule } from 'src/authentication/authentication.module';
import { CompanyEmployeesService } from 'src/company-employees/company-employees.service';

@Module({
  imports: [forwardRef(() => AuthenticationModule), PrismaModule],
  controllers: [CustomerController],
  providers: [PrismaService, CustomerService, CompanyEmployeesService],
  exports: [CustomerService],
})
export class CustomerModule {}
