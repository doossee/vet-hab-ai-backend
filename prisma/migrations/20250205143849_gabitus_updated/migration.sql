/*
  Warnings:

  - You are about to drop the column `id_code` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `customer_type` on the `GeneralInspection` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name_or_code]` on the table `Animal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name_or_code` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `body_position` to the `GeneralInspection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `character` to the `GeneralInspection` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BodyPosition" AS ENUM ('NATURAL', 'FORCED', 'FORCED_STANDING', 'FORCED_LYING', 'FORCED_SITTING', 'NON_THERAPEUTIC');

-- CreateEnum
CREATE TYPE "CharacterType" AS ENUM ('MOBILE', 'CALM');

-- DropIndex
DROP INDEX "Animal_id_code_key";

-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "id_code",
DROP COLUMN "name",
ADD COLUMN     "name_or_code" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "GeneralInspection" DROP COLUMN "customer_type",
ADD COLUMN     "body_position" "BodyPosition" NOT NULL,
ADD COLUMN     "character" "CharacterType" NOT NULL;

-- DropEnum
DROP TYPE "CustomerType";

-- CreateIndex
CREATE UNIQUE INDEX "Animal_name_or_code_key" ON "Animal"("name_or_code");
