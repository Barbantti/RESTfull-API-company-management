import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ServiceProvidedService } from './serviceProvided.service';
import { NewBudgetDTO } from './dto/new-budget.dto';
import { GetId } from 'src/decorators/param-id.decorator';
import { PrismaService } from 'src/prisma/prisma.service';

import { Roles } from 'src/decorators/roles.decorator';
import { RoleGuard } from 'src/Guards/role.guard';
import { AuthGuard } from 'src/Guards/auth.guard';

@Roles(['customer, developer'])
@UseGuards(
  AuthGuard,
  RoleGuard
)
@Controller('budget')
export class ServiceProvidedController {
  constructor(
    private readonly serviceProvidedService: ServiceProvidedService,
    private readonly prisma: PrismaService,
  ) {}

  // Create a budget service
  // POST
  @Post(':id')
  async createNewBudget(
    @Body() data: NewBudgetDTO,
    @GetId() id: string,
    employeeId: any,
    department: string,
  ) {
    const employeeData = await this.prisma.employees.findMany({
      where: {
        id: employeeId,
        department: department,
      },
    });

    if (employeeData) {
      return await this.serviceProvidedService.createNewBudget(
        data,
        id,
        employeeData,
      );
    }
  }

  // GET all budget route
  @Get()
  async getAllBudget() {
    return await this.serviceProvidedService.getAllBudget();
  }

  // GET a budget by id route
  @Get(':id')
  async getBudgetById(@GetId() id: string) {
    return await this.serviceProvidedService.getBudgetById(id);
  }

  // PATCH update a budget by id
  @Patch(':id')
  async updateBudgetData(@Body() data: NewBudgetDTO, @GetId() id: string) {
    return await this.serviceProvidedService.updateBudgetData(data, id);
  }

  // DELETE budget by id route
  @Delete(':id')
  @Roles(['developer'])
  async deleteBudgetData(@GetId() id: string) {
    return await this.serviceProvidedService.deleteBudgetData(id);
  }
}
