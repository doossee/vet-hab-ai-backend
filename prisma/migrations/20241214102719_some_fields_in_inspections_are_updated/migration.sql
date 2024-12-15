/*
  Warnings:

  - You are about to drop the column `summary` on the `GeneralBloodTest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BloodSerumTest" ALTER COLUMN "totalProtein" DROP NOT NULL,
ALTER COLUMN "totalCalcium" DROP NOT NULL,
ALTER COLUMN "organicPhosphorus" DROP NOT NULL,
ALTER COLUMN "albumen" DROP NOT NULL,
ALTER COLUMN "alphaGlobulin" DROP NOT NULL,
ALTER COLUMN "betaGlobulin" DROP NOT NULL,
ALTER COLUMN "gammaGlobulin" DROP NOT NULL,
ALTER COLUMN "creatine" DROP NOT NULL,
ALTER COLUMN "alkalineReserve" DROP NOT NULL,
ALTER COLUMN "glucose" DROP NOT NULL,
ALTER COLUMN "totalBilirubin" DROP NOT NULL,
ALTER COLUMN "cholesterol" DROP NOT NULL,
ALTER COLUMN "totalLipids" DROP NOT NULL,
ALTER COLUMN "vitaminA" DROP NOT NULL,
ALTER COLUMN "vitaminB" DROP NOT NULL,
ALTER COLUMN "lacticAcid" DROP NOT NULL,
ALTER COLUMN "pyruvicAcid" DROP NOT NULL,
ALTER COLUMN "citricAcid" DROP NOT NULL,
ALTER COLUMN "urea" DROP NOT NULL,
ALTER COLUMN "ureaAcid" DROP NOT NULL;

-- AlterTable
ALTER TABLE "GeneralBloodTest" DROP COLUMN "summary",
ADD COLUMN     "conclusion" TEXT;

-- AlterTable
ALTER TABLE "Inspection" ADD COLUMN     "animalId" INTEGER,
ALTER COLUMN "temperature" DROP NOT NULL,
ALTER COLUMN "pulse" DROP NOT NULL,
ALTER COLUMN "respiratoryRate" DROP NOT NULL,
ALTER COLUMN "rumination" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;
