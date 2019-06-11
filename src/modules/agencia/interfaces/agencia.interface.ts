import { Document } from 'mongoose';

export interface Agencia extends Document {
  readonly banco: string;
  readonly codAgencia: number;
  readonly endereco: string;
}
