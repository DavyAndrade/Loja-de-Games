import { Body, Put, Post, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { Produtos } from "../entities/produto.entity";
import { ProdutosService } from "../services/produto.service";

@Controller("/jogos")
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Produtos[]> {
    return this.produtosService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Produtos> {
    return this.produtosService.FindById(id);
  }

  @Get('/search/:nome')
  @HttpCode(HttpStatus.OK)
  findByTitulo(@Param('nome') titulo: string): Promise<Produtos[]> {
    return this.produtosService.findByTitulo(titulo)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() Produtos: Produtos): Promise<Produtos> {
    return this.produtosService.create(Produtos);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() Produtos: Produtos): Promise<Produtos> {
    return this.produtosService.update(Produtos);
  }
}