import { Module } from '@nestjs/common';

import { AgenciaModule } from './agencia/agencia.module';

@Module({
    imports: [AgenciaModule],
})
export class ApplicationModule {}