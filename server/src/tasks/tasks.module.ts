import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { TasksService } from './tasks.service';
import { TasksResolver } from './tasks.resolver';

@Module({
	providers: [PrismaService, TasksResolver, TasksService],
})
export class TasksModule {}
