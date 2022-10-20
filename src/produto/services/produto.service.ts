import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import { Produtos } from "../entities/produto.entity";

@Injectable()
export class ProdutosService {
    constructor(
        @InjectRepository(Produtos)
        private produtosRepository: Repository<Produtos>
    ) { }

    async findAll(): Promise<Produtos[]> {
        return await this.produtosRepository.find();
    }

    async FindById(id: number): Promise<Produtos> {

        let Produtos = await this.produtosRepository.findOne({
            where: {
                id
            }
        });

        if (!Produtos)
            throw new HttpException('Produtos não encontrada!', HttpStatus.NOT_FOUND);

        return Produtos;
    }

    async findByTitulo(nome: string): Promise<Produtos[]> {
        return await this.produtosRepository.find({
            where: {
                nome: ILike(`%${Produtos}%`)
            }
        })
    }

    async create(Produtos: Produtos): Promise<Produtos> {
        return await this.produtosRepository.save(Produtos);
    }

    async update(Produtos: Produtos): Promise<Produtos> {
        let buscaProdutos: Produtos = await this.FindById(Produtos.id);

        if (buscaProdutos || !Produtos.id)
        throw new HttpException('Produto Não Encontrada!', HttpStatus.NOT_FOUND);

        return await this.produtosRepository.save(Produtos);
    }
}
