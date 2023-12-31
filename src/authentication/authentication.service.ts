import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ICustomer } from 'src/interfaces/interfaces';
import { IEmployees } from 'src/interfaces/interfaces';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CustomerService } from 'src/customer/customer.service';
import { CompanyEmployeesService } from 'src/company-employees/company-employees.service';
import * as bcrypt from 'bcrypt';
import { Customer, Employees } from 'prisma/prismaClient';
import * as moment from 'moment';

@Injectable()
export class AuthenticationService {
  private customerIssuer = 'customerLogin';
  private employeeIssuer = 'employeeLogin';
  private customerAudience = 'customer';
  private employeeAudience = 'employee';
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly customerService: CustomerService,
    private readonly employeeService: CompanyEmployeesService,
  ) {}

  async checkTokenValidation(token: string) {
    try {
      if (token) {
        // Verifica o token como cliente
        const customerData = await this.jwtService.verify(token, {
          issuer: this.customerIssuer,
          audience: this.customerAudience,
        });
        return customerData;
      } else {
        // Se nenhum token for fornecido, lança uma exceção
        throw new BadRequestException('Invalid token!');
      }
    } catch (customerError) {
      try {
        // Se ocorrer um erro ao validar como cliente, tenta validar como funcionário
        const employeeData = await this.jwtService.verify(token, {
          issuer: this.employeeIssuer,
          audience: this.employeeAudience,
        });
        return employeeData;
      } catch (employeeError) {
        // Se ocorrer um erro ao validar como funcionário, lança uma exceção
        throw new BadRequestException(
          'Error to validating token, please contact the operational sector for more information',
          employeeError,
        );
      }
    }
  }

  // Generating customer token
  async createCustomerToken(customer: Customer) {
    console.log('createCustomerToken', customer);
    if (customer) {
      return await {
        customerToken: this.jwtService.sign(
          {
            id: customer.id,
            firstName: customer.firstName,
            lastName: customer.lastName,
            email: customer.email,
          },
          {
            expiresIn: '7 days',
            subject: String(customer.id),
            issuer: this.customerIssuer,
            audience: this.customerAudience,
          },
        ),
      };
    } else {
      throw new NotFoundException(
        'Error to creating customer token, please contact the operational sector for more information',
      );
    }
  }
  // Generating customer token
  async createEmployeeToken(employee: Employees) {
    console.log('createEmployeeToken', employee);
    if (employee) {
      return await {
        employeeToken: this.jwtService.sign(
          {
            id: employee.id,
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email,
          },
          {
            expiresIn: '28 days',
            subject: String(employee.id),
            issuer: this.employeeIssuer,
            audience: this.employeeAudience,
          },
        ),
      };
    } else {
      throw new NotFoundException(
        'Error to creating employee token, please contact the operational sector for more information',
      );
    }
  }
  // Checking token validation
  async checkCustomerTokenValidation(customerToken: string) {
    console.log('checkCustomerTokenValidation: ', customerToken);
    try {
      if (customerToken) {
        const data = await this.jwtService.verify(customerToken, {
          issuer: this.customerIssuer,
          audience: this.customerAudience,
        });
        return data;
      }
    } catch (error) {
      throw new BadRequestException(
        'Error to validating customer token, please contact the operational sector for more information',
        error,
      );
    }
  }
  // Checking employee token validation
  async checkEmployeeTokenValidation(employeeToken: string) {
    console.log('checkEmployeeTokenValidation: ', employeeToken);
    try {
      if (employeeToken) {
        const data = await this.jwtService.verify(employeeToken, {
          issuer: this.employeeIssuer,
          audience: this.employeeAudience,
        });
        return data;
      }
    } catch (error) {
      throw new BadRequestException(
        'Error to validating employee token, please contact the operational sector for more information',
        error,
      );
    }
  }
  // If customer token is validated it returns true, if not return false
  isCustomerValidToken(customerToken: string) {
    console.log('isCustomerValidToken', customerToken);
    if (customerToken) {
      this.checkCustomerTokenValidation(customerToken);
      return true;
    } else {
      return false;
    }
  }

  // If employee token is validated it returns true, if not return false
  isEmployeeValidToken(employeeToken: string) {
    console.log('isEmployeeValidToken', employeeToken);
    if (employeeToken) {
      this.checkEmployeeTokenValidation(employeeToken);
      return true;
    } else {
      return false;
    }
  }

  async customerLogin(email: string, password: string) {
    console.log('customerLogin', email, password);
    const customer = await this.prisma.customer.findFirst({
      where: {
        email,
      },
    });

    // Checking customer data to authorize login
    if (!customer) {
      throw new UnauthorizedException('Incorrect data, please try again.');
    }

    if (!(await bcrypt.compare(password, customer.password))) {
      throw new UnauthorizedException('Incorrect data, please try again.');
    }

    return this.createCustomerToken(customer);
  }

  async employeeLogin(email: string, password: string) {
    console.log('employeeLogin', email, password);
    const employee = await this.prisma.employees.findFirst({
      where: {
        email,
      },
    });

    // Checking employee data to authorize login
    if (!employee) {
      throw new UnauthorizedException('Incorrect data, please try again.');
    }

    if (!(await bcrypt.compare(password, employee.password))) {
      throw new UnauthorizedException('Incorrect data, please try again.');
    }

    return this.createEmployeeToken(employee);
  }

  // Checking customer data for reset password
  async customerForget(email: string, birthDate: string) {
    console.log('customerForget', email, birthDate);
    try {
      birthDate = moment(birthDate, 'DD-MM-YYYY').format(
        'YYYY-MM-DDT00:00:00.000-00:00',
      );
      const customer = await this.prisma.customer.findFirst({
        where: {
          email: email,
          birthDate: birthDate,
        },
      });

      if (!customer) {
        throw new UnauthorizedException('Incorrect data, please try again.');
      }

      const token = this.jwtService.sign(
        {
          id: customer.id,
        },
        {
          expiresIn: '15 minutes',
          subject: String(customer.id),
          issuer: 'customerForget',
          audience: this.customerAudience,
        },
      );

      return customer.id, token;
    } catch (error) {
      throw new BadRequestException(
        'Has occurred a error, please contact operational sector',
        error,
      );
    }
  }

  // Checking customer data for reset password
  async employeeForget(email: string, birthDate: string) {
    console.log('employeeForget', email, birthDate);
    try {
      birthDate = moment(birthDate, 'DD-MM-YYYY').format(
        'YYYY-MM-DDT00:00:00.000-00:00',
      );
      const employee = await this.prisma.employees.findFirst({
        where: {
          email: email,
          birthDate: birthDate,
        },
      });

      if (!employee) {
        throw new UnauthorizedException('Incorrect data, please try again.');
      }

      const token = this.jwtService.sign(
        {
          id: employee.id,
        },
        {
          expiresIn: '15 minutes',
          subject: String(employee.id),
          issuer: 'employeeForget',
          audience: this.employeeAudience,
        },
      );

      return employee.id, token;
    } catch (error) {
      throw new BadRequestException(
        'Has occurred a error, please contact operational sector',
        error,
      );
    }
  }

  // Resetting customer password
  async customerResetPassword(password: string, token: string) {
    console.log('customerResetPassword', password, token);
    // Validating token

    try {
      const isValidToken = this.jwtService.verify(token, {
        issuer: 'customerForget',
        audience: this.customerAudience,
      });

      if (!isValidToken.id) {
        throw new BadRequestException('Invalid token!');
      }

      password = await bcrypt.hash(password, await bcrypt.genSalt());

      const customer = await this.prisma.customer.update({
        where: {
          id: String(isValidToken.id),
        },
        data: {
          password,
        },
      });

      return this.createCustomerToken(customer);
    } catch (error) {
      throw new BadRequestException(
        'Has occurred a error, please contact operational sector',
        error,
      );
    }
  }

  // Resetting employee password
  async employeeResetPassword(password: string, token: string) {
    console.log('employeeResetPassword', password, token);
    // Validating token

    try {
      const isValidToken = this.jwtService.verify(token, {
        issuer: 'employeeForget',
        audience: this.employeeAudience,
      });

      if (!isValidToken.id) {
        throw new BadRequestException('Invalid token!');
      }

      password = await bcrypt.hash(password, await bcrypt.genSalt());

      const employee = await this.prisma.employees.update({
        where: {
          id: String(isValidToken.id),
        },
        data: {
          password,
        },
      });

      return this.createEmployeeToken(employee);
    } catch (error) {
      throw new BadRequestException(
        'Has occurred a error, please contact operational sector',
        error,
      );
    }
  }

  // Registering customer with token
  async customerRegister(data: ICustomer) {
    console.log('customerRegister', data);
    if (data) {
      const customer = await this.customerService.createNewCustomer(data);

      return this.createCustomerToken(customer);
    }
  }
  // Registering customer with token
  async employeeRegister(data: IEmployees) {
    console.log('employeeRegister', data);
    if (data) {
      const employee = await this.employeeService.createNewEmployee(data);

      return this.createEmployeeToken(employee);
    }
  }
}
