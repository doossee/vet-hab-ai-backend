/*
  Warnings:

  - Added the required column `updated_at` to the `Disease` table without a default value. This is not possible if the table is not empty.
  - Made the column `conclusion` on table `GeneralBloodTest` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `type` to the `Inspection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Disease" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "GeneralBloodTest" ALTER COLUMN "conclusion" SET NOT NULL;

-- AlterTable
ALTER TABLE "Inspection" ADD COLUMN     "conclusion" TEXT,
ADD COLUMN     "type" "InspectionType" NOT NULL;
