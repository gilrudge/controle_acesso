BEGIN TRY

BEGIN TRAN;

-- DropIndex
ALTER TABLE [dbo].[Controle_acesso] DROP CONSTRAINT [Controle_acesso_end_ip_key];

-- DropIndex
ALTER TABLE [dbo].[Controle_acesso] DROP CONSTRAINT [Controle_acesso_mac_adress_key];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
