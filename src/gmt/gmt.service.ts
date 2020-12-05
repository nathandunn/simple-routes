import { Injectable } from '@nestjs/common';
import { Gmt } from './gmt';
import { InjectRepository } from '@nestjs/typeorm';
import { GmtRepository } from './gmt.repository';

@Injectable()
export class GmtService {
  get gmtRepository(): GmtRepository {
    return this._gmtRepository;
  }

  set gmtRepository(value: GmtRepository) {
    this._gmtRepository = value;
  }
  private _gmtRepository: GmtRepository;

  // constructor(
  //   @InjectRepository(GmtRepository)
  //   private gmtRepository: GmtRepository,
  // ) {}

  async findAll(): Promise<Gmt[]> {
    return this._gmtRepository.find();
  }
}
