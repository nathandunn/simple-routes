import { EntityRepository, Repository } from 'typeorm';
import { Gmt } from './gmt';
@EntityRepository(Gmt)
export class GmtRepository extends Repository<Gmt> {}
