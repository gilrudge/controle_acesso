BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[StatusAgencia] (
    [id_status] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [StatusAgencia_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [StatusAgencia_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    [NA_] VARCHAR(15) NOT NULL,
    [M00] INT NOT NULL,
    [M01] INT NOT NULL,
    [M02] INT NOT NULL,
    [M03] INT NOT NULL,
    [M04] INT NOT NULL,
    [M05] INT NOT NULL,
    [M06] INT NOT NULL,
    [M07] INT NOT NULL,
    [M08] INT NOT NULL,
    [M09] INT NOT NULL,
    [M10] INT NOT NULL,
    [M11] INT NOT NULL,
    [M12] INT NOT NULL,
    [M13] INT NOT NULL,
    [M14] INT NOT NULL,
    [M15] INT NOT NULL,
    [M16] INT NOT NULL,
    [M17] INT NOT NULL,
    [M18] INT NOT NULL,
    [M19] INT NOT NULL,
    [M20] INT NOT NULL,
    [M21] INT NOT NULL,
    [G00] INT NOT NULL,
    [G21] INT NOT NULL,
    [AA_] INT NOT NULL,
    [AF_] INT NOT NULL,
    [CA_] INT NOT NULL,
    [CF_] INT NOT NULL,
    [H1_] BIT NOT NULL,
    [S1_] BIT NOT NULL,
    [H2_] BIT NOT NULL,
    [S2_] BIT NOT NULL,
    [H3_] BIT NOT NULL,
    [S3_] BIT NOT NULL,
    [H4_] BIT NOT NULL,
    [S4_] BIT NOT NULL,
    [HF_] BIT NOT NULL,
    [PF_] INT NOT NULL,
    [PS_] INT NOT NULL,
    [WR] BIT NOT NULL,
    CONSTRAINT [StatusAgencia_pkey] PRIMARY KEY CLUSTERED ([id_status]),
    CONSTRAINT [StatusAgencia_NA__key] UNIQUE NONCLUSTERED ([NA_])
);

-- AddForeignKey
ALTER TABLE [dbo].[StatusAgencia] ADD CONSTRAINT [StatusAgencia_NA__fkey] FOREIGN KEY ([NA_]) REFERENCES [dbo].[Agencia]([numero_ag]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
