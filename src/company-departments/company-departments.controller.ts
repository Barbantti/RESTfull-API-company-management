import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  ParseBoolPipe,
  UseGuards,
} from '@nestjs/common';
import { CompanyDepartmentsService } from './company-departments.service';
import { IDepartments } from 'src/interfaces/interfaces';
import { GetId } from 'src/decorators/param-id.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { EmployeeAuthenticationGuard } from 'src/Guards/employeeAuthentication.guard';
import { EmployeeRoleGuard } from 'src/Guards/employeeRole.guard';

@Roles(['employee', 'developer'])
@UseGuards(EmployeeAuthenticationGuard, EmployeeRoleGuard)
@Controller('company-departments')
export class CompanyDepartmentsController {
  constructor(
    private readonly companyDepartmentService: CompanyDepartmentsService,
  ) {}

  // POST departmentRoute
  @Post()
  async createNewDepartment(
    @Body('isActive', ParseBoolPipe) isActive: boolean,
    @Body() data: IDepartments,
  ) {
    data.isActive = isActive;
    return await this.companyDepartmentService.createNewDepartment(data);
  }

  // GET all departments
  @Get()
  async getAllDepartments() {
    return await this.companyDepartmentService.getAllDepartments();
  }

  // GET department by id
  @Get(':id')
  async getDepartmentById(@GetId() id: string) {
    return await this.companyDepartmentService.getDepartmentById(id);
  }

  // PATCH update departmentRouteById
  @Patch(':id')
  async updateDepartmentData(
    @Body('isActive', ParseBoolPipe) isActive: boolean,
    @Body() data: IDepartments,
    @GetId() id: string,
  ) {
    data.isActive = isActive;
    return await this.companyDepartmentService.updateDepartmentData(id, data);
  }

  // DELETE departmentRouteById
  @Roles(['developer'])
  @Delete(':id')
  async deleteDepartmentData(@GetId() id: string) {
    return await this.companyDepartmentService.deleteDepartmentData(id);
  }
}
