import { Module, forwardRef } from '@nestjs/common';
import { CompanyEmployeesModule } from 'src/company-employees/company-employees.module';
import { CompanyEmployeesService } from 'src/company-employees/company-employees.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServiceProvidedController } from './serviceProvided.controller';
import { ServiceProvidedService } from './serviceProvided.service';
import { CustomerModule } from 'src/customer/customer.module';
import { CustomerController } from 'src/customer/customer.controller';
import { CustomerService } from 'src/customer/customer.service';
import { NewBudgetDTO } from './dto/new-budget.dto';
import { AuthenticationModule } from 'src/authentication/authentication.module';
@Module({
  imports: [
    forwardRef(() => AuthenticationModule),
    PrismaModule,
    CustomerModule,
    CompanyEmployeesModule,
  ],
  controllers: [ServiceProvidedController, CustomerController],
  providers: [
    ServiceProvidedService,
    CompanyEmployeesService,
    CustomerService,
    PrismaService,
    NewBudgetDTO,
  ],
})
export class ServiceProvidedModule {}
