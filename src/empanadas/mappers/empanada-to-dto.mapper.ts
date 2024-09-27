import {Empanada} from "../entities/empanada.entity";
import {GetEmpanadaDto} from "../dto/get-empanada.dto";

function empanadaToDto(empanada: Empanada): GetEmpanadaDto {
    let getEmpanadaDto = new GetEmpanadaDto();
    getEmpanadaDto.name = empanada.name;
    getEmpanadaDto.id = empanada.id;
    getEmpanadaDto.price = empanada.price;
    return getEmpanadaDto;
}

function empanadasToDtos(empanada: Empanada[]): GetEmpanadaDto[] {
    let getEmpanadaDtos: GetEmpanadaDto[] = []
    empanada.map((value) => {
            let dto: GetEmpanadaDto = {
                id: value.id,
                name: value.name,
                price: value.price
            }
            getEmpanadaDtos.push(dto);
        }
    )
    return getEmpanadaDtos;
}

export {empanadaToDto, empanadasToDtos};