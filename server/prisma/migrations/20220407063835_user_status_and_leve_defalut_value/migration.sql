-- AlterTable
ALTER TABLE `Auth` MODIFY `level` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `User` MODIFY `user_status` INTEGER NOT NULL DEFAULT 1,
    MODIFY `google_id` VARCHAR(191) NULL;
