import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<mongoose.Connection> => {
      (mongoose as any).Promise = global.Promise;
      return await mongoose.connect('mongodb://usuariosagencias:agenciasusuarios1@ds141623.mlab.com:41623/docker-usuarios-agencias');
    }
  }
];
