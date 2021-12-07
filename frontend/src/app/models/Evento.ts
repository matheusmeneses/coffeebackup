import { SelectItem } from 'primeng';
import Usuario from "./Usuario";
import Situacao from "./Situacao";
import {Select} from './Select';

export default interface Evento {
    id: any;
    data: any;
    valor: number;
    motivo: Select;
    patrocinadores: SelectItem[];
    nomesPatrocinadores: string;
}
