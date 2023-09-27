import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CustomerBudgetsService } from './customer-budgets.service';
import { ICustomerBudgets } from 'src/interfaces/interfaces';
import { GetId } from 'src/decorators/param-id.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { RoleGuard } from 'src/Guards/role.guard';
import { AuthGuard } from 'src/Guards/auth.guard';

@Roles(['developer', 'customer'])
@UseGuards(AuthGuard, RoleGuard)
@Controller('customer-budgets')
export class CustomerBudgetsController {
  constructor(
    private readonly customerBudgetsService: CustomerBudgetsService,
  ) {}

  // Creating new budget
  // POST budget route
  @Roles(['employee', 'customer'])
  @Post()
  async createNewBudget(@Body() data: ICustomerBudgets) {
    console.log('NEW BUDGET: ', data);
    return await this.customerBudgetsService.createNewBudget(data);
  }

  // GET all budgets route
  @Get()
  async getAllBudgets() {
    return await this.customerBudgetsService.getAllBudgets();
  }

  // GET budget by id route
  @Roles(['employee'])
  @Get(':id')
  async getBudgetById(@GetId() id: string) {
    return this.customerBudgetsService.getBudgetById(id);
  }

  // PATCH update budget by id route
  @Patch(':id')
  async updateBudgetById(@Body() data: ICustomerBudgets, @GetId() id: string) {
    return await this.customerBudgetsService.updateBudgetById(data, id);
  }

  // DELETE budget by id route
  @Roles(['developer'])
  @Delete(':id')
  async deleteBudgetById(@GetId() id: string) {
    return await this.customerBudgetsService.deleteBudgetById(id);
  }
}
