-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'VETERINARIAN', 'FARMER');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "Breed" AS ENUM ('MEAT', 'MILK');

-- CreateEnum
CREATE TYPE "BodyType" AS ENUM ('WEAK', 'MEDIUM', 'STRONG');

-- CreateEnum
CREATE TYPE "ObesityType" AS ENUM ('HIGH', 'MEDIUM', 'LOW', 'LEAN', 'CACHEXIA');

-- CreateEnum
CREATE TYPE "BodyStructure" AS ENUM ('COARSE', 'SLIM', 'DENSE', 'WEAK');

-- CreateEnum
CREATE TYPE "CustomerType" AS ENUM ('MOBILE', 'CALM');

-- CreateEnum
CREATE TYPE "InspectionType" AS ENUM ('MORNING', 'EVENING', 'DISEASE', 'GENERAL');

-- CreateEnum
CREATE TYPE "SmellType" AS ENUM ('PUNGENT', 'WEAK', 'HAS', 'NO');

-- CreateEnum
CREATE TYPE "DungForm" AS ENUM ('NORMAL', 'SOLID', 'LIQUID', 'MEDIUM');

-- CreateTable
CREATE TABLE "Animal" (
    "id" SERIAL NOT NULL,
    "idCode" TEXT NOT NULL,
    "arrivalDate" TIMESTAMP(3) NOT NULL,
    "farmerId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "breed" "Breed" NOT NULL,
    "age" INTEGER NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "address" TEXT NOT NULL,
    "colorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vaccine" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "typeId" INTEGER NOT NULL,
    "animalId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vaccine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeneralInspection" (
    "id" SERIAL NOT NULL,
    "animalId" INTEGER NOT NULL,
    "bodyType" "BodyType" NOT NULL,
    "bodyStructure" "BodyStructure" NOT NULL,
    "obesity" "ObesityType" NOT NULL,
    "customerType" "CustomerType" NOT NULL,
    "colorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GeneralInspection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inspection" (
    "id" SERIAL NOT NULL,
    "diseaseId" INTEGER,
    "generalInspectionId" INTEGER,
    "temperature" DOUBLE PRECISION NOT NULL,
    "pulse" INTEGER NOT NULL,
    "respiratoryRate" DOUBLE PRECISION NOT NULL,
    "rumination" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Inspection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disease" (
    "id" SERIAL NOT NULL,
    "animalId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "conclusion" TEXT NOT NULL,

    CONSTRAINT "Disease_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeneralBloodTest" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "summary" TEXT NOT NULL,
    "erythrocyteCount" DOUBLE PRECISION NOT NULL,
    "leukocyteCount" DOUBLE PRECISION NOT NULL,
    "thrombocyteCount" DOUBLE PRECISION NOT NULL,
    "coe" DOUBLE PRECISION NOT NULL,
    "waterPercentage" DOUBLE PRECISION NOT NULL,
    "dryResiduePercentage" DOUBLE PRECISION NOT NULL,
    "hemoglobin" DOUBLE PRECISION NOT NULL,
    "glutathione" DOUBLE PRECISION NOT NULL,
    "animalId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GeneralBloodTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BloodSerumTest" (
    "id" SERIAL NOT NULL,
    "totalProtein" DOUBLE PRECISION NOT NULL,
    "totalCalcium" DOUBLE PRECISION NOT NULL,
    "organicPhosphorus" DOUBLE PRECISION NOT NULL,
    "albumen" DOUBLE PRECISION NOT NULL,
    "alphaGlobulin" DOUBLE PRECISION NOT NULL,
    "betaGlobulin" DOUBLE PRECISION NOT NULL,
    "gammaGlobulin" DOUBLE PRECISION NOT NULL,
    "creatine" DOUBLE PRECISION NOT NULL,
    "alkalineReserve" DOUBLE PRECISION NOT NULL,
    "glucose" DOUBLE PRECISION NOT NULL,
    "totalBilirubin" DOUBLE PRECISION NOT NULL,
    "cholesterol" DOUBLE PRECISION NOT NULL,
    "totalLipids" DOUBLE PRECISION NOT NULL,
    "vitaminA" DOUBLE PRECISION NOT NULL,
    "vitaminB" DOUBLE PRECISION NOT NULL,
    "lacticAcid" DOUBLE PRECISION NOT NULL,
    "pyruvicAcid" DOUBLE PRECISION NOT NULL,
    "citricAcid" DOUBLE PRECISION NOT NULL,
    "urea" DOUBLE PRECISION NOT NULL,
    "ureaAcid" DOUBLE PRECISION NOT NULL,
    "animalId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BloodSerumTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UrineTest" (
    "id" SERIAL NOT NULL,
    "animalId" INTEGER,
    "diseaseId" INTEGER,
    "consistency" INTEGER NOT NULL,
    "smell" "SmellType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UrineTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DungTest" (
    "id" SERIAL NOT NULL,
    "animalId" INTEGER,
    "diseaseId" INTEGER,
    "consistency" INTEGER NOT NULL,
    "smell" "SmellType" NOT NULL,
    "form" "DungForm" NOT NULL,
    "worms" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DungTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "District" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "regionId" INTEGER NOT NULL,

    CONSTRAINT "District_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VetStation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "districtId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VetStation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnimalType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "AnimalType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Color" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "hex" TEXT,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UrineColor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "UrineColor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoolColor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "StoolColor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VaccineType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "VaccineType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiseaseType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "DiseaseType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "middleName" TEXT,
    "gender" "Gender",
    "birthdate" TIMESTAMP(3),
    "districtId" INTEGER NOT NULL,
    "address" TEXT,
    "role" "UserRole" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Veterinarian" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Veterinarian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Farmer" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "veterinarianId" INTEGER NOT NULL,

    CONSTRAINT "Farmer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Region_name_key" ON "Region"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Veterinarian_userId_key" ON "Veterinarian"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Farmer_userId_key" ON "Farmer"("userId");

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "Farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "AnimalType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vaccine" ADD CONSTRAINT "Vaccine_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "VaccineType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vaccine" ADD CONSTRAINT "Vaccine_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralInspection" ADD CONSTRAINT "GeneralInspection_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralInspection" ADD CONSTRAINT "GeneralInspection_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_diseaseId_fkey" FOREIGN KEY ("diseaseId") REFERENCES "Disease"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_generalInspectionId_fkey" FOREIGN KEY ("generalInspectionId") REFERENCES "GeneralInspection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disease" ADD CONSTRAINT "Disease_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disease" ADD CONSTRAINT "Disease_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "DiseaseType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralBloodTest" ADD CONSTRAINT "GeneralBloodTest_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodSerumTest" ADD CONSTRAINT "BloodSerumTest_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UrineTest" ADD CONSTRAINT "UrineTest_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UrineTest" ADD CONSTRAINT "UrineTest_diseaseId_fkey" FOREIGN KEY ("diseaseId") REFERENCES "Disease"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DungTest" ADD CONSTRAINT "DungTest_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DungTest" ADD CONSTRAINT "DungTest_diseaseId_fkey" FOREIGN KEY ("diseaseId") REFERENCES "Disease"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "District" ADD CONSTRAINT "District_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VetStation" ADD CONSTRAINT "VetStation_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Veterinarian" ADD CONSTRAINT "Veterinarian_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Farmer" ADD CONSTRAINT "Farmer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Farmer" ADD CONSTRAINT "Farmer_veterinarianId_fkey" FOREIGN KEY ("veterinarianId") REFERENCES "Veterinarian"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
