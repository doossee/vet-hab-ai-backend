/*
  Warnings:

  - You are about to alter the column `name` on the `AnimalType` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(40)`.
  - You are about to alter the column `name` on the `Color` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(40)`.
  - You are about to alter the column `hex` on the `Color` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(8)`.
  - You are about to alter the column `name` on the `DiseaseType` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(40)`.
  - You are about to alter the column `name` on the `District` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(40)`.
  - You are about to alter the column `name` on the `DungColor` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(40)`.
  - You are about to alter the column `name` on the `Region` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(40)`.
  - You are about to alter the column `name` on the `UrineColor` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(40)`.
  - You are about to alter the column `name` on the `VaccineType` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(40)`.
  - You are about to alter the column `name` on the `VetStation` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(40)`.
  - You are about to alter the column `address` on the `VetStation` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(80)`.
  - Added the required column `eyelid_id` to the `GeneralInspection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leather_cover_id` to the `GeneralInspection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AnimalType" ALTER COLUMN "name" SET DATA TYPE VARCHAR(40);

-- AlterTable
ALTER TABLE "Color" ALTER COLUMN "name" SET DATA TYPE VARCHAR(40),
ALTER COLUMN "hex" SET DATA TYPE VARCHAR(8);

-- AlterTable
ALTER TABLE "DiseaseType" ALTER COLUMN "name" SET DATA TYPE VARCHAR(40);

-- AlterTable
ALTER TABLE "District" ALTER COLUMN "name" SET DATA TYPE VARCHAR(40);

-- AlterTable
ALTER TABLE "DungColor" ALTER COLUMN "name" SET DATA TYPE VARCHAR(40);

-- AlterTable
ALTER TABLE "GeneralInspection" ADD COLUMN     "eyelid_id" INTEGER NOT NULL,
ADD COLUMN     "leather_cover_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Region" ALTER COLUMN "name" SET DATA TYPE VARCHAR(40);

-- AlterTable
ALTER TABLE "UrineColor" ALTER COLUMN "name" SET DATA TYPE VARCHAR(40);

-- AlterTable
ALTER TABLE "VaccineType" ALTER COLUMN "name" SET DATA TYPE VARCHAR(40);

-- AlterTable
ALTER TABLE "VetStation" ALTER COLUMN "name" SET DATA TYPE VARCHAR(40),
ALTER COLUMN "address" SET DATA TYPE VARCHAR(80);

-- CreateTable
CREATE TABLE "LeatherCover" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(40) NOT NULL,

    CONSTRAINT "LeatherCover_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Eyelid" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(40) NOT NULL,

    CONSTRAINT "Eyelid_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GeneralInspection" ADD CONSTRAINT "GeneralInspection_leather_cover_id_fkey" FOREIGN KEY ("leather_cover_id") REFERENCES "LeatherCover"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralInspection" ADD CONSTRAINT "GeneralInspection_eyelid_id_fkey" FOREIGN KEY ("eyelid_id") REFERENCES "Eyelid"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
