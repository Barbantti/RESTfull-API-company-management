import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { ICustomer } from 'src/interfaces/interfaces';
import { GetId } from 'src/decorators/param-id.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { RoleGuard } from 'src/Guards/role.guard';
import { AuthGuard } from 'src/Guards/auth.guard';

@Roles(['developer'])
@UseGuards(AuthGuard, RoleGuard)
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  // Creating new customer(user) profile
  // POST customerRoute
  @Post()
  async createNewCustomer(@Body() data: ICustomer) {
    console.log('CREATE:', data);
    return await this.customerService.createNewCustomer(data);
  }

  // GET all customerRoute
  @Get()
  async getAllCustomer() {
    return await this.customerService.getAllCustomer();
  }

  // GET customerRouteById
  @Get(':id')
  async getCustomerById(@GetId() id: string) {
    return this.customerService.getCustomerById(id);
  }

  // PATCH update customerRouteById
  @Patch(':id')
  async updateCustomerData(@Body() data: ICustomer, @GetId() id: string) {
    return await this.customerService.updateCustomerData(data, id);
  }

  // DELETE customerRouteById
  @Delete(':id')
  async deleteCustomerData(@GetId() id: string) {
    return await this.customerService.deleteCustomerData(id);
  }
}
