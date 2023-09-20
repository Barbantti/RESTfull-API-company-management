import { Module, forwardRef } from '@nestjs/common';
import { CompanyEmployeesService } from './company-employees.service';
import { CompanyEmployeesController } from './company-employees.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { CompanyDepartmentsModule } from 'src/company-departments/company-departments.module';
import { AuthenticationModule } from 'src/authentication/authentication.module';

@Module({
  imports: [
    forwardRef(() => AuthenticationModule),
    forwardRef(() => CompanyDepartmentsModule),
    PrismaModule,
  ],
  controllers: [CompanyEmployeesController],
  providers: [PrismaService, CompanyEmployeesService],
  exports: [CompanyEmployeesService],
})
export class CompanyEmployeesModule {}
