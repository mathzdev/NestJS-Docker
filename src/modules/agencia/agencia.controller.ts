import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';

import { AgenciaService } from './agencia.service';
import { CreateAgenciaDto } from './dto/create-agencia.dto';
import { Agencia } from './interfaces/agencia.interface';
import { ApiUseTags, ApiOperation, ApiImplicitParam } from '@nestjs/swagger';

@ApiUseTags('agencia')
@Controller('agencia')
export class AgenciaController {
  constructor(private readonly agenciaService: AgenciaService) {}

  @Get()
  @ApiOperation({title: 'Listagem de todas as agencias'})
  async findAll(): Promise<Agencia[]> {
    return this.agenciaService.findAll();
  }

  @Post()
  @ApiOperation({title: 'Cadastrar uma agencia'})
  async create(@Body() createContactDto: CreateAgenciaDto) {
    this.agenciaService.create(createContactDto);
  }

  @Get(':id')
  @ApiImplicitParam({ name: 'id' })
  @ApiOperation({title: 'Visualizar uma agencia'})
  async findOne(@Param('id') id): Promise<Agencia>  {
    return this.agenciaService.findOne(id);
  }

  @Put(':id')
  @ApiImplicitParam({ name: 'id' })
  @ApiOperation({title: 'Atualizar uma agencia'})
  async update(@Param('id') id, @Body() createContactDto: CreateAgenciaDto): Promise<Agencia>  {
    return this.agenciaService.update(id, createContactDto);
  }

  @Delete(':id')
  @ApiImplicitParam({ name: 'id' })
  @ApiOperation({title: 'Deletar uma agencia'})
  async delete(@Param('id') id) {
    this.agenciaService.delete(id);
  }
}
