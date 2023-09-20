import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CompanyEmployeesService } from './company-employees.service';
import { IEmployees } from 'src/interfaces/interfaces';
import { GetId } from 'src/decorators/param-id.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { EmployeeAuthenticationGuard } from 'src/Guards/employeeAuthentication.guard';
import { EmployeeRoleGuard } from 'src/Guards/employeeRole.guard';

@Controller('company-employees')
export class CompanyEmployeesController {
  constructor(
    private readonly companyEmployeeService: CompanyEmployeesService,
  ) {}

  // POST employeeRoute
  @Post()
  async createNewEmployee(@Body() data: IEmployees) {
    return await this.companyEmployeeService.createNewEmployee(data);
  }

  // GET all employeeRoute
  @Get()
  @Roles(['employee', 'developer'])
  @UseGuards(EmployeeAuthenticationGuard, EmployeeRoleGuard)
  async getAllEmployee() {
    return await this.companyEmployeeService.getAllEmployee();
  }

  // GET employeeRouteById
  @Get(':id')
  @Roles(['employee', 'developer'])
  @UseGuards(EmployeeAuthenticationGuard, EmployeeRoleGuard)
  async getEmployeeById(@GetId() id: string) {
    return await this.companyEmployeeService.getEmployeeById(id);
  }

  // PATCH update employeeRouteById
  @Patch(':id')
  @Roles(['employee', 'developer'])
  @UseGuards(EmployeeAuthenticationGuard, EmployeeRoleGuard)
  async updateEmployeeData(@Body() data: IEmployees, @GetId() id: string) {
    return await this.companyEmployeeService.updateEmployeeData(data, id);
  }

  // DELETE employeeRouteById
  @Roles(['developer'])
  @UseGuards(EmployeeAuthenticationGuard, EmployeeRoleGuard)
  @Delete(':id')
  async deleteEmployeeData(@GetId() id: string) {
    return await this.companyEmployeeService.deleteEmployeeData(id);
  }
}
