import { ApiProperty } from "@nestjs/swagger";
import { MetaDateEntity } from "src/common/pagination";
import { VeterinarianEntity } from "./veterinarian.entity";

export class PaginatedVeterinariansEntity {
  @ApiProperty({ type: [VeterinarianEntity] })
  data: VeterinarianEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}
