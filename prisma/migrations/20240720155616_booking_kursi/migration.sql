-- CreateTable
CREATE TABLE "Kursi" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "lantai" TEXT NOT NULL,
    "statusKursi" TEXT NOT NULL,

    CONSTRAINT "Kursi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "kursis" JSONB[],
    "tanggalWaktu" TIMESTAMP(3) NOT NULL,
    "durasi" INTEGER NOT NULL,
    "statusBooking" TEXT NOT NULL,
    "intent_id" TEXT,
    "userEmail" TEXT NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Booking_intent_id_key" ON "Booking"("intent_id");

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
