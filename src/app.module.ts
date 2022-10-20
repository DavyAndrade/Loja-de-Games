import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriasModule } from './categorias/categorias.module';
import { Categorias } from './categorias/entities/categorias.entity';
import { Produtos } from './produto/entities/produto.entity';
import { ProdutosModule } from './produto/produto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_games',
      entities: [Produtos, Categorias],
      synchronize: true
    }),
    ProdutosModule,
    CategoriasModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
