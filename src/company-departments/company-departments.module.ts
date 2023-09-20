import { Module, forwardRef } from '@nestjs/common';
import { CompanyDepartmentsService } from './company-departments.service';
import { CompanyDepartmentsController } from './company-departments.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { CompanyEmployeesModule } from 'src/company-employees/company-employees.module';
import { CompanyEmployeesService } from 'src/company-employees/company-employees.service';
import { CompanyEmployeesController } from 'src/company-employees/company-employees.controller';
import { AuthenticationModule } from 'src/authentication/authentication.module';

@Module({
  imports: [
    forwardRef(() => AuthenticationModule),
    forwardRef(() => CompanyEmployeesModule),
    PrismaModule,
  ],
  controllers: [CompanyDepartmentsController, CompanyEmployeesController],
  providers: [
    PrismaService,
    CompanyDepartmentsService,
    CompanyEmployeesService,
  ],
  exports: [CompanyDepartmentsService],
})
export class CompanyDepartmentsModule {}
