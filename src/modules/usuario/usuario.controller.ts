import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';

import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './interfaces/usuario.interface';
import { ApiUseTags, ApiOperation, ApiImplicitParam } from '@nestjs/swagger';

@ApiUseTags('usuario')
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  @ApiOperation({title: 'Listagem de todos os usuarios'})
  async findAll(): Promise<Usuario[]> {
    return this.usuarioService.findAll();
  }

  @Post()
  @ApiOperation({title: 'Cadastrar um usuario'})
  async create(@Body() createContactDto: CreateUsuarioDto) {
    this.usuarioService.create(createContactDto);
  }

  @Get(':id')
  @ApiImplicitParam({ name: 'id' })
  @ApiOperation({title: 'Visualizar um usuario'})
  async findOne(@Param('id') id): Promise<Usuario>  {
    return this.usuarioService.findOne(id);
  }

  @Put(':id')
  @ApiImplicitParam({ name: 'id' })
  @ApiOperation({title: 'Atualizar um usuario'})
  async update(@Param('id') id, @Body() createContactDto: CreateUsuarioDto): Promise<Usuario>  {
    return this.usuarioService.update(id, createContactDto);
  }

  @Delete(':id')
  @ApiImplicitParam({ name: 'id' })
  @ApiOperation({title: 'Deletar um usuario'})
  async delete(@Param('id') id) {
    this.usuarioService.delete(id);
  }
}
