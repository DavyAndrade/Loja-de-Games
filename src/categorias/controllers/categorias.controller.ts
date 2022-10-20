import { Body, Put, Post, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch } from "@nestjs/common";
import { Categorias } from "../entities/categorias.entity";
import { CategoriasService } from "../services/produto.service";

@Controller("/categorias")
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) { }

  @Get() // funcionando
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Categorias[]> {
    return this.categoriasService.findAll();
  }

  @Get('/:id') // funcionando
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Categorias> {
    return this.categoriasService.FindById(id);
  }

  @Get('/search/:cat')
  @HttpCode(HttpStatus.OK)
  findByTipo(@Param('cat') cat: string): Promise<Categorias[]> {
    return this.categoriasService.findByTipo(cat)
  }

  @Post() // funcionando
  @HttpCode(HttpStatus.CREATED)
  create(@Body() Produtos: Categorias): Promise<Categorias> {
    return this.categoriasService.create(Produtos);
  }

  @Patch()
  @HttpCode(HttpStatus.OK)
  update(@Body() Categorias: Categorias): Promise<Categorias> {
    return this.categoriasService.update(Categorias)
  }
}