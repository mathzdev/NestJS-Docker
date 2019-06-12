import { Connection } from 'mongoose';

import { UsuarioSchema } from './schemas/usuario.schema';

export const usuarioProviders = [
  {
    provide: 'UsuarioModelToken',
    useFactory: (connection: Connection) =>
      connection.model('Usuario', UsuarioSchema),
    inject: ['DbConnectionToken']
  }
];
