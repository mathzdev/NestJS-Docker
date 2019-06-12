import { Module } from '@nestjs/common';

import { AgenciaModule } from './agencia/agencia.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
    imports: [AgenciaModule, UsuarioModule],
})
export class ApplicationModule {}