BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [M00] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [M01] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [M02] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [M03] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [M04] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [M05] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [M06] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [M07] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [M08] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [M09] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [M10] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [M11] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [M12] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [M13] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [M14] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [M15] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [M16] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [M17] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [M18] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [M19] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [M20] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [M21] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [G00] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [G21] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [AA_] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [AF_] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [CA_] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [CF_] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [H1_] BIT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [S1_] BIT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [H2_] BIT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [S2_] BIT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [H3_] BIT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [S3_] BIT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [H4_] BIT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [S4_] BIT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [HF_] BIT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [PF_] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [PS_] INT NULL;
ALTER TABLE [dbo].[StatusAgencia] ALTER COLUMN [WR_] BIT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
