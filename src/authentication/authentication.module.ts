import { Module, forwardRef } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthenticationService } from './authentication.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationController } from './authentication.controller';
import { CompanyEmployeesModule } from 'src/company-employees/company-employees.module';
import { CustomerModule } from 'src/customer/customer.module';
import { CompanyDepartmentsModule } from 'src/company-departments/company-departments.module';
import { CustomerBudgetsModule } from 'src/customer-budgets/customer-budgets.module';
import { ServiceProvidedModule } from 'src/serviceProvided/serviceProvided.module';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
    forwardRef(() => CustomerModule),
    forwardRef(() => CompanyEmployeesModule),
    forwardRef(() => CompanyDepartmentsModule),
    forwardRef(() => CustomerBudgetsModule),
    forwardRef(() => ServiceProvidedModule),
    PrismaModule,
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
