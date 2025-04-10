-- CreateTable
CREATE TABLE "jogos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "developer" TEXT NOT NULL,
    "genres" TEXT NOT NULL,
    "platforms" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
