import { IsNotEmpty } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({name: "tb_categorias"})
export class Categorias {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    estilo: string

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    desenvolvedor: string   
}