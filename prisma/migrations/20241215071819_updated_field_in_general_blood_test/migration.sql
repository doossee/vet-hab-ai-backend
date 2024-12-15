-- AlterTable
ALTER TABLE "GeneralBloodTest" ALTER COLUMN "erythrocyteCount" DROP NOT NULL,
ALTER COLUMN "leukocyteCount" DROP NOT NULL,
ALTER COLUMN "thrombocyteCount" DROP NOT NULL,
ALTER COLUMN "coe" DROP NOT NULL,
ALTER COLUMN "waterPercentage" DROP NOT NULL,
ALTER COLUMN "dryResiduePercentage" DROP NOT NULL,
ALTER COLUMN "hemoglobin" DROP NOT NULL,
ALTER COLUMN "glutathione" DROP NOT NULL;
