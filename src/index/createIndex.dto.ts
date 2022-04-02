import { IsDateString, IsNumberString, IsString } from 'class-validator';

export class CreateIndex {
  @IsString()
  nama: string;

  @IsString()
  blok: string;

  @IsNumberString()
  nohp: string;

  @IsDateString()
  jadwal: string;

  @IsString()
  paket: string;
}
