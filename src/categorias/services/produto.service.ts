import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import { Categorias } from "../entities/categorias.entity";

@Injectable()
export class CategoriasService {
    constructor(
        @InjectRepository(Categorias)
        private categoriasRepository: Repository<Categorias>) {}

    async findAll(): Promise<Categorias[]> {
        return await this.categoriasRepository.find();
    }

    async FindById(id: number): Promise<Categorias> {

        let Categorias = await this.categoriasRepository.findOne({
            where: {
                id
            }
        });

        if (!Categorias)
            throw new HttpException('Produtos não encontrada!', HttpStatus.NOT_FOUND);

        return Categorias;
    }

    async findByTipo(estilo: string): Promise<Categorias[]> {
        return await this.categoriasRepository.find({
            where: {
                estilo: ILike(`%${Categorias}%`)
            }
        })
    }

    async create(Categorias: Categorias): Promise<Categorias> {
        return await this.categoriasRepository.save(Categorias);
    }

    async update(Categorias: Categorias): Promise<Categorias> {
        let buscaCategoria: Categorias = await this.FindById(Categorias.id);

        if (buscaCategoria || !Categorias.id)
        throw new HttpException('Postagem Não Encontrada!', HttpStatus.NOT_FOUND);

        return await this.categoriasRepository.save(Categorias);
    }
}
