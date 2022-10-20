import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutosController } from "./controllers/produto.controller";
import { Produtos } from "./entities/produto.entity";
import { ProdutosService } from "./services/produto.service";

@Module({
    imports: [TypeOrmModule.forFeature([Produtos])],
    providers: [ProdutosService],
    controllers: [ProdutosController],
    exports: [TypeOrmModule]
})
export class ProdutosModule {}