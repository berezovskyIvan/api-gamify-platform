import { Module } from '@nestjs/common';

import { HealthCheckModule } from './health-check/health-check.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [HealthCheckModule, PrismaModule],
})
export class AppModule {}
