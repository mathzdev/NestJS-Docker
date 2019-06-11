import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { AgenciaController } from './agencia.controller';
import { agenciaProviders } from './agencia.providers';
import { AgenciaService } from './agencia.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AgenciaController],
  providers: [AgenciaService, ...agenciaProviders]
})
export class AgenciaModule {}
