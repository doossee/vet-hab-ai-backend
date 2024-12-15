/*
  Warnings:

  - Changed the type of `birthDate` on the `Animal` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Vaccine" DROP CONSTRAINT "Vaccine_animalId_fkey";

-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "birthDate",
ADD COLUMN     "birthDate" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Vaccine" ADD CONSTRAINT "Vaccine_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;
