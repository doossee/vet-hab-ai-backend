-- AlterTable
ALTER TABLE "BloodSerumTest" ADD COLUMN     "cobalt" DOUBLE PRECISION,
ADD COLUMN     "copper" DOUBLE PRECISION,
ADD COLUMN     "manganese" DOUBLE PRECISION,
ADD COLUMN     "zinc" DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "RumenTest" (
    "id" SERIAL NOT NULL,
    "animal_id" INTEGER,
    "disease_id" INTEGER,
    "date" TIMESTAMP(3) NOT NULL,
    "conclusion" TEXT,
    "infusoria_count" DOUBLE PRECISION,
    "scar_fluid_state" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RumenTest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RumenTest" ADD CONSTRAINT "RumenTest_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RumenTest" ADD CONSTRAINT "RumenTest_disease_id_fkey" FOREIGN KEY ("disease_id") REFERENCES "Disease"("id") ON DELETE CASCADE ON UPDATE CASCADE;
