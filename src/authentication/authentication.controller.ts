import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ICustomer } from 'src/interfaces/interfaces';
import { IEmployees } from 'src/interfaces/interfaces';
import { AuthenticationService } from './authentication.service';
import { AuthenticationResetDTO } from './dto/authentication-reset.dto';
import { EmployeeDecorator } from 'src/decorators/employee.decorator';
import { CustomerDecorator } from 'src/decorators/customer.decorator';
import { AuthGuard } from 'src/Guards/auth.guard';
@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('customer/login')
  async customerLogin(@Body() { email, password }: ICustomer) {
    console.log('CHEGOU AQUI: ', email, password);
    return await this.authenticationService.customerLogin(email, password);
  }

  @Post('employee/login')
  async employeeLogin(@Body() { email, password }: IEmployees) {
    return await this.authenticationService.employeeLogin(email, password);
  }

  @Post('customer/register')
  async customerRegister(@Body() customerData: ICustomer) {
    return await this.authenticationService.customerRegister(customerData);
  }

  @Post('employee/register')
  async employeeRegister(@Body() employeeData: IEmployees) {
    return await this.authenticationService.employeeRegister(employeeData);
  }

  @Post('customer/forget')
  async customerForget(@Body() { email, birthDate }: ICustomer) {
    return await this.authenticationService.customerForget(email, birthDate);
  }

  @Post('employee/forget')
  async employeeForget(@Body() { email, birthDate }: IEmployees) {
    return await this.authenticationService.employeeForget(email, birthDate);
  }

  @Post('customer/reset')
  async customerResetPassword(
    @Body() { password, token }: AuthenticationResetDTO,
  ) {
    return await this.authenticationService.customerResetPassword(
      password,
      token,
    );
  }

  @Post('employee/reset')
  async employeeResetPassword(
    @Body() { password, token }: AuthenticationResetDTO,
  ) {
    return await this.authenticationService.employeeResetPassword(
      password,
      token,
    );
  }

  @UseGuards(AuthGuard)
  @Post('customer/profile/')
  async customerProfile(@CustomerDecorator() customer) {
    return await { customer };
  }

  @UseGuards(AuthGuard)
  @Post('employee/profile/')
  async employeeProfile(@EmployeeDecorator() employee) {
    {
      console.log('employeeProfile', employee);
      return await { employee };
    }
  }
}
