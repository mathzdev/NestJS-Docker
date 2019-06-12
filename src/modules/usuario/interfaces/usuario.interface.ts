import { Document } from 'mongoose';

export interface Usuario extends Document {
  readonly nome: string;
  readonly cep: string;
  readonly banco: string;
  readonly agencia: string;
  readonly conta: number;
}
