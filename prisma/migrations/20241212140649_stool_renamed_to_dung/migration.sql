/*
  Warnings:

  - You are about to drop the `StoolColor` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `clarity` to the `DungTest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `colorId` to the `DungTest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clarity` to the `UrineTest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `colorId` to the `UrineTest` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UrineClarity" AS ENUM ('CLEAR', 'NOT_CLEAR');

-- CreateEnum
CREATE TYPE "DungClarity" AS ENUM ('CLEAR', 'NOT_CLEAR');

-- AlterTable
ALTER TABLE "DungTest" ADD COLUMN     "clarity" "DungClarity" NOT NULL,
ADD COLUMN     "colorId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UrineTest" ADD COLUMN     "clarity" "UrineClarity" NOT NULL,
ADD COLUMN     "colorId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "StoolColor";

-- CreateTable
CREATE TABLE "DungColor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "DungColor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UrineTest" ADD CONSTRAINT "UrineTest_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "UrineColor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DungTest" ADD CONSTRAINT "DungTest_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "DungColor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
