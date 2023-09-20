import { ServiceProvidedModule } from './serviceProvided/serviceProvided.module';
import { Module, forwardRef } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { CompanyDepartmentsModule } from './company-departments/company-departments.module';
import { CompanyEmployeesModule } from './company-employees/company-employees.module';
import { CustomerModule } from './customer/customer.module';
import { CustomerBudgetsModule } from './customer-budgets/customer-budgets.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    forwardRef(() => AuthenticationModule),
    forwardRef(() => CompanyDepartmentsModule),
    forwardRef(() => CompanyEmployeesModule),
    forwardRef(() => CustomerModule),
    forwardRef(() => CustomerBudgetsModule),
    forwardRef(() => ServiceProvidedModule),
    forwardRef(() => PrismaModule),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
