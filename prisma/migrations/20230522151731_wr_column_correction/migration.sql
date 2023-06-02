/*
  Warnings:

  - You are about to drop the column `WR` on the `StatusAgencia` table. All the data in the column will be lost.
  - Added the required column `WR_` to the `StatusAgencia` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[StatusAgencia] DROP COLUMN [WR];
ALTER TABLE [dbo].[StatusAgencia] ADD [WR_] BIT NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
