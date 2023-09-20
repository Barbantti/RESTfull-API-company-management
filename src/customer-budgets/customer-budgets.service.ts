import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ICustomerBudgets } from 'src/interfaces/interfaces';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomerBudgetsService {
  constructor(private readonly prisma: PrismaService) {}

  // Create new budget
  async createNewBudget(data: ICustomerBudgets) {
    // Checking data
    if (data) {
      console.log('CREATE NEW BUDGET: ', data);
      const newBudget = await this.prisma.budgets.create({ data });
      return newBudget;
    } else {
      throw new NotFoundException(
        'Please insert valid data to create new budget.',
      );
    }
  }

  // Search all budgets on db
  async getAllBudgets() {
    return await this.prisma.budgets.findMany();
  }

  // Search a budget by id
  async getBudgetById(id: string) {
    await this.checkBudgetId(id);
    return await this.prisma.budgets.findUnique({
      where: {
        id,
      },
    });
  }

  // Updating a budget
  async updateBudgetById(data: ICustomerBudgets, id: string) {
    await this.checkBudgetId(id);
    if (data && id) {
      const updateBudget = await this.prisma.budgets.update({
        data,
        where: {
          id,
        },
      });
      return updateBudget;
    } else {
      throw new BadRequestException('Please insert a valid data to update.');
    }
  }

  // Delete a budget
  async deleteBudgetById(id: string) {
    await this.checkBudgetId(id);
    return this.prisma.budgets.delete({
      where: {
        id,
      },
    });
  }

  // Checking if budget exist
  async checkBudgetId(id: string) {
    if (
      !(await this.prisma.budgets.count({
        where: {
          id,
        },
      }))
    ) {
      throw new BadRequestException(`Budget data ${id}, does not exist.`);
    }
  }
}
