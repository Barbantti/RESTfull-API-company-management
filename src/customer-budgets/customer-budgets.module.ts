import { Module, forwardRef } from '@nestjs/common';
import { CustomerBudgetsService } from './customer-budgets.service';
import { CustomerController } from 'src/customer/customer.controller';
import { CustomerModule } from 'src/customer/customer.module';
import { CustomerService } from 'src/customer/customer.service';
import { CustomerBudgetsController } from './customer-budgets.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthenticationModule } from 'src/authentication/authentication.module';
import { CompanyEmployeesModule } from 'src/company-employees/company-employees.module';

@Module({
  imports: [
    forwardRef(() => AuthenticationModule),
    forwardRef(() => CompanyEmployeesModule),
    CustomerModule,
  ],
  controllers: [CustomerBudgetsController, CustomerController],
  providers: [CustomerBudgetsService, CustomerService, PrismaService],
})
export class CustomerBudgetsModule {}
