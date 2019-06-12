import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Usuario } from './interfaces/usuario.interface';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('UsuarioModelToken') private readonly usuarioModel: Model<Usuario>
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const createdUsuario = new this.usuarioModel(createUsuarioDto);
    return await createdUsuario.save();
  }

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioModel.find().exec();
  }

  async findOne(id: string): Promise<Usuario> {
    return await this.usuarioModel.findById(id).exec();
  }

  async update(id: string, updateUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return await this.usuarioModel.findByIdAndUpdate(id, updateUsuarioDto);
  }

  async delete(id: string) {
    await this.usuarioModel.findOneAndRemove(id).exec();
  }
}
